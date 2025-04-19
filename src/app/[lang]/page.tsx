import { getDictionary } from "@//lib/dictionaries"
import HeroSection from "@//components/hero-section"
import StorySection from "@//components/story-section"
import TrainingSection from "@//components/training-section"
import TestimonialsSection from "@//components/testimonials-section"

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection dictionary={dict.home.hero} />
      <StorySection dictionary={dict.home.story} />
      <TrainingSection dictionary={dict.home.training} />
      <TestimonialsSection dictionary={dict.home.testimonials} />
    </main>
  )
}
