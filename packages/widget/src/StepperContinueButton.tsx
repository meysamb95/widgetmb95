import { MouseEvent, useCallback } from "react";
import { useStepper } from "./StepperContext";
import { Button, ButtonProps } from "@mui/material";

export function StepperContinueButton(props: ButtonProps) {
  const { handleNext } = useStepper();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      props.onClick && props.onClick(e);
      handleNext();
    },
    [props.onClick, handleNext]
  );

  return (
    <Button
      data-testid="continue-button"
      size="large"
      variant="contained"
      {...props}
      onClick={handleClick}
    />
  );
}
