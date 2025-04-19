import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@//components/ui/card"

interface StorySectionProps {
  dictionary: {
    title: string
    description: string
    activities: {
      training: {
        title: string
        description: string
      }
      events: {
        title: string
        description: string
      }
    }
  }
}

export default function StorySection({ dictionary }: StorySectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">
              {dictionary.title}
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          <Card className="border-2 border-blue-400">
            <CardHeader>
              <CardTitle className="text-blue-600">{dictionary.activities.training.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{dictionary.activities.training.description}</CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-400">
            <CardHeader>
              <CardTitle className="text-orange-500">{dictionary.activities.events.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{dictionary.activities.events.description}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
