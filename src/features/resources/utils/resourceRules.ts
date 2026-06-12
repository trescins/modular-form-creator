import type { Resource } from '@features/resources/model/resource';

export const isBasicInfoComplete = (r: Resource): boolean =>
  Boolean(
    r.basicInfo.resourceName?.trim() &&
    r.basicInfo.owner?.trim() &&
    r.basicInfo.email?.trim() &&
    r.basicInfo.description?.trim() &&
    r.basicInfo.priority?.trim()
  );

export const isProjectDetailsComplete = (r: Resource): boolean =>
  Boolean(
    r.projectDetails.projectName?.trim() &&
    r.projectDetails.budget?.trim() &&
    r.projectDetails.category?.trim() &&
    r.projectDetails.options?.length > 0
  );

export const canProvision = (r: Resource): boolean =>
  r.status === 'draft' &&
  isBasicInfoComplete(r) &&
  isProjectDetailsComplete(r);

export const canEditProjectDetails = (r: Resource): boolean =>
  r.status === 'completed' || isBasicInfoComplete(r);
