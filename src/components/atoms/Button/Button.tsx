import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

interface BaseProps {
  variant?: "solid" | "ghost";
  size?: "md" | "sm";
  children: ReactNode;
}

type AnchorProps = BaseProps & { href: string; download?: string };
type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & { href?: undefined };

export type ButtonProps = AnchorProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "solid", size = "md", children } = props;
  const className = cx("btn", `btn--${variant}`, `btn--${size}`);

  if (props.href !== undefined) {
    return (
      <a className={className} href={props.href} download={props.download}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, href: _h, children: _c, ...rest } = props;
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
