import { DollarSign, LayoutGrid, Logs, Settings, User } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

const sidebarItems = [
  {
    title: 'Apps',
    url: '/apps',
    icon: <LayoutGrid />,
  },
  {
    title: 'Logs',
    url: '/logs',
    icon: <Logs />,
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: <DollarSign />,
  },
  {
    title: 'Account',
    url: '/account',
    icon: <User />,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: <Settings />,
  },
]

export default function Sidebar() {
  return (
    <div className="flex w-screen shrink-0 flex-col sm:w-[215px]">
      <div className="flex flex-row justify-between gap-x-4 gap-y-2 p-4 text-center sm:flex-col sm:p-6 sm:text-left">
        {sidebarItems.map((item, index) => (
          <Button
            asChild
            variant="ghost"
            key={index}
            className="w-full items-center justify-start"
          >
            <div className="flex gap-x-2">
              {item.icon}
              <Link href={item.url}>{item.title}</Link>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
