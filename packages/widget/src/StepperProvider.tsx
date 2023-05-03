import {
  useState,
  useCallback
} from "react";
import { StepperContext, StepperContextValue } from "./StepperContext";
import { Children } from "./utils";

type Props = {
  children: (
    contextValue: StepperContextValue
  ) => Children;
  totalSteps: number;
  initialStep?: number;
};

export function StepperProvider({ children, totalSteps, initialStep = 0 }: Props) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = useCallback(() => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
  }, [totalSteps]);

  const handleBack = useCallback(() => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  }, []);

  const isLastStep = useCallback(() => {
    return activeStep === totalSteps - 1;
  }, [activeStep, totalSteps]);

  const contextValue = {
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    isLastStep,
    totalSteps,
  };

  return (
    <StepperContext.Provider value={contextValue}>
      {children(contextValue)}
    </StepperContext.Provider>
  );
}