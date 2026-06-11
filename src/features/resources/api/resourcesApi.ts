import { request } from './client';
import type { Resource } from '@features/resources/model/resource';
import type {
    PaginatedResponse,
    ResourceListParams,
    CreateResourceBody,
} from './dto';


export const resourceKeys = {
    all: ['resources'] as const,
    list: (params?: ResourceListParams) => ['resources', 'list', params] as const,
    detail: (id: number) => ['resources', id] as const,
};

export const resourcesApi = {
    list(params?: ResourceListParams) {
        const query = new URLSearchParams()
      
        if (params) {
          Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
              query.set(key, String(value))
            }
          });
        }
      
        const qs = query.toString();

        return request<PaginatedResponse<Resource>>(`/api/resources${qs ? `?${qs}` : ''}`);
      },

    get(resourceId: number) {
        return request<Resource>(`/api/resources/${resourceId}`);
    },

    create(body: CreateResourceBody) {
        return request<Resource>('/api/resources', {
            method: 'POST',
            body: JSON.stringify(body),
        });
    },

    delete(resourceId: number) {
        return request<Resource>(`/api/resources/${resourceId}`, {
            method: 'DELETE',
        });
    },
}