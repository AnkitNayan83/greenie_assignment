"use client";

import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
    const [name, setName] = useState("");
    const router = useRouter();
    const handelClick = (): void => {
        login({ username: name });
        router.push("/");
    };
    const { user, login } = useAuth();

    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-10">
            <h1 className="text-2xl font-bold">User login</h1>
            <input
                className="p-2 w-[80%] border-gray-500 border-2 rounded-sm"
                type="text"
                name="username"
                id="username"
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="p-2 w-[80%] border-gray-500 border-2 rounded-sm"
                type="password"
                name="password"
                id="password"
                placeholder="password"
            />

            <button
                className="text-white p-2 bg-green-500 rounded-md border-none hover:bg-green-800 w-[60%]"
                onClick={handelClick}
            >
                Login
            </button>
        </div>
    );
};

export default LoginForm;
