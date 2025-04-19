"use client"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@//components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@//components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLang: string
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (lang: string) => {
    if (currentLang === lang) return

    const newPathname = pathname.replace(`/${currentLang}`, `/${lang}`)
    router.push(newPathname)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("vi")}>Tiếng Việt</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
