import type { BasicInfo, ProjectDetails, Resource } from "@features/resources/model/resource";

export interface BufferState {
    basicInfo?: BasicInfo;
    projectDetails?: ProjectDetails;
  }

export interface ResourceLayoutContext {
    resource: Resource;
    buffer: BufferState;
    hasBufferChanges: boolean;
    setBasicInfoBuffer: (info: BasicInfo) => void;
    setProjectDetailsBuffer: (details: ProjectDetails) => void;
    clearBuffer: () => void;
  }
