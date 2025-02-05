import { AppWindowMac, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Page() {
  const projects = []

  return (
    <>
      <div className="flex items-start justify-between">
        <h1 className="font-semibold text-2xl/8 text-foreground sm:text-xl/8">
          Apps
        </h1>
        <Button variant="default" size="sm">
          <Plus className="w-4 h-4" />
          Create a new app
        </Button>
      </div>
      <div className="mt-8 flex grow flex-col">
        {projects.length === 0 && (
          <div className="flex grow items-center justify-center py-16">
            <div className="text-center">
              <AppWindowMac className="mx-auto h-10 w-10 text-muted-foreground" />
              <h3 className="mt-2 font-semibold text-sm">
                You don&apos;t have any apps yet.
              </h3>
              <p className="mt-1 text-muted-foreground text-sm">
                Create a new app to get started.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
