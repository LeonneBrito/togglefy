import { ReactNode } from 'react'

import Header from '@/components/common/header'
import Sidebar from '@/components/common/sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="flex sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex min-w-0 max-w-7xl grow flex-col sm:flex-row sm:py-6">
          <Sidebar />
          <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
