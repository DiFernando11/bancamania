import { createContext, useContext, useRef, useState } from 'react'
import { StepContextType } from './types'

export function createStepContext<T extends object>() {
  const StepContext = createContext<StepContextType<T> | null>(null)
  const StepProvider = ({ children }: { children: React.ReactNode }) => {
    const stepDataRef = useRef<T>({} as T)
    const [, setRender] = useState(0)

    const updateData = (newData: Partial<T>) => {
      Object.assign(stepDataRef.current, newData)
    }

    const triggerRender = () => setRender(r => r + 1)

    return (
      <StepContext.Provider
        value={{
          stepData: stepDataRef.current,
          triggerRender,
          updateData,
        }}
      >
        {children}
      </StepContext.Provider>
    )
  }

  function useStepData<U extends T = T>(): StepContextType<U> {
    const context = useContext(StepContext)
    if (!context) {
      throw new Error('useStepData must be used within StepProvider')
    }

    return context as unknown as StepContextType<U>
  }

  return { StepContext, StepProvider, useStepData }
}
