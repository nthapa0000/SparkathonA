import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs'
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Organization } from '@clerk/nextjs/server'
import {dark} from '@clerk/themes'

const Topbar = () => {
  return (
    // do search what the class topbar is doing 
    <nav className='topbar'>
        <Link href="/" className='flex items-center gap-4'>
            <Image src="/assets/Walmart_logo.svg" alt='logo' width={150} height={28}/>
            <p className='text-heading3-bold text-light-1 max-xs:hidden'>WalmartUnity
            </p>
        </Link>
        <div className='flex items-center gap-1'>
            <div className='block '>
            <SignedIn>
                {/* this code appears only when we are signed in  */}
                <SignOutButton>
                    <div className='flex cursor-pointer'>
                        <Image 
                        src="/assets/logout.svg"
                        alt="logout"
                        width={24}
                        height={24}
                        />
                    </div>
                </SignOutButton>
            </SignedIn>
            </div>
            <OrganizationSwitcher 
                appearance={{
                    baseTheme:dark,
                    elements:{
                        organizationSwitcherTrigger:
                        "py-2 px-4"
                    }
                }}
            />
        </div>
    </nav>
  )
}

export default Topbar