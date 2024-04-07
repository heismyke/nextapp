"use client"
import Image from "next/image"
import LogoImage from "../../public/images/logo.png"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Routes  {
    href : string,
    label : string
}

const siteRoutes: Routes[]= [
    {href: "/", label: "Home"},
    {href: "/posts", label: "Posts"}
]

export default function Header(){
    const pathname = usePathname()
    return(
        <nav className="w-[80%] h-[100px] mx-auto border border-b border-l-0 border-r-0 border-t-0 flex items-center justify-between px-5">
            <div className="w-[50%] h-[50px] ">
                <Link href="/">
                <Image src={LogoImage} alt="logo" width={50} height={50}>

                </Image>
                </Link>
            </div>
            <ul className="flex gap-[30px]">
                {siteRoutes.map((route) => (
                    
                    <li key={route.href}>
                        <Link href={route.href} className={`text-zinc-400 transition ${pathname === route.href ? "text-zinc-500": ""}`}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}