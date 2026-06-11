import { Badge } from '@design-system/components/Badge'
import type { ResourceStatus } from '@features/resources/model/resource'

interface ResourceStatusBadgeProps {
  status: ResourceStatus;
}

export function ResourceStatusBadge({ status }: ResourceStatusBadgeProps) {
  return <Badge variant={status === 'draft' ? 'neutral' : 'success'}>{status}</Badge>
}