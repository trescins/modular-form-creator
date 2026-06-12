import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@design-system/components/Input'
import { Button } from '@design-system/components/Button'
import { IconButton } from '@design-system/components/IconButton'
import { ResourceStatusBadge } from '@features/resources/components/ResourceStatusBadge'
import { ConfirmDeleteModal } from '@features/resources/components/ConfirmDeleteModal'
import { useCreateResource, useDeleteResource, useResourcesList } from '@features/resources/hooks'
import type { Resource } from '@features/resources/model/resource'
import { Loader } from '@shared/components/Loader'
import { ErrorState } from '@shared/components/ErrorState'
import { NAME_REGEX } from '@features/resources/utils/validation'
import {
  PageWrapper,
  PageHeader,
  ItemCount,
  CreateRow,
  InputWrapper,
  ResourceList,
  ResourceRow,
  ResourceIdText,
  ResourceName,
  EmptyState,
} from './ResourceListPage.styles'

export function ResourceListPage() {
  const [resourceName, setResourceName] = useState('');
  const [nameError, setNameError] = useState('');
  const [pendingDelete, setPendingDelete] = useState<Resource | null>(null);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useResourcesList();
  const createMutation = useCreateResource();
  const deleteMutation = useDeleteResource();

  const items = data?.items ?? [];

  const handleCreate = () => {
    const trimmed = resourceName.trim();

    if (!trimmed) {
      setNameError('Required');
      return;
    }

    if (!NAME_REGEX.test(trimmed)) {
      setNameError('Letters, numbers, spaces and hyphens only');
      return;
    }

    const isDuplicate = items.some((r) => r.name.toLowerCase() === trimmed.toLowerCase());
    
    if (isDuplicate) {
      setNameError('A resource with this name already exists');
      return;
    }

    setNameError('');
    createMutation.mutate({ resourceName: trimmed }, {
      onError: (err) => setNameError(err.message ?? 'Could not create resource'),
    });
    setResourceName('');
  }

  const handleDeleteClick = (e: React.MouseEvent, resource: Resource) => {
    e.stopPropagation();
    setPendingDelete(resource);
  }

  const handleDeleteConfirm = () => {
    if (!pendingDelete) return;
    deleteMutation.mutate(pendingDelete.resourceId);
    setPendingDelete(null);
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResourceName(e.target.value);
    setNameError('');
  }

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') handleCreate();
  }

  if (isLoading) return <Loader />

  if (isError) return <ErrorState message={error?.message} />

  return (
    <PageWrapper>
      <PageHeader>
        <h1>Resources</h1>
        <ItemCount>{items.length} items</ItemCount>
      </PageHeader>

      <CreateRow>
        <InputWrapper>
          <Input
            value={resourceName}
            onChange={handleNameChange}
            onKeyDown={handleNameKeyDown}
            placeholder="New resource name"
            error={nameError}
          />
        </InputWrapper>
        <Button
          variant="primary"
          onClick={handleCreate}
          disabled={createMutation.isPending || !resourceName.trim()}
        >
          + Create
        </Button>
      </CreateRow>

      {items.length === 0 ? (
        <EmptyState>No resources yet</EmptyState>
      ) : (
        <ResourceList>
          {items.map((resource) => (
            <ResourceRow
              key={resource._id}
              onClick={() => navigate(`/resources/${resource.resourceId}`)}
            >
              <ResourceIdText>#{resource.resourceId}</ResourceIdText>
              <ResourceName>{resource.name}</ResourceName>
              <ResourceStatusBadge status={resource.status} />
              <IconButton
                variant="ghost"
                size="small"
                onClick={(e) => handleDeleteClick(e, resource)}
                title="Delete resource"
              >
                🗑
              </IconButton>
            </ResourceRow>
          ))}
        </ResourceList>
      )}

      {pendingDelete && (
        <ConfirmDeleteModal
          resourceName={pendingDelete.name}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setPendingDelete(null)}
        />
      )}
    </PageWrapper>
  )
}
