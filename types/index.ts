import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handeleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}
