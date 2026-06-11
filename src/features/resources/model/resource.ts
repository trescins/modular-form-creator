export type ResourceStatus = 'draft' | 'completed';

export type Priority = 'low' | 'medium' | 'high';

export interface BasicInfo {
  resourceName: string;
  owner: string;
  email: string;
  description: string;
  priority: Priority;
}

export interface ProjectDetails {
  projectName: string;
  budget: string;
  category: string;
  options: string[];
}

export interface Resource {
  _id: string;
  resourceId: number;
  name: string;
  status: ResourceStatus;
  basicInfo: BasicInfo;
  projectDetails: ProjectDetails;
  basicInfoCompleted: boolean;
  projectDetailsCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}