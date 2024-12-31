'use client'

import { useState } from "react";
import { CustomInput } from "./custom-input"




export const SearchForm = () => {

    const [search, setSearch] = useState<string>("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.target.value);
    }


    return (
        <form className="flex justify-center items-center">
            <CustomInput label="" placeholder="🔍 Search..." type="text" value={search} onChange={handleSearch} />
        </form>
    )


}