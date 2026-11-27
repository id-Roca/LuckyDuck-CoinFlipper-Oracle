import { useUser } from '@clerk/react'
import { Navigate } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type TRequireAuth = {
  children: ReactNode
}

export function RequireAuth({ children }: TRequireAuth) {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return <p>Anmeldung wird geprüft</p>
  }

  if (!isSignedIn) {
    return <Navigate to="/signin/$" replace />
  }

  return children
}