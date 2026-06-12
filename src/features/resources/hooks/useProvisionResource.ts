import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';

export function useProvisionResource(resourceId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => resourcesApi.provision(resourceId),
    onSuccess: (data) => {
      queryClient.setQueryData(resourceKeys.detail(resourceId), data);
      queryClient.invalidateQueries({ queryKey: resourceKeys.list() });
    },
  })
}
