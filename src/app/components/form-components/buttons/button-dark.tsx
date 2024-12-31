
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
        <button onClick={props.onClick} className={`bg-foreground text-background px-4 py-2 rounded-md flex justify-between items-center ${props.className}`} disabled={props.disabled}>
            <span>{props.label}</span>
            <span>{props.icon}</span>
        </button>
    )
}

export default DarkButton;
