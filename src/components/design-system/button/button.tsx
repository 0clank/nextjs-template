import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    schema: 'primary' | 'secondary' ;
    className: string;
    text: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button: FunctionComponent<IButtonProps> = (
    {
        schema = 'primary',
        className,
        text,
        leftIcon,
        rightIcon,
        ...rest
    }) => {

    return (
        <button className={
            `
            ${schema == 'primary' ? `bg-black hover:bg-gray-900 text-white` : ''}
            ${schema == 'secondary' ? 'bg-transparent border-black hover:border-gray-900 text-black' : ''}
            border
            border-1
            px-4
            py-2
            space-x-1
            ${className}
            `
        } {...rest}>
            {leftIcon}
            {text}
            {rightIcon}
        </button>
    )

};