import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const Header = () => {
    return (
        <>
            <div className=' h-screen w-full flex-col flex justify-center items-center  '>
                <h1 className='text-[#fe6925] font-thin text-9xl'>SemWise</h1>
                <div className='text-[#efefef] text-3xl'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </>
    )
}

export default Header