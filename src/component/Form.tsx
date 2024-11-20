'use client';

import { findAddress } from "@/api/api";
import { useEffect, useState } from "react";

export function Form () {
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState({}) as any;
    useEffect(() => {
        async function getAddress () {
            const data = await findAddress(zipcode);
            setAddress(data);
        }
        getAddress();
    }, [zipcode]);
    return (
        <div>
            <div>
                <input type="text" onBlur={(e: any) => setZipcode(e.target.value)} placeholder="Zipcode"/>
            </div>
            <div>
                <input type="text" value={address.street} placeholder="Street"/>
            </div>
            <div>
                <input type="text" placeholder="Number"/>
            </div>
            <div>
                <input type="text" placeholder="Complement"/>
            </div>
            <div>
                <input type="text" value={address.neighborhood} placeholder="Neighborhood"/>
            </div>
            <div>
                <input type="text" value={address.city} placeholder="City"/>
            </div>
            <div>
                <input type="text" value={address.state} placeholder="State"/>
            </div>
            <div>
                <input type="text" value={address.country} placeholder="Country"/>
            </div>
        </div>
    );
}
