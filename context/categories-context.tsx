"use client";

import React, { useState, useContext, createContext } from "react";

interface CategoriesContextType {
    activeIndex: number | null;
    setActiveIndex: (id: number) => void;
}

const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const CategoriesProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <CategoriesContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </CategoriesContext.Provider>
    );
};

export const useCtaegories = () => {
    const context = useContext(CategoriesContext);

    if (!context) {
        throw new Error("useCategories must be used inside CategoriesProvider");
    }

    return context;
};
