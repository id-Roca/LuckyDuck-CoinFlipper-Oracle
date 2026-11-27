import { SignIn } from '@clerk/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/signin/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      
      <SignIn
      routing='path'
      path='/signin'
      signInUrl='/signup'
      fallbackRedirectUrl={"/oracle"}
      signUpFallbackRedirectUrl={"/oracle"}
      fallback={<p>Loading...</p>}
      
      />
    </>
  )
}
