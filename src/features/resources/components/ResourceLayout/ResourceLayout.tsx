import { useState, useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { useResource } from '@features/resources/hooks'
import { Loader } from '@shared/components/Loader'
import { ErrorState } from '@shared/components/ErrorState'
import type { BufferState, ResourceLayoutContext } from './ResourceLayout.types'

export function ResourceLayout() {
  const { resourceId } = useParams<{ resourceId: string }>();
  const id = Number(resourceId);
  const [buffer, setBuffer] = useState<BufferState>({});

  useEffect(() => {
    setBuffer({});
  }, [id]);

  const { data: resource, isLoading, isError, error } = useResource(id);

  if (isLoading) return <Loader />;

  if (isError || !resource) {
    return <ErrorState message={(error as { message?: string })?.message} />;
  }

  const context: ResourceLayoutContext = {
    resource,
    buffer,
    hasBufferChanges: Boolean(buffer.basicInfo || buffer.projectDetails),
    setBasicInfoBuffer: (info) => setBuffer((prev) => ({ ...prev, basicInfo: info })),
    setProjectDetailsBuffer: (details) => setBuffer((prev) => ({ ...prev, projectDetails: details })),
    clearBuffer: () => setBuffer({}),
  }

  return <Outlet context={context} />
}
