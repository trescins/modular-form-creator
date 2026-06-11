import { request } from './client';
import type { Resource } from '@features/resources/model/resource';
import type {
    PaginatedResponse,
    ResourceListParams,
    CreateResourceBody,
    UpdateBasicInfoBody,
    UpdateProjectDetailsBody,
    PutResourceBody,
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

    updateBasicInfo(resourceId: number, body: UpdateBasicInfoBody) {
        return request<Resource>(`/api/resources/${resourceId}/basic-info`, {
            method: 'PATCH',
            body: JSON.stringify(body),
        });
    },

    updateProjectDetails(resourceId: number, body: UpdateProjectDetailsBody) {
        return request<Resource>(`/api/resources/${resourceId}/project-details`, {
            method: 'PATCH',
            body: JSON.stringify(body),
        });
    },

    provision(resourceId: number) {
        return request<Resource>(`/api/resources/${resourceId}/provisioning`, {
            method: 'PATCH',
        });
    },

    put(resourceId: number, body: PutResourceBody) {
        return request<Resource>(`/api/resources/${resourceId}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
    },
}
