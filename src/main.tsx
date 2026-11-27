import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from "@clerk/react";
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen';
import "./styles.css"

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!clerkKey){
  throw Error("VITE Key is missing!")
}

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);