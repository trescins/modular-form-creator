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

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const SectionTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkMuted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`

export const FieldLabel = styled.span`
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 14px;
`

export const FieldValue = styled.span`
  color: ${({ theme }) => theme.colors.inkStrong};
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  max-width: 60%;
`

export const BackToOverview = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  padding: 0;
  font-family: inherit;

  &:hover {
    text-decoration: underline;
  }
`
