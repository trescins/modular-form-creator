import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(18, 33, 43, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export const Dialog = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 400px;
  width: 90%;
  box-shadow: ${({ theme }) => theme.shadows.raised};
`

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 18px;
`

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.inkMuted};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`
