import { useNavigate } from 'react-router-dom'
import type { Resource } from '@features/resources/model/resource'

interface ResourceCardProps {
  resource: Resource;
  onDelete: () => void;
}

export function ResourceCard({ resource, onDelete }: ResourceCardProps) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/resources/${resource.resourceId}`)}>
      <span>#{resource.resourceId}</span>
      <span>{resource.name}</span>
      <span>{resource.status}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}