
'use client'

export type CustomInputProps = {
    label: string,
    placeholder: string,
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const CustomInput = (props: CustomInputProps) => {
    return (
        <div className="flex items-center justify-center -mt-2  space-y-2 ">
            <label htmlFor="" className="text-sm">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}
                className="border border-gray-300 rounded-md p-1 outline-none px-4 py-2" />
        </div>
    )

}