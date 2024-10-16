"use client";

import Image from "next/image"

import { CustomButtonProps } from "@/types";



const CustomButton = ({title, containerStyles, handeleClick, btnType}: CustomButtonProps) => {
    return (
        <button 
            disabled={false}
            type={btnType || 'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handeleClick}
            >
                <span className={'flex-1'}>
                    {title}
                </span>
        </button>
    )
}

export default CustomButton
