import { ReactElement } from "react";

type variant = "primary" | "secondery";
export interface ButtonProps {
  variant: variant;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyls = {
  primary: "bg-purpel-600 text-white",
  secondery: "bg-purpel-200 text-purpel-500",
};

const defaultStyls = "rounded-md flex font-normal px-4 py-2";

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

export const Button = (prpos: ButtonProps) => {
  return (
    <button
      className={`${variantStyls[prpos.variant]} ${
        sizeStyles[prpos.size]
      } ${defaultStyls}`}
      onClick={prpos.onClick}
    >
      {prpos.startIcon ? <div className="mx-1">{prpos.startIcon}</div> : null}
      {prpos.text ? prpos.text : null}
      {prpos.endIcon ? <div className="ml-1">{prpos.endIcon}</div> : null}
    </button>
  );
};
