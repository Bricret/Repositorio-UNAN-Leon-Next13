import Link from "next/link"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"

export const Footer = () => {
  return (
        <footer className="flex items-center justify-between px-6 py-4 border-t border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 UNAN-Leon</p>
            <section className="flex items-center space-x-4">
            <Link 
                className="flex gap-4" 
                href="https://www.facebook.com/UNANLeonCCYTT/"
                rel="noopener noreferrer"
                target="_blank"
                >
                <BsFacebook className="w-7 h-7" color="#3b5998"/>
            </Link>
            <Link 
                className="text-sm text-zinc-500 dark:text-zinc-400" 
                href="https://www.youtube.com/channel/UC7PzV8SjujXqwhQszXj63vQ"
                target="_blank"
                rel="noopener noreferrer">
                <BsYoutube className="w-7 h-7" color="#c4302b" />
            </Link>
            <Link 
                className="text-sm text-zinc-500 dark:text-zinc-400" 
                href="https://www.instagram.com/unanleon/"
                target="_blank"
                rel="noopener noreferrer">
                <BsInstagram className="w-7 h-7" color="#3f729b" />
            </Link>
            </section>
        </footer>
  )
}
