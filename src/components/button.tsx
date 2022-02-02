import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

import '../styles/button.scss';

export function Button(props: ButtonProps) {
    return (
        <button className="buttonComponent" {...props} />
    )
}