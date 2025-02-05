import './globals.css'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { inter } from '@/styles/fonts'

import Providers from './providers'

export const metadata: Metadata = {
  title: 'Togglefy | Feature Flag made easy',
  description:
    'Togglefy is a feature flag management tool that helps you manage feature flags and remote config in your app.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${inter.className}`,
          'whitespace-pre-line overscroll-none antialiased',
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
