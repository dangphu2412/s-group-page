import { Card, CardContent, CardHeader, CardTitle } from "@//components/ui/card"
import { Code, PenTool, Megaphone } from "lucide-react"

interface TrainingSectionProps {
  dictionary: {
    title: string
    description: string
    majors: {
      technology: {
        title: string
        description: string
        items: string[]
      }
      marketing: {
        title: string
        description: string
        items: string[]
      }
      design: {
        title: string
        description: string
        items: string[]
      }
    }
  }
}

export default function TrainingSection({ dictionary }: TrainingSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
              {dictionary.title}
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>{dictionary.majors.technology.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{dictionary.majors.technology.description}</p>
              <ul className="space-y-2">
                {dictionary.majors.technology.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Megaphone className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle>{dictionary.majors.marketing.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{dictionary.majors.marketing.description}</p>
              <ul className="space-y-2">
                {dictionary.majors.marketing.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <PenTool className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>{dictionary.majors.design.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{dictionary.majors.design.description}</p>
              <ul className="space-y-2">
                {dictionary.majors.design.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
