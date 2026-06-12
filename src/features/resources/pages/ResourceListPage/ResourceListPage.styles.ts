import styled from 'styled-components'

export const PageWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
`

export const PageHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const ItemCount = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.inkMuted};
`

export const CreateRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  align-items: flex-start;
`

export const InputWrapper = styled.div`
  flex: 1;
`

export const ResourceList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`

export const ResourceRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.1s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }
`

export const ResourceIdText = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.inkMuted};
  min-width: 32px;
  flex-shrink: 0;
`

export const ResourceName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkStrong};
  flex: 1;
`


export const EmptyState = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 14px;
`
