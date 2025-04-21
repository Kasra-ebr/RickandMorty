import React, { ComponentProps } from "react";



type IButton = ComponentProps<"button"> 

function Button({ children,  className, ...rest }: IButton) {
  return (
    <button
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
