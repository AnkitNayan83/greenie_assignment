import React from "react";

const Usercard = ({ user, setShow }: any) => {
    return (
        <div className="flex absolute items-center justify-center top-0 z-50 bg-customColor w-[100%] h-[100vh]">
            <div className="p-10 bg-slate-800 w-[40vw] h-[35vh] rounded-md text-white">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">{user.name}</h1>
                    <div className="flex items-center justify-between mt-12">
                        <div>
                            <div className="flex items-center gap-4">
                                <h2 className="font-bold text-xl">Username: </h2>
                                <h2>{user.username}</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <h2 className="font-bold text-xl">Email: </h2>
                                <h2>{user.email}</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <h2 className="font-bold text-xl">Phone no: </h2>
                                <h2>{user.phone}</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <h2 className="font-bold text-xl">Website: </h2>
                                <h2>{user.website}</h2>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl">Address</h1>
                            <div className="flex items-center gap-4">
                                <h2 className="font-bold text-xl">Street </h2>
                                <h2>{user.address.street}</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <h2 className="font-bold text-xl">Flat no: </h2>
                                <h2>{user.address.suite}</h2>
                            </div>

                            <div className="flex items-center gap-4">
                                <h2 className="font-bold text-xl">Pincode: </h2>
                                <h2>{user.address.zipcode}</h2>
                            </div>
                        </div>
                    </div>
                    <button
                        className="p-2 w-[20%] text-white rounded-md bg-green-500 mt-10"
                        onClick={() => setShow(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Usercard;
