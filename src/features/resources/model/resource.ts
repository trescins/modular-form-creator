import type { PRIORITY_VALUES, PROJECT_CATEGORY_VALUES, TEAM_MEMBER_VALUES } from "./constants";

export type ResourceStatus = 'draft' | 'completed';

export type Priority = typeof PRIORITY_VALUES[number];

export type ProjectCategory = typeof PROJECT_CATEGORY_VALUES[number];

export type TeamMember = typeof TEAM_MEMBER_VALUES[number];

export interface BasicInfo {
    resourceName: string
    owner: string
    email: string
    description: string
    priority: Priority | '' 
  }
  
  export interface ProjectDetails {
    projectName: string
    budget: string
    category: ProjectCategory | ''
    options: TeamMember[]
  }

export interface Resource {
  _id: string;
  resourceId: number;
  name: string;
  status: ResourceStatus;
  basicInfo: BasicInfo;
  projectDetails: ProjectDetails;
  createdAt: string;
  updatedAt: string;
}