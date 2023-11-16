"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type User = {
    username: string;
};

// Define the context type
type AuthContextType = {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser({ username: storedUser });
        }
    }, []);

    const login = (userData: User) => {
        // Perform your login logic, set the user state
        setUser(userData);
    };

    const logout = () => {
        // Perform your logout logic, clear the user state
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
