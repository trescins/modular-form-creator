import { useNavigate, useOutletContext } from 'react-router-dom'
import { Button } from '@design-system/components/Button'
import { ResourceStatusBadge } from '@features/resources/components/ResourceStatusBadge'
import { ModuleItem } from '@features/resources/components/ModuleItem'
import { useProvisionResource, useReplaceResource } from '@features/resources/hooks'
import { isBasicInfoComplete, isProjectDetailsComplete, canProvision, canEditProjectDetails } from '@features/resources/utils/resourceRules'
import type { ResourceLayoutContext } from '@features/resources/components/ResourceLayout'
import {
  PageWrapper,
  BackLink,
  PageHeader,
  TitleRow,
  ResourceId,
  UnsavedBanner,
  ModulesList,
  PageActions,
  ActionsLeft,
  ProvisionHint,
  ErrorText,
} from './ResourceOverviewPage.styles'

export function ResourceOverviewPage() {
  const { resource, buffer, hasBufferChanges, clearBuffer } =
    useOutletContext<ResourceLayoutContext>();
  const navigate = useNavigate();

  const provisionMutation = useProvisionResource(resource.resourceId);
  const replaceMutation = useReplaceResource(resource.resourceId);

  const basicComplete = isBasicInfoComplete(resource);
  const projectComplete = isProjectDetailsComplete(resource);
  const provisionable = canProvision(resource);
  const projectEditable = canEditProjectDetails(resource);

  const handleProvision = () => provisionMutation.mutate();

  const handleSubmitChanges = () => {
    replaceMutation.mutate(
      {
        name: resource.name,
        basicInfo: buffer.basicInfo ?? resource.basicInfo,
        projectDetails: buffer.projectDetails ?? resource.projectDetails,
      },
      { onSuccess: () => clearBuffer() }
    );
  }

  const mutationError = provisionMutation.error ?? replaceMutation.error;

  return (
    <PageWrapper>
      <BackLink onClick={() => navigate('/resources')}>← Resources</BackLink>

      <PageHeader>
        <TitleRow>
          <h1>{resource.name}</h1>
          <ResourceStatusBadge status={resource.status} />
        </TitleRow>
        <ResourceId>#{resource.resourceId}</ResourceId>
      </PageHeader>

      {resource.status === 'completed' && hasBufferChanges && (
        <UnsavedBanner>
          ⚠ You have unsaved changes. They will be lost on refresh until submitted.
        </UnsavedBanner>
      )}

      <ModulesList>
        <ModuleItem
          name="Basic info"
          complete={basicComplete}
          statusText={basicComplete ? 'Complete' : 'Incomplete'}
          edited={!!buffer.basicInfo}
          onClick={() => navigate(`/resources/${resource.resourceId}/basic-info`)}
        />
        <ModuleItem
          name="Project details"
          complete={projectComplete}
          statusText={!projectEditable ? 'Complete Basic info first' : projectComplete ? 'Complete' : 'Incomplete'}
          edited={!!buffer.projectDetails}
          disabled={!projectEditable}
          onClick={() => navigate(`/resources/${resource.resourceId}/project-details`)}
        />
      </ModulesList>

      <PageActions>
        <ActionsLeft>
          {resource.status === 'draft' && (
            <Button
              variant="primary"
              state={provisionable ? 'normal' : 'locked'}
              onClick={provisionable ? handleProvision : undefined}
              disabled={provisionMutation.isPending}
            >
              Provision
            </Button>
          )}
          {resource.status === 'completed' && hasBufferChanges && (
            <>
              <Button
                variant="primary"
                onClick={handleSubmitChanges}
                disabled={replaceMutation.isPending}
              >
                ✓ Submit changes
              </Button>
              <Button variant="secondary" onClick={clearBuffer}>
                Discard
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            onClick={() => navigate(`/resources/${resource.resourceId}/details`)}
          >
            View details
          </Button>
        </ActionsLeft>
        {resource.status === 'draft' && !provisionable && (
          <ProvisionHint>Complete both modules to provision</ProvisionHint>
        )}
      </PageActions>

      {mutationError && (
        <ErrorText>
          {(mutationError as { message?: string })?.message ?? 'Something went wrong'}
        </ErrorText>
      )}
    </PageWrapper>
  )
}
