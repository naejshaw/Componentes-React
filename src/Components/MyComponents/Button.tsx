import { Link } from "react-router-dom";
import { IButton } from "./types";
import { ReactElement } from "react";

interface ButtonProps extends IButton {
  className?: string;
  children?:ReactElement, 
    link?:string, 
    social?:string, 
    title?:string, 
    type?:string
}

export default function Button({
  className,
  children,
  link,
  social,
  title,
  type,
}: ButtonProps) {
  return (
    <Link
      to={link ?  link : "#"}
      className={className}
      // type is not a valid prop for Link, did you mean to use it as a button type?
      // type={type}
    >
      {title}
      {social ? (
        <i
          className={`fa fa-${social} border border-solid border-primary w-8 h-8 rounded-full pt-1.5 pl-1.5 hover:bg-primary hover:text-site-bg duration-700 hover:duration-700`}
        />
      ) : null}
      {children}
    </Link>
  );
}