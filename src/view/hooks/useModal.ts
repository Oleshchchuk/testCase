import {useLessThenMediaQuery} from "./media-query";
import {useEffect, useState} from 'react';


export const useModal = (isMobileWidth: number, onCloseFn: () => void) => {
    const isMobile = useLessThenMediaQuery(isMobileWidth);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        if (isMobile) {
            window.location.hash = '#myModal';

        }
        setIsOpen(true);
    }

    const closeModal = () => {
        if (isMobile) {
            window.location.hash = '';
        }
        setIsOpen(false);
        onCloseFn();
    }

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash !== '#myModal' && isOpen) {
                closeModal();
            }
        };

        if (isMobile) {
            window.addEventListener('hashchange', handleHashChange);
        }

        return () => {
            if (isMobile) {
                window.removeEventListener('hashchange', handleHashChange);
            }
        };
    }, [isMobile, isOpen, closeModal]);

    return {isOpen, openModal, closeModal};
};