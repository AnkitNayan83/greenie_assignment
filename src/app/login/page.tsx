import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/context/UserContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
    return (
        <div className="bg-[#333] h-[100vh] flex justify-center items-center">
            <div className="w-[50vw] h-[50%] bg-white rounded-md flex shadow-[5px_5px_rgba(255,_255,_255,_0.4),_10px_10px_rgba(255,_255,_255,_0.3),_15px_15px_rgba(255,_255,_255,_0.2),_20px_20px_rgba(255,_255,_255,_0.1),_25px_25px_rgba(255,_255,_255,_0.05)] hover:shadow-none transition-all ease-in-out">
                {/* left */}
                <div className="hidden md:inline flex-1 relative">
                    <Image src={"/lg.png"} fill={true} className="object-cover" alt="login image" />
                </div>

                {/* right */}
                <LoginForm />
            </div>
        </div>
    );
};

export default page;
