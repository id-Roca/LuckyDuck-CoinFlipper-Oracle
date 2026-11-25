import { createFileRoute } from '@tanstack/react-router'
import Coin from '#/components/Coin.comp'

export const Route = createFileRoute('/flip-coin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Coin></Coin>
    </>
  )
}
