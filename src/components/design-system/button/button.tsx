import { FC as FunctionComponent } from 'react';

declare type ButtonProps = {
    schema: "primary" | "secondary" | "custom";
    label: string;
}

export const Button: FunctionComponent<ButtonProps> = ({schema, label}) => {
    return (
        <button className={"bg-blue-500 text-black"}>
            {label}
        </button>
    );
};