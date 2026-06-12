import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Input } from '@design-system/components/Input'
import { Select } from '@design-system/components/Select'
import { Button } from '@design-system/components/Button'
import { useUpdateBasicInfo } from '@features/resources/hooks'
import { validateBasicInfo } from '@features/resources/utils/validation'
import type { BasicInfo, Priority } from '@features/resources/model/resource'
import type { ResourceLayoutContext } from '@features/resources/components/ResourceLayout'
import { PRIORITY_OPTIONS } from '@features/resources/model/constants'
import {
  PageWrapper,
  BackLink,
  PageTitle,
  FormGrid,
  HalfField,
  FormField,
  FormActions,
  ErrorText,
} from './BasicInfoPage.styles'

export function BasicInfoPage() {
  const { resource, buffer, setBasicInfoBuffer } = useOutletContext<ResourceLayoutContext>();
  const navigate = useNavigate();
  const updateMutation = useUpdateBasicInfo(resource.resourceId);

  const initial = buffer.basicInfo ?? resource.basicInfo;

  const [form, setForm] = useState({
    owner: initial.owner,
    email: initial.email,
    description: initial.description,
    priority: initial.priority,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(field, e.target.value);

  const isFormFilled = Boolean(form.owner.trim() && form.email.trim() && form.description.trim() && form.priority);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errs = validateBasicInfo(form);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);

      return;
    }

    const basicInfo: BasicInfo = {
      resourceName: resource.basicInfo.resourceName,
      owner: form.owner,
      email: form.email,
      description: form.description,
      priority: form.priority as Priority,
    }

    if (resource.status === 'completed') {
      setBasicInfoBuffer(basicInfo);
      navigate(`/resources/${resource.resourceId}`);
    } else {
      updateMutation.mutate(basicInfo, {
        onSuccess: () => navigate(`/resources/${resource.resourceId}`),
      });
    }
  }

  return (
    <PageWrapper>
      <BackLink onClick={() => navigate(`/resources/${resource.resourceId}`)}>
        ← {resource.name}
      </BackLink>
      <PageTitle>Basic info</PageTitle>

      <form onSubmit={handleSubmit}>
      <FormGrid>
        <Input
          label="Owner *"
          value={form.owner}
          onChange={handleChange('owner')}
          error={errors.owner}
          placeholder="Full name"
        />
        <Input
          label="Email *"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          error={errors.email}
          placeholder="email@example.com"
        />
      </FormGrid>

      <HalfField>
        <Select
          label="Priority *"
          options={PRIORITY_OPTIONS}
          value={form.priority}
          onChange={(e) => set('priority', e.target.value)}
          error={errors.priority}
        />
      </HalfField>

      <FormField>
        <Input
          label="Description *"
          multiline
          rows={4}
          value={form.description}
          onChange={handleChange('description')}
          error={errors.description}
          placeholder="Resource description"
        />
      </FormField>

      <FormActions>
        <Button type="submit" variant="primary" disabled={updateMutation.isPending || !isFormFilled}>
          Save
        </Button>
        <Button type="button" variant="secondary" onClick={() => navigate(`/resources/${resource.resourceId}`)}>
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
