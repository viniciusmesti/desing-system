import { styled } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled("div", {});

export const Label = styled(Text, { // usando o próprio componente Text que criamos anteriomente
  color: "$gray200",

  defaultVariants: {
    size: "xs"
  }
});

export const Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)", // --steps-size - variável criada no index.tsx
  gap: "$2",

  marginTop: "$1"
});

export const Step = styled("div", {
  backgroundColor: "$gray600",
  borderRadius: "$px",

  height: "$1",

  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});
