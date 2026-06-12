import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';
import type { UpdateProjectDetailsBody } from '@features/resources/api/dto';

export function useUpdateProjectDetails(resourceId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: UpdateProjectDetailsBody) => resourcesApi.updateProjectDetails(resourceId, body),
    onSuccess: (data) => queryClient.setQueryData(resourceKeys.detail(resourceId), data),
  })
}
