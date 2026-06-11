import { useQuery } from '@tanstack/react-query';
import { resourcesApi, resourceKeys } from '@features/resources/api/resourcesApi';
import type { ResourceListParams } from '@features/resources/api/dto';

export function useResourcesList(params?: ResourceListParams) {
  return useQuery({
    queryKey: resourceKeys.list(params),
    queryFn: () => resourcesApi.list(params),
  })
}