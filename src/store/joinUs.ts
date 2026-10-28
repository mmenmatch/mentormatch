import { create } from 'zustand'

type joinUsStepperStore = {
  stepperCount: number
  nextStep: () => void
  BackStep: () => void
}

export const useJoinUsStepper = create<joinUsStepperStore>((set) => ({
  stepperCount: 0,
  nextStep: () => set((state) => ({ stepperCount: state.stepperCount + 1 })),
  BackStep: () => set((state) => ({ stepperCount: state.stepperCount - 1 })),
}))
