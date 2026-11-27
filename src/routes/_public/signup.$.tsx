import { SignUp } from '@clerk/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/signup/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SignUp
        path="/signup"
        signInUrl="/signin"
        fallbackRedirectUrl={'/oracle'}
        signInFallbackRedirectUrl={'/oracle'}
        fallback={<p>Loading...</p>}
      />
    </>
  )
}
