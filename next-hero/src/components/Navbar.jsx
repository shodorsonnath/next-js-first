"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title : "About",
            path : '/about'
        },
        {
            title : "Services",
            path : '/services'
        },
        {
            title : "Contacts",
            path : '/contacts'
        },
        {
            title : "Blogs",
            path : '/blogs'
        },

    ]

    const handler = () => {
        router.push('/login')

    }


    return (
        <div>
            <nav className="flex justify-center items-center gap-5 px-5 py-4 bg-slate-500">
                <ul className="flex gap-10">
                    {
                        links?.map((link) => <Link className={`${pathName === link.path && "text-red-600"}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>
                <button onClick={handler} className="bg-white text-red-500 p-4">Login</button>
            </nav>
        </div>
    )
}

export default Navbar;