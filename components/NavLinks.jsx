import Link from 'next/link'
import React from 'react'



const NavLinks = () => {
  return (
    <div className='flex lg:justify-center '>
      <ul className='flex flex-col lg:flex-row  text-[#333333]  gap-5'>
        <Link href='#' className='hover:border-b'  >
        <li>Home</li>
        </Link>
        <Link href='#about-1'className='hover:border-b' >
        <li>About Ifá</li>
        </Link>
        <Link href='#verses-1'className='hover:border-b' >
        <li>Explore verses</li>
        </Link>
        <Link href='#app-1'className='hover:border-b ' >
        <li>Features</li>
        </Link>
        <Link href='#price-1'className='hover:border-b ' >
        <li>Pricing</li>
        </Link>
        <Link href='#' className='lg:ms-18  ' >
        <li className='font-[900]'>Login</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavLinks
