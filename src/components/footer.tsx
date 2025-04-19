import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  dictionary: {
    links: {
      home: string
      about: string
    }
    contact: {
      title: string
      address: string
      phone: string
      email: string
    }
    social: {
      title: string
      follow: string
    }
    copyright: string
  }
}

export default function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/public" className="inline-block mb-6">
              <Image src="/logo.svg" alt="S-Group Logo" width={120} height={40} />
            </Link>
            <p className="text-sm text-gray-500 mb-4">{dictionary.copyright}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">{dictionary.contact.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <span className="text-sm">{dictionary.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-sm">{dictionary.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-sm">{dictionary.contact.email}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">{dictionary.social.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{dictionary.social.follow}</p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
