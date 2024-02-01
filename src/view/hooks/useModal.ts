import {useCallback, useEffect, useState} from 'react';
import {useLessThenMediaQuery} from "./media-query";

export const useModal = (isMobileWidth = 450) => {
    const isMobile = useLessThenMediaQuery(isMobileWidth);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = useCallback(() => {
        setIsOpen(prev => {
            if (isMobile) {
                window.location.hash = prev ? '' : '#myModal';
            }
            return !prev;
        });
    }, [isMobile]);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash !== '#myModal' && isOpen) {
                setIsOpen(false);
            }
        };

        if (isMobile) {
            window.addEventListener('hashchange', handleHashChange);
        }

        return () => {
            if (isMobile) {
                window.removeEventListener('hashchange', handleHashChange);
            }
        }
    }, [isMobile, isOpen]);

    return {isOpen, toggleModal};
};