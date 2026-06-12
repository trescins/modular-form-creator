import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Input } from '@design-system/components/Input'
import { Select } from '@design-system/components/Select'
import { CheckboxGroup } from '@design-system/components/CheckboxGroup'
import { Button } from '@design-system/components/Button'
import { useUpdateProjectDetails } from '@features/resources/hooks'
import { validateProjectDetails } from '@features/resources/utils/validation'
import { canEditProjectDetails } from '@features/resources/utils/resourceRules'
import type { ProjectDetails, ProjectCategory, TeamMember } from '@features/resources/model/resource'
import type { ResourceLayoutContext } from '@features/resources/components/ResourceLayout'
import { CATEGORY_OPTIONS, TEAM_MEMBER_VALUES } from '@features/resources/model/constants'
import {
  PageWrapper,
  BackLink,
  PageTitle,
  GuardCard,
  LockEmoji,
  FormGrid,
  HalfField,
  FormField,
  FormActions,
  ErrorText,
} from './ProjectDetailsPage.styles'

export function ProjectDetailsPage() {
  const { resource, buffer, setProjectDetailsBuffer } = useOutletContext<ResourceLayoutContext>();
  const navigate = useNavigate();
  const updateMutation = useUpdateProjectDetails(resource.resourceId);

  const canEdit = canEditProjectDetails(resource);

  const initial = buffer.projectDetails ?? resource.projectDetails;
  
  const [form, setForm] = useState<ProjectDetails>({
    projectName: initial.projectName,
    budget: initial.budget,
    category: initial.category,
    options: initial.options,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!canEdit) {
    return (
      <PageWrapper>
        <BackLink onClick={() => navigate(`/resources/${resource.resourceId}`)}>
          ← {resource.name}
        </BackLink>
        <PageTitle>Project details</PageTitle>
        <GuardCard variant="outline">
          <LockEmoji>🔒</LockEmoji>
          <p>Complete Basic info before editing this module.</p>
          <Button
            variant="secondary"
            onClick={() => navigate(`/resources/${resource.resourceId}/basic-info`)}
          >
            → Go to Basic info
          </Button>
        </GuardCard>
      </PageWrapper>
    );
  }

  const setField = (field: string, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  const isFormFilled = Boolean(
    form.projectName.trim() && form.budget.trim() && form.category && form.options.length > 0
  );

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errs = validateProjectDetails(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);

      return;
    }

    const projectDetails: ProjectDetails = {
      projectName: form.projectName,
      budget: form.budget,
      category: form.category as ProjectCategory,
      options: form.options as TeamMember[],
    };

    if (resource.status === 'completed') {
      setProjectDetailsBuffer(projectDetails);
      navigate(`/resources/${resource.resourceId}`);
    } else {
      updateMutation.mutate(projectDetails, {
        onSuccess: () => navigate(`/resources/${resource.resourceId}`),
      })
    }
  }

  return (
    <PageWrapper>
      <BackLink onClick={() => navigate(`/resources/${resource.resourceId}`)}>
        ← {resource.name}
      </BackLink>
      <PageTitle>Project details</PageTitle>

      <form onSubmit={handleSubmit}>
        <FormGrid>
          <Input
            label="Project name *"
            value={form.projectName}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setField('projectName', e.target.value)}
            error={errors.projectName}
            placeholder="Project name"
          />
          <Input
            label="Budget *"
            value={form.budget}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setField('budget', e.target.value)}
            error={errors.budget}
            placeholder="e.g. 50000"
          />
        </FormGrid>

        <HalfField>
          <Select
            label="Category *"
            options={CATEGORY_OPTIONS}
            value={form.category}
            onChange={(e) => setField('category', e.target.value)}
            error={errors.category}
          />
        </HalfField>

        <FormField>
          <CheckboxGroup
            label="Team members *"
            options={[...TEAM_MEMBER_VALUES]}
            value={form.options}
            onChange={(next) => setField('options', next)}
            error={errors.options}
          />
        </FormField>

        <FormActions>
          <Button type="submit" variant="primary" disabled={updateMutation.isPending || !isFormFilled}>
            Save
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate(`/resources/${resource.resourceId}`)}
          >
            Cancel
          </Button>
        </FormActions>

        {updateMutation.isError && (
          <ErrorText>
            {(updateMutation.error as { message?: string })?.message ?? 'Something went wrong'}
          </ErrorText>
        )}
      </form>
    </PageWrapper>
  )
}
