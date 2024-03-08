"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import {
  Sheet,
  SheetContent,
   SheetTrigger,
} from "../../components/ui/sheet"
import logo from "/public/assets/Images/landscape_logo.png"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname()
  return (
   <header className='header'>
    <Link href='/' className='flex items-center gap-2 md:py-2'>
      <Image src={logo}
      width={180}
      alt="logo"
      height={28}
      />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in"/>

          <Sheet>
            <SheetTrigger>
              <Image src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"/>
              
              </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
            <>
            <Image 
            src={logo}
            alt="logo"
            width={152}
            height={23}
             />
            <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    className={`${isActive && 'gradient-text'}p-18 flex whitespace-nowrap text-dark-700`}
                    key={link.route}>  

                    <Link href={link.route}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>  
            </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>

   </header>
  )
}

export default MobileNav