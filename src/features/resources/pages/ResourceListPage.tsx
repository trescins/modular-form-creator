import { useState } from 'react'
import { ResourceCard } from '@features/resources/components/ResourceCard'
import { useCreateResource, useDeleteResource, useResourcesList } from '@features/resources/hooks'
import { Loader } from '@shared/components/Loader';
import { ErrorState } from '@shared/components/ErrorState';

export function ResourceListPage() {
  const [resourceName, setResourceName] = useState('');

  const { data, isLoading, isError, error } = useResourcesList();

  const createMutation = useCreateResource();

  const deleteMutation = useDeleteResource();

  const handleCreate = () => {
    if (!resourceName.trim()) return;
    createMutation.mutate({ resourceName });
    setResourceName('');
  }

  if (isLoading) return <Loader />;

  if (isError) return <ErrorState message={error?.message} />;

  return (
    <div>
      <h1>Resources List</h1>

      <div>
        <input
          value={resourceName}
          onChange={e => setResourceName(e.target.value)}
          placeholder="Resource name"
        />
        <button
          onClick={handleCreate}
          disabled={createMutation.isPending || !resourceName.trim()}
        >
          Create
        </button>
      </div>

      {!data?.items.length && <div>No resources yet</div>}

      {data?.items.map(resource => (
        <ResourceCard
          key={resource._id}
          resource={resource}
          onDelete={() => deleteMutation.mutate(resource.resourceId)}
        />
      ))}
    </div>
  )
}