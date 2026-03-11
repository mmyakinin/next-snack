"use client";

import React, { useState, useContext, createContext } from "react";

interface CategoriesContextType {
    activeId: number;
    setActiveId: (id: number) => void;
}

const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const CategoriesProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [activeId, setActiveId] = useState<number>(1);

    return (
        <CategoriesContext.Provider value={{ activeId, setActiveId }}>
            {children}
        </CategoriesContext.Provider>
    );
};

export const useCategories = () => {
    const context = useContext(CategoriesContext);

    if (!context) {
        throw new Error("useCategories must be used inside CategoriesProvider");
    }

    return context;
};
