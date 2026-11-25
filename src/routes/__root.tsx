import { Outlet, createRootRoute } from '@tanstack/react-router'
import '../styles.css'
import Navbar from '#/components/Navbar.comp'
import Footer from '#/components/Footer.comp'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="min-h-dvh flex flex-col">
        <Navbar />

        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  )
}
