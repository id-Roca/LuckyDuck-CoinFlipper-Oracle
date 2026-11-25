import { useNavigate } from '@tanstack/react-router'

import duckImage from '../assets/duckImage.jpg'

export default function Hero() {

const navigate = useNavigate()


  return (
    <>
      <div className="hero bg-[#F4F1EA] p-6">
        <div className="hero-content flex-col md:flex-row-reverse gap-10 lg:gap-16 xl:gap-24 2xl:gap-42">
          <img
            alt="Mallard duck with emerald green feathers"
            src={duckImage}
            className="w-full max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl rounded-lg shadow-2xl"
          />

          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-5xl font-bold text-[#214C63]">
              Leave a little room for chance.
            </h1>

            <p className="py-6 text-[#214C63] text-xl">
              Flip a coin, ask a question, or explore the unexpected. Sometimes,
              a little randomness is all you need.
            </p>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <button 
              className="btn btn-lg rounded-2xl bg-[#087F73] hover:bg-[#214C63] text-[#F4F1EA] w-44"
              onClick={()=>navigate({to: "/flip-coin"})}
              >
                Toss a coin
              </button>

              <button 
              className="btn btn-lg rounded-2xl bg-[#087F73] hover:bg-[#214C63] text-[#F4F1EA] w-44"
              onClick={()=>navigate({to: "/oracle"})}
              >
              Ask the Oracle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
