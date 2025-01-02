'use client'
import React from 'react';
import { ButtonProps } from './button-dark';




const LightButton = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={`bg-background cursor-pointer button-up text-teal px-4 py-2 *:pointer-events-none rounded-md border-[1px] border-gray-200 shadow-sm ${props.className}`} disabled={props.disabled}>
            {props.icon} &nbsp;{props.label}
        </button>
    )
}

export default LightButton;
