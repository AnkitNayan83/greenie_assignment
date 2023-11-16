"use client";

import React, { useState, useEffect } from "react";

const UserList = () => {
    const [tempName, setTempName] = useState("");
    const [username, setUsername] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

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

    return (
        <div className="my-10">
            <div className="flex items-center justify-between px-20">
                <h1 className="text-white text-2xl font-mono">User's List:</h1>
                <div className="flex items-center gap-5">
                    <input
                        type="text"
                        placeholder="enter username1"
                        className="rounded-md p-2  border-none"
                        onChange={(e) => setTempName(e.target.value)}
                    />
                    <button
                        className="text-white bg-black rounded-md  p-2"
                        onClick={() => setUsername(tempName)}
                    >
                        Search
                    </button>
                </div>
            </div>
            //
        </div>
    );
};

export default UserList;
