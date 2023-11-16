"use client";

import React, { useState, useEffect } from "react";
import Usercard from "./Usercard";

const UserList = () => {
    const [tempName, setTempName] = useState("");
    const [username, setUsername] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setErr(false);
            setLoading(true);
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users${
                    username === `` ? "" : `?username=${username}`
                } `,
                { cache: "no-cache" }
            );
            setLoading(false);
            if (!res.ok) setErr(true);
            else {
                const t = await res.json();
                setData(t);
            }
        };
        getData();
    }, [username]);

    const handelShow = (): void => {
        setUsername("");
        setShowBtn(false);
    };

    const handelSearch = () => {
        setUsername(tempName);
        setShowBtn(true);
    };

    const handelClick = (user: any) => {
        setShow(true);
        setUser(user);
    };

    return (
        <div className="flex flex-col items-center relative overflow-hidden h-[100%]">
            {user && show && <Usercard user={user} setShow={setShow} />}
            <div className="flex items-center justify-between my-12 w-[80%]">
                <h1 className="text-white text-2xl font-mono">User&apos; List:</h1>
                <div className="flex items-center gap-5">
                    <input
                        type="text"
                        placeholder="enter username"
                        className="rounded-md p-2  border-none"
                        onChange={(e) => setTempName(e.target.value)}
                    />
                    <button className="text-white bg-black rounded-md  p-2" onClick={handelSearch}>
                        Search
                    </button>
                    {showBtn && (
                        <button
                            className="text-white bg-black rounded-md  p-2"
                            onClick={handelShow}
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>
            {/* tabel */}

            <div className="relative shadow-md sm:rounded-lg w-[80%]">
                {loading ? (
                    <div>
                        <p className="font-bold text-xl text-white">loading please wait ...</p>
                    </div>
                ) : (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {data?.map((item: any) => (
                            <tbody key={item.id}>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.username}
                                    </th>
                                    <td className="px-6 py-4">{item.email}</td>
                                    <td className="px-6 py-4">{item.phone}</td>
                                    <td className="px-6 py-4">{item.id}</td>
                                    <td className="px-6 py-4">{item.company.name}</td>
                                    <td className="px-6 py-4">
                                        <p
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                            onClick={() => handelClick(item)}
                                        >
                                            View
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                )}
            </div>
        </div>
    );
};

export default UserList;
