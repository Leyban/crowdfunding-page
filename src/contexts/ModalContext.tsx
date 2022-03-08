import React, { createContext, useState } from "react";

interface InputProviderProps {
    children: React.ReactNode;
}

export const ModalContext = createContext<{
    modal: number;
    setModal: React.Dispatch<React.SetStateAction<number>>;
}| null>(null);

export const ModalContextProvider = ({children}: InputProviderProps) => {
    const [modal, setModal] = useState(0)

    return (
        <ModalContext.Provider value={{modal,setModal}}>
            {children}
        </ModalContext.Provider>
    )
}