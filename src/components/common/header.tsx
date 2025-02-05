import { CircleHelp } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'
import Logo from './logo'
import ThemeSwitcher from './theme-switcher'
import { UserProfileButton } from './user-profile-button'

export default function Header() {
  return (
    <header className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 border-b p-6 sm:flex lg:px-8">
      <div className="flex items-center gap-x-4 divide-x">
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost">
          <Link href="/docs">
            <CircleHelp className="w-6 h-6 text-gray-700" />
            Docs
          </Link>
        </Button>
        <ThemeSwitcher />
        <UserProfileButton />
      </div>
    </header>
  )
}
