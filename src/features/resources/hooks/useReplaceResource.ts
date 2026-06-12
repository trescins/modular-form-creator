import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';
import type { PutResourceBody } from '@features/resources/api/dto';

export function useReplaceResource(resourceId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: PutResourceBody) => resourcesApi.put(resourceId, body),
    onSuccess: (data) => {
      queryClient.setQueryData(resourceKeys.detail(resourceId), data);
      queryClient.invalidateQueries({ queryKey: resourceKeys.list() });
    },
  })
}
