export const NAME_REGEX = /^[A-Za-z0-9 -]+$/;

export const OWNER_REGEX = /^[A-Za-z ]+$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBasicInfo(form: {
  owner: string
  email: string
  description: string
  priority: string
}): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!form.owner.trim()) {
    errors.owner = 'Required';
  } else if (!OWNER_REGEX.test(form.owner)) {
    errors.owner = 'Letters and spaces only';
  }

  if (!form.email.trim()) {
    errors.email = 'Required';
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = 'Invalid email format';
  }

  if (!form.description.trim()) {
    errors.description = 'Required';
  }

  if (!form.priority) {
    errors.priority = 'Required';
  }

  return errors;
}
