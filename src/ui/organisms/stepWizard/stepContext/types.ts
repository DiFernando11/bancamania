export interface StepContextType<T extends object> {
  stepData: T
  updateData: (newData: Partial<T>) => void
  triggerRender: () => void
}
