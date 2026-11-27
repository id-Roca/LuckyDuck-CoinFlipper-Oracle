import { createFileRoute, Outlet } from '@tanstack/react-router'
import Oracle from '#/components/Oracle.comp'

export const Route = createFileRoute('/_authenticated/oracle')({
  component: RouteComponent,
})

function RouteComponent() {


  return (
    <div>
   
        <Outlet/>
      
    </div>
  )
}
