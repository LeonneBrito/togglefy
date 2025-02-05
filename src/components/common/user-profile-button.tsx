'use client'
import { createAuthClient } from 'better-auth/react'
import { DollarSign, LogOut, User } from 'lucide-react'
import Image from 'next/image'

import { authClient } from '@/lib/auth-client'

import { Avatar } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const { useSession } = createAuthClient()

export function UserProfileButton() {
  const { data: session } = useSession()

  async function handleSignOut() {
    await authClient.signOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Avatar>
          {session?.user && session?.user.image ? (
            <Image
              className="aspect-square h-full w-full"
              src={session.user.image}
              width={48}
              height={48}
              alt=""
            />
          ) : (
            <div className="aspect-square h-full w-full bg-accent" />
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="flex flex-col gap-1">
          {session?.user?.name ?? 'John Doe'}
          <span className="text-xs text-gray-500 font-normal">
            {session?.user?.email ?? 'johndoe@email.com'}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <form action={handleSignOut}>
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <button type="submit" className="w-full">
              <User className="h-4 w-4" />
              Profile
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <button type="submit" className="w-full">
              <DollarSign className="h-4 w-4" />
              Billing
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <button type="submit" className="w-full">
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
