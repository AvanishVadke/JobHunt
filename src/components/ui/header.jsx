import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return(
     <>
        <nav className="py-4 flex justify-between items-center">
            <Link>
                <img src="/logo.png" className="h-20" />
            </Link>

            <Button variant="outline">Login</Button>
            
            {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
        </nav>
    </>
    
  );  
};

export default Header