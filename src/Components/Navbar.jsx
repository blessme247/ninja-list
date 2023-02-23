import Link from 'next/link'
import React from 'react'
import "../app/globals.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='logo'>
        <Image src='/github-cover.jpg' alt="logo" width={78} height={58} />
        </div>
       <Link href="/"> Home  </Link>
        <Link href="/about">About</Link>
       <Link href="/ninjas">Ninjas </Link>
    </nav>
  )
}

export default Navbar