type ExitFunction = (() => void) | (() => Promise<void>)

export interface UseOnUnmountProps {
  onUnmount: ExitFunction
  onBeforeUnload: (event: BeforeUnloadEvent) => void | Promise<void>
  onVisibilityChange: ExitFunction
}
