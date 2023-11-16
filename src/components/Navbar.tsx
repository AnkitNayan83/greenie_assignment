"use client";

import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const router = useRouter();
    const { user, logout } = useAuth();
    const handelLogout = () => {
        router.push("/login");
        logout();
    };
    return (
        <div className="flex items-center justify-between p-4 bg-[#666]">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <div className="flex items-center gap-6 text-white">
                <span className="text-xl capitalize">{user?.username}</span>
                <span className="text-xl" onClick={handelLogout}>
                    logout
                </span>
            </div>
        </div>
    );
};

export default Navbar;
