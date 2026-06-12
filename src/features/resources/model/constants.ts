export const PRIORITY_VALUES = ['low', 'medium', 'high'] as const
export const PROJECT_CATEGORY_VALUES = ['internal', 'external', 'vendor'] as const
export const TEAM_MEMBER_VALUES = ['FE devs', 'BE devs', 'Designer', 'Data Eng', 'Product Owner'] as const

export const PRIORITY_OPTIONS = [
  { value: '', label: 'Select priority' },
  ...PRIORITY_VALUES.map((v) => ({ value: v, label: v.charAt(0).toUpperCase() + v.slice(1) })),
]

export const CATEGORY_OPTIONS = [
  { value: '', label: 'Select category' },
  ...PROJECT_CATEGORY_VALUES.map((v) => ({ value: v, label: v.charAt(0).toUpperCase() + v.slice(1) })),
];