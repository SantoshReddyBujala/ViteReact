import type { ComponentProps, CSSProperties } from "react";

type ButtonBaseProps = ComponentProps<"button">;
type ButtonProps = ButtonBaseProps & { variant?: "primary" | "secondary" };

const Button = ({ variant = "primary", style, ...rest }: ButtonProps) => {
  const baseStyle: CSSProperties = {
    padding: "10px 20px",
    border: "none",
  };
  return <button style={{ ...baseStyle, ...style }} {...rest}></button>;
};

export default Button;
