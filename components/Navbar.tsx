import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
      <nav className=" relative z-30 py-5 flex justify-between items-center">
        <Link href="">
            <Image src="/home.png" width={70} height={70} alt="NavTitle" />

          </Link>
          
        <ul className="hidden h-full gap-12 lg:flex ">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="text-gray-500 cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
          </ul>
          
          <div className="hidden lg:flex">
            {/* since i will be using button more than twice, i passed it as a props */}
              <Button
                  type="button"
                  title= "Login"
                  icon="/user.png"
                  variant = "btn_dark_green"
              />
          </div>

          <Image src="/menu.svg" height={34} width={34} alt="menu svg" className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default Navbar