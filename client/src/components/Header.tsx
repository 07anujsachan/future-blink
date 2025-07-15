
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export const Header = () => {

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold">
        Future<span className="text-blue-500">Blink</span>
      </div>
    <div>
    <SignedOut>
        <SignInButton  />
      </SignedOut>
      <SignedIn >
        <UserButton />
      </SignedIn>
    </div>
      
    </nav>
  );
};
