import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';
import type { UpdateBasicInfoBody } from '@features/resources/api/dto';

export function useUpdateBasicInfo(resourceId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: UpdateBasicInfoBody) => resourcesApi.updateBasicInfo(resourceId, body),
    onSuccess: (data) => queryClient.setQueryData(resourceKeys.detail(resourceId), data),
  })
}
