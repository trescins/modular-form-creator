import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';

export function useCreateResource() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resourcesApi.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: resourceKeys.all }),
  })
}