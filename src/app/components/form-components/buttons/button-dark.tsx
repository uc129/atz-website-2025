
'use client'

import React from 'react';

export type ButtonProps = {
    label: string,
    onClick?: (e: React.MouseEvent) => void,
    className?: string,
    disabled?: boolean
    icon?: React.ReactNode
}


const DarkButton = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}
            className={`bg-blue  text-background text-center button-up  px-4 py-2 cursor-pointer
            rounded-md flex justify-center gap-4 items-center  ${props.className} `}
            disabled={props.disabled}
        >
            <span>{props.label}</span>
            {props.icon && <span>{props.icon}</span>}
        </button>
    )
}

export default DarkButton;
