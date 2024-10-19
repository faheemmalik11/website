"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();
  return (
    <div className='flex align-middle justify-between gap-y-5 gap-x-[43px] pt-4 pb-[15px] px-[26px] border-b border-[#9fa9b7] sm:h-[63px]'>

        <div className='leftSide p-0 text-xl leading-[30px]  font-roboto inline-block font-normal text-[#5c5c5c]'>
            <Link href={'/'} 
              className={`p-0 text-xl leading-[30px]  font-roboto inline-block ${pathname === "/" ? "font-semibold text-primary-100" : "font-normal text-[#5c5c5c] "}`}
            >
              <Image src="/assets/images/site-logo.png" width={100} height={100} alt='LOGO'/>
            </Link>
        </div>

        <div className='flex flex-wrap gap-y-2 gap-x-11 -mb-[3px]'>
            <Link href={'/'} className={`p-0 text-xl leading-[30px]  font-roboto inline-block ${pathname === "/" ? "font-semibold text-primary-100" : "font-normal text-[#5c5c5c] "}`}>Home page</Link>
            <Link href={'/about'} className={`p-0 text-xl leading-[30px]  font-roboto inline-block ${pathname === "/about" ? "font-semibold text-primary-100" : "font-normal text-[#5c5c5c] "}`}>About</Link>
            <Link href={'/contact'} className={`p-0 text-xl leading-[30px]  font-roboto inline-block ${pathname === "/contact" ? "font-semibold text-primary-100" : "font-normal text-[#5c5c5c] "}`}>Contact</Link>
            <Link href={'/blog'} className={`p-0 text-xl leading-[30px]  font-roboto inline-block ${pathname === "/blog" ? "font-semibold text-primary-100" : "font-normal text-[#5c5c5c] "}`}>Blog</Link>
            <Link href={'/login'} className={`p-0 text-xl leading-[30px]  font-roboto inline-block ${pathname === "/login" ? "font-semibold text-primary-100" : "font-normal text-[#5c5c5c] "}`}>Login</Link>
        </div>
    </div>
  )
}

export default Header