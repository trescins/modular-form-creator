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

export const PageTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const HalfField = styled.div`
  max-width: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const FormField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const FormActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.warning};
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.md};
`
