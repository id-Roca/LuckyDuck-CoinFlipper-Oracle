import { useState } from 'react'

type Coin = 0 | 1

export default function Coin() {
  const [count, setCount] = useState(0)
  const [isTossed, setIsTossed] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  function flipCoin() {
    setCount((prev) => prev + 1)
    const landedOn = Math.floor(Math.random() * 2)
    setIsTossed(landedOn)
    setIsAnimating(true)
  }

  return (
    <>
      <div className='bg-[#F4F1EA]'>
        <div className="min-w-100 min-h-160  bg-[#214C63] flex justify-center items-center gap-6">
          <div
            onAnimationEnd={() => setIsAnimating(false)}
            className={`w-48 h-48 rounded-full bg-[#D9C65C]
        border-4 border-[#B49C43] shadow-lg flex justify-center items-center ${isAnimating ? 'animate-magic' : ''}`}
          >
            <p className="text-5xl font-bold text-[#102E2B]">
              {isTossed === 1 ? 'T' : 'H'}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 flex-col mt-2 p-8">
          <button
            onClick={flipCoin}
            className="btn btn-lg rounded-2xl bg-[#087F73] hover:bg-[#214C63] text-[#F4F1EA] w-60 h-12"
          >
            Flip Coin
          </button>

          <p className='text-2xl'>You have tossed the coin {count} times.</p>
          <p className='text-xl'>The coin landed on {isTossed === 0 ? 'Heads' : 'Tails'}.</p>
        </div>
      </div>
    </>
  )
}
