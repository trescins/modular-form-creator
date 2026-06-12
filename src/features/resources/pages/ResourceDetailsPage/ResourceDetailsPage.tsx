import { useNavigate, useOutletContext } from 'react-router-dom'
import { ResourceStatusBadge } from '@features/resources/components/ResourceStatusBadge'
import type { ResourceLayoutContext } from '@features/resources/components/ResourceLayout'
import { capitalize, orDash } from '@features/resources/utils/format'
import {
  PageWrapper,
  BackLink,
  TitleRow,
  Section,
  SectionTitle,
  FieldRow,
  FieldLabel,
  FieldValue,
  BackToOverview,
} from './ResourceDetailsPage.styles'

export function ResourceDetailsPage() {
  const { resource } = useOutletContext<ResourceLayoutContext>();
  const navigate = useNavigate();

  const { basicInfo, projectDetails } = resource;

  return (
    <PageWrapper>
      <BackLink onClick={() => navigate(`/resources/${resource.resourceId}`)}>
        ← {resource.name}
      </BackLink>

      <TitleRow>
        <h1>Details</h1>
        <ResourceStatusBadge status={resource.status} />
      </TitleRow>

      <Section>
        <SectionTitle>Basic info</SectionTitle>
        <FieldRow>
          <FieldLabel>Owner</FieldLabel>
          <FieldValue>{orDash(basicInfo.owner)}</FieldValue>
        </FieldRow>
        <FieldRow>
          <FieldLabel>Email</FieldLabel>
          <FieldValue>{orDash(basicInfo.email)}</FieldValue>
        </FieldRow>
        <FieldRow>
          <FieldLabel>Priority</FieldLabel>
          <FieldValue>{basicInfo.priority ? capitalize(basicInfo.priority) : '—'}</FieldValue>
        </FieldRow>
        <FieldRow>
          <FieldLabel>Description</FieldLabel>
          <FieldValue>{orDash(basicInfo.description)}</FieldValue>
        </FieldRow>
      </Section>

      <Section>
        <SectionTitle>Project details</SectionTitle>
        <FieldRow>
          <FieldLabel>Project name</FieldLabel>
          <FieldValue>{orDash(projectDetails.projectName)}</FieldValue>
        </FieldRow>
        <FieldRow>
          <FieldLabel>Budget</FieldLabel>
          <FieldValue>{orDash(projectDetails.budget)}</FieldValue>
        </FieldRow>
        <FieldRow>
          <FieldLabel>Category</FieldLabel>
          <FieldValue>{projectDetails.category ? capitalize(projectDetails.category) : '—'}</FieldValue>
        </FieldRow>
        <FieldRow>
          <FieldLabel>Team members</FieldLabel>
          <FieldValue>
            {projectDetails.options.length > 0 ? projectDetails.options.join(', ') : '—'}
          </FieldValue>
        </FieldRow>
      </Section>

      <BackToOverview onClick={() => navigate(`/resources/${resource.resourceId}`)}>
        Back to overview
      </BackToOverview>
    </PageWrapper>
  )
}
