'use client';

import React from 'react';

export const SidebarContext = React.createContext({
    isOpen: false,
    open: () => {},
    close: () => {},
    toggle: () => {},
    // eslint-disable-next-line no-unused-vars
    setIsOpen: (value: boolean) => {},
});

export function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = React.useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    function setOpenedState(value: boolean) {
        setIsOpen(value);
    }

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <SidebarContext.Provider
            value={{ isOpen, open, close, toggle, setIsOpen: setOpenedState }}
        >
            {children}
        </SidebarContext.Provider>
    );
}
