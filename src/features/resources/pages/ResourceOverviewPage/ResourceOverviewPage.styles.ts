import styled from 'styled-components'

export const PageWrapper = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
`

export const BackLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 14px;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.inkStrong};
    text-decoration: underline;
  }
`

export const PageHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const ResourceId = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.inkMuted};
`

export const UnsavedBanner = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.warning};
`

export const ModulesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`


export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const ProvisionHint = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.inkMuted};
`

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.warning};
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.md};
`
