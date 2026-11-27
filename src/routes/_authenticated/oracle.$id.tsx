import { createFileRoute, Link } from '@tanstack/react-router'
import { oracleAnswers } from '#/settings/settings'

export const Route = createFileRoute('/_authenticated/oracle/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  const wisdom = oracleAnswers.find(
    (answer) => answer.id === Number(id)
  )

  if (!wisdom) {
    return <p>The duck couldn't find this wisdom.</p>
  }

  return (
    <main className="p-10 text-center">
      <h1>{wisdom.title}</h1>
      <p>{wisdom.answer}</p>
      <img src={wisdom.duckImg} alt={wisdom.alt} />

      <Link to="/oracle">Back to the Oracle</Link>
    </main>
  )
}