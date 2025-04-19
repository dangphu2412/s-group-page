import { getDictionary } from "@//lib/dictionaries"

export default async function AboutPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{dict.about.title}</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">{dict.about.description}</p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{dict.about.mission.title}</h2>
            <p>{dict.about.mission.description}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">{dict.about.vision.title}</h2>
            <p>{dict.about.vision.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
