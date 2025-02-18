export interface FlipCardProps {
  FrontContent: React.ComponentType<{ flip: () => void }>
  BackContent: React.ComponentType<{ flip: () => void }>
  className: string
}
