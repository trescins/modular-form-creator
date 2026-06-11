import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';

export function useDeleteResource() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resourcesApi.delete,
    onSuccess: (_, resourceId) => {
        queryClient.removeQueries({ queryKey: resourceKeys.detail(resourceId) });
        queryClient.invalidateQueries({ queryKey: resourceKeys.list() });
    },
  })
}