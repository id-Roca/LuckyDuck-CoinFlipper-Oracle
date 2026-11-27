import { createFileRoute, Outlet } from '@tanstack/react-router'
import { RequireAuth } from '#/components/RequireAuth'

export const Route = createFileRoute('/_authenticated')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <RequireAuth>
        <Outlet />
      </RequireAuth>
    </>
  )
}
