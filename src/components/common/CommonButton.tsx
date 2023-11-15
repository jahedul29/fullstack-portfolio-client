import { ReactNode } from "react";

type CommonButtonProps = {
  classNames?: string;
  content: ReactNode | string;
  onClick?: () => void;
  [key: string]: any;
};

const CommonButton = ({
  classNames = "",
  content,
  onClick,
  ...rest
}: CommonButtonProps) => {
  return (
    <button
      className={`text-ternaryText border border-ternaryText rounded-lg text-lg h-auto p-3 bg-transparent ${classNames}`}
      onClick={onClick || undefined}
      {...rest}
    >
      {content}
    </button>
  );
};

export default CommonButton;
