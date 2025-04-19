import Link from "next/link"
import Image from "next/image"
import { LanguageSwitcher } from "@//components/language-switcher"

interface NavbarProps {
  dictionary: {
    home: string
    about: string
  }
  lang: string
}

export default function Navbar({ dictionary, lang }: NavbarProps) {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="S-Group Logo" width={120} height={40} priority />
        </Link>

        <nav className="flex items-center gap-6">
          <Link href={`/${lang}`} className="text-sm font-medium transition-colors hover:text-blue-500">
            {dictionary.home}
          </Link>
          <Link href={`/${lang}/about`} className="text-sm font-medium transition-colors hover:text-blue-500">
            {dictionary.about}
          </Link>
          <LanguageSwitcher currentLang={lang} />
        </nav>
      </div>
    </header>
  )
}
