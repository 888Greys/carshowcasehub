"use client";   

import { Combobox, ComboboxButton, ComboboxInput,ComboboxOptions, ComboboxOption, Transition} from "@headlessui/react";
import { searchmanufacturerProps } from "@/types";
import Image from "next/image";
import {useState, Fragment} from "react";
import { manufacturers } from "@/constants";


const SearchManufucturer = ({manufacturer, setManufacturer}: searchmanufacturerProps) => {

    const [query, setQuery] = useState("");
    
    const filteredManufucturers = 
        query === ""
        ? manufacturers
        : manufacturers.filter((item) =>(
            item.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))))
        


    return (
        <div className="search-manufucturer">
            <Combobox>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Car Logo"
                            />
                    </ComboboxButton>

                    <ComboboxInput 
                        className="search-manufucturer__input"
                        placeholder="BMW"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)} 
                        />
                </div>
            </Combobox>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
                > 


            </Transition>
        </div>
    )
}

export default SearchManufucturer;
 