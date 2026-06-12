import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@design-system/components/Button'
import { Overlay, Dialog, Title, Message, Actions } from './ConfirmDeleteModal.styles'

interface ConfirmDeleteModalProps {
  resourceName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDeleteModal({ resourceName, onConfirm, onCancel }: ConfirmDeleteModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    }
    
    window.addEventListener('keydown', handleKey);

    return () => window.removeEventListener('keydown', handleKey);
  }, [onCancel]);

  return createPortal(
    <Overlay onClick={onCancel}>
      <Dialog onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <Title>Delete resource?</Title>
        <Message>
          <strong>{resourceName}</strong> will be permanently deleted. This cannot be undone.
        </Message>
        <Actions>
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="button" variant="primary" onClick={onConfirm}>
            Delete
          </Button>
        </Actions>
      </Dialog>
    </Overlay>,
    document.body
  )
}
