import { ReactNode } from 'react'

type LayoutType = 'private' | 'public'

export interface DefineLayoutTypeProps {
  children: ReactNode
}

export type LayoutMap = Record<LayoutType, React.FC<{ children: ReactNode }>>
