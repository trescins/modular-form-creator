import type { BasicInfo, ProjectDetails, ResourceStatus } from '@features/resources/model/resource'

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface ApiErrorResponse {
  message: string;
  details?: Record<string, unknown>;
}

export interface CreateResourceBody {
  resourceName: string;
}

export type UpdateBasicInfoBody = BasicInfo;

export type UpdateProjectDetailsBody = ProjectDetails;

export interface PutResourceBody {
  name: string;
  basicInfo: BasicInfo;
  projectDetails: ProjectDetails;
}

export interface ResourceListParams {
  page?: number;
  pageSize?: number;
  status?: ResourceStatus;
  name?: string;
  sortOrder?: 'asc' | 'desc';
}
