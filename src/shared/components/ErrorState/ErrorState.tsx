import styled from 'styled-components'

interface ErrorStateProps {
  message?: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.warning};
`

export function ErrorState({ message = 'Something went wrong' }: ErrorStateProps) {
  return <Wrapper>{message}</Wrapper>
}