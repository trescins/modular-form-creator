import { Badge } from '@design-system/components/Badge'
import {
  ModuleRow,
  ModuleLeft,
  StatusIcon,
  ModuleInfo,
  ModuleName,
  ModuleStatus,
  ModuleRight,
  Chevron,
} from './ModuleItem.styles'

interface ModuleItemProps {
  name: string;
  complete: boolean;
  statusText: string;
  edited?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function ModuleItem({ name, complete, statusText, edited = false, disabled = false, onClick }: ModuleItemProps) {
  return (
    <ModuleRow $disabled={disabled} onClick={onClick}>
      <ModuleLeft>
        <StatusIcon $complete={complete}>{complete ? '✓' : ''}</StatusIcon>
        <ModuleInfo>
          <ModuleName>{name}</ModuleName>
          <ModuleStatus $complete={complete}>{statusText}</ModuleStatus>
        </ModuleInfo>
      </ModuleLeft>
      <ModuleRight>
        {edited && <Badge variant="warning">edited</Badge>}
        <Chevron>›</Chevron>
      </ModuleRight>
    </ModuleRow>
  )
}
