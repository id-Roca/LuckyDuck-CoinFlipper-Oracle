import { useState } from 'react'
import type { SubmitEvent } from 'react'
import type { IOracleData } from '#/types/types'
import { oracleAnswers } from '#/settings/settings'

export default function Oracle() {
  const [oracle, setOracle] = useState<IOracleData | null>(null)

  function onSubmitHandler(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const randomAnswer = Math.floor(Math.random() * oracleAnswers.length)

    setOracle(oracleAnswers[randomAnswer])
  }

  return (
    <>
      <header className="flex items-center justify-center flex-col p-10 mb-4">
        <h1 className="text-4xl">The Lucky Duck Oracle</h1>
        <span className="text-3xl mt-4">🦆 🔮</span>
      </header>

      <main className="flex items-center justify-center flex-col p-10 text-center text-xl">
        <article>
          <p>
            Start that ambitious side project? Order another pizza? Get a new
            gym subscription? Consult the ancient wisdom of the pond.
          </p>

          <p className='mt-4'>
            Type in your question and find out if the duck's opinion speaks to
            you!
          </p>
        </article>

        <article>
          {oracle && (
            <article className='mt-10'>
              <h2>{oracle.title}</h2>
              <p className='mt-4'>{oracle.answer}</p>
              <img src={oracle.duckImg} alt={oracle.alt} />
            </article>
          )}
        </article>

        <section className="grid place-content-center h-30 mt-4">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col justify-center items-center gap-4"
          >
            <input
              className="border-solid"
              type="text"
              placeholder="Type your question..."
              required
            />

            <button
              type="submit"
              className="btn btn-lg rounded-2xl bg-[#087F73] hover:bg-[#214C63] text-[#F4F1EA]"
            >
              Get your duck's opinion
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
