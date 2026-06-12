import { useQuery } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';

export function useResource(resourceId: number) {
  return useQuery({
    queryKey: resourceKeys.detail(resourceId),
    queryFn: () => resourcesApi.get(resourceId),
  })
}
