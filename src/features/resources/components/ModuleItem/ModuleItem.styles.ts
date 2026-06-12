import styled from 'styled-components'

export const ModuleRow = styled.button<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
  font-family: inherit;
  text-align: left;
  transition: box-shadow 0.15s, border-color 0.15s;

  ${({ $disabled, theme }) =>
    !$disabled &&
    `
    &:hover {
      border-color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.card};
    }
  `}
`

export const ModuleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

export const StatusIcon = styled.div<{ $complete: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid
    ${({ $complete, theme }) => ($complete ? theme.colors.success : theme.colors.border)};
  background: ${({ $complete, theme }) => ($complete ? theme.colors.success : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-size: 11px;
  font-weight: bold;
`

export const ModuleInfo = styled.div``

export const ModuleName = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkStrong};
  font-size: 15px;
`

export const ModuleStatus = styled.div<{ $complete: boolean }>`
  font-size: 13px;
  color: ${({ $complete, theme }) => ($complete ? theme.colors.success : theme.colors.inkMuted)};
  margin-top: 2px;
`

export const ModuleRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;
`

export const Chevron = styled.span`
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 18px;
`
