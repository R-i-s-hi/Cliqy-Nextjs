"use client"
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import {ModeToggle} from "@/components/themeButton";
        

export function DesktopNavbar() {

    const { isSignedIn } = useAuth();

    return (
    <div className="hidden md:flex items-center space-x-4">
      
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

        {isSignedIn ? (
         <>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/"
            >
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          <ModeToggle />
          <UserButton />
        </>
      ) : (
        <>
        <ModeToggle />
        <SignInButton mode="modal">
          <Button variant="default">Sign In</Button>
        </SignInButton>
        </>
      ) }

    </div>
  );
}
