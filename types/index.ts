import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handeleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface searchmanufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
