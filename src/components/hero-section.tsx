import { Button } from "@//components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
  dictionary: {
    headline: string
    description: string
    cta: string
  }
}

export default function HeroSection({ dictionary }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">{dictionary.headline}</h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dictionary.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-blue-500 hover:bg-blue-600">{dictionary.cta}</Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex justify-center">
            <Image
              alt="S-Group Hero"
              className="rounded-lg object-cover"
              height={400}
              src="/home-page.jpg"
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
