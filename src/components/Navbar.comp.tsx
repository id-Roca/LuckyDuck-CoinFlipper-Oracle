import { GiDuck } from 'react-icons/gi'
import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#102E2B] shadow-sm text-[#F4F1EA]">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost bg-[#102E2B] boder-none shadow-none text-[#F4F1EA] text-2xl"
          >
            Lucky <GiDuck size={30} className="text-[#D9C65C]" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a>Login</a>
            </li>
            <li>
              <details>
                <summary>Decision Helpers</summary>
                <ul className="bg-[#102E2B] rounded-t-none p-2 z-50">
                  <li>
                    <Link to="/flip-coin">Toss a Coin</Link>
                  </li>
                  <li>
                    <Link to="/oracle">Oracle</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
