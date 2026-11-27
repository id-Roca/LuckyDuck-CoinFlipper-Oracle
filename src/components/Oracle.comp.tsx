import { useState } from 'react'
import type { SubmitEvent, ChangeEvent } from 'react'
import type { IOracleData } from '#/types/types'
import { oracleAnswers } from '#/settings/settings'

export default function Oracle() {
  const [oracle, setOracle] = useState<IOracleData | null>(null)
  const [showOracle, setShowOracle] = useState(false)
  const [input, setInput] = useState("")
  const [inputedQuestion, setInputedQuestion] = useState("")

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setInputedQuestion(input)
    const randomAnswer = Math.floor(Math.random() * oracleAnswers.length)
    setOracle(oracleAnswers[randomAnswer])
    setShowOracle(true)
    setInput("")
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    setInput(e.target.value)
  }
  return (
    <>
      <header className="flex items-center justify-center flex-col p-4 m-4">
        <h1 className="text-4xl">The Lucky Duck Oracle</h1>
        <span className="text-3xl mt-4">🦆 🔮</span>
      </header>

      <main className="flex items-center justify-center flex-col p-4 text-center text-xl">
        { !showOracle && 
        (<article className=' flex flex-col justify-center items-center'>  
          <p>
            Start that ambitious side project? Order another pizza? Get a new
            gym subscription? Consult the ancient wisdom of the pond.
          </p>

          <p className="mt-4">
            Type in your question and find out if the duck's opinion speaks to
            you!
          </p>
        </article>)}


       
          {oracle && (
            <article className=" flex flex-col justify-center items-center">
              <p className='mb-4'>Your question: {inputedQuestion} </p>
              <h2>{oracle.title}</h2>
              <p className="mt-4">{oracle.answer}</p>
              
                <img
                  className="w-80 rounded-2xl mt-4"
                  src={oracle.duckImg}
                  alt={oracle.alt}
                />
            </article>
          )}
        

        <section className="grid place-content-center h-30 mt-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-4"
          >
            <input
              className="border-solid"
              type="text"
              placeholder="Type your question..."
              required
              value={input}
              onChange={handleChange}
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
