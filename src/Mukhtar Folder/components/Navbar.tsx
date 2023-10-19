import  { ReactElement} from "react"
import { DarkMode } from "./DarkMode"

interface Navlinks {
    logo:string,
    link1:string,
    link2:string
}

export const Navbar= ({logo, link1, link2}:Navlinks): ReactElement => {
  return (
      <nav className="bg-blue-500">
        <div className="container mx-auto">
          <div className="flex items-center justify-between sm:flex-row h-20">
              <div className="text-black text-xl font-bold">{logo}</div>
              <ul className="flex space-x-4">
                <li><a className="text-black  hover:text-2xl font-serif" href='#'>{link1}</a></li>
                <li><a  className="text-black hover:text-2xl font-serif"href='#'>{link2}</a></li>
                <DarkMode />
              </ul>
          </div>
        </div>
      </nav>
  )
}

