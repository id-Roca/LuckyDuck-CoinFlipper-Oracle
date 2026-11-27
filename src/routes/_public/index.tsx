import { createFileRoute } from '@tanstack/react-router'
import Hero from '#/components/Hero.comp'

export const Route = createFileRoute('/_public/')({ component: Home })

function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="min-h-100 p-20">
          <h4 className="text-3xl text-bold mb-5">
            Every decision has it's up and down sides
          </h4>
          <p>
            {' '}
            It is perfectly acceptable to flip a coin, if reason alone won't get
            the job done. Best case scenario, you will have made the decision
            while the coin is "in the air".
          </p>
        </section>
      </main>
    </>
  )
}
