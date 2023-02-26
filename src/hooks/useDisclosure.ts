import { useCallback, useState } from 'react';

export interface IUseDisclosureProps {
    defaultIsOpen?: boolean
}

export function useDisclosure({ defaultIsOpen }: IUseDisclosureProps) {

    const [ isOpen, setIsOpen ] = useState<boolean>(!!defaultIsOpen);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, [])

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, [])

    const onToggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen])

    return {
        isOpen,
        onOpen,
        onClose,
        onToggle,
    }
}