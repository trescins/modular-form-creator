import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '@design-system/theme/theme'
import { ConfirmDeleteModal } from './ConfirmDeleteModal'

function renderModal(props?: Partial<Parameters<typeof ConfirmDeleteModal>[0]>) {
  const onConfirm = vi.fn()
  const onCancel = vi.fn()
  render(
    <ThemeProvider theme={theme}>
      <ConfirmDeleteModal
        resourceName="my-resource"
        onConfirm={onConfirm}
        onCancel={onCancel}
        {...props}
      />
    </ThemeProvider>
  )
  return { onConfirm, onCancel }
}

describe('ConfirmDeleteModal', () => {
  it('renders resource name and message', () => {
    renderModal({ resourceName: 'test-resource' })
    expect(screen.getByText('Delete resource?')).toBeInTheDocument()
    expect(screen.getByText('test-resource')).toBeInTheDocument()
    expect(screen.getByText(/permanently deleted/)).toBeInTheDocument()
  })

  it('calls onConfirm when Delete button is clicked', async () => {
    const { onConfirm } = renderModal()
    await userEvent.click(screen.getByRole('button', { name: 'Delete' }))
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  it('calls onCancel when Cancel button is clicked', async () => {
    const { onCancel } = renderModal()
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('calls onCancel when overlay is clicked', () => {
    const { onCancel } = renderModal()
    fireEvent.click(screen.getByRole('dialog').parentElement!)
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('does not call onCancel when dialog content is clicked', async () => {
    const { onCancel } = renderModal()
    await userEvent.click(screen.getByRole('dialog'))
    expect(onCancel).not.toHaveBeenCalled()
  })

  it('calls onCancel when Escape key is pressed', async () => {
    const { onCancel } = renderModal()
    await userEvent.keyboard('{Escape}')
    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
