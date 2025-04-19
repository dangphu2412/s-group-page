"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialsSectionProps {
  dictionary: {
    title: string
    description: string
    testimonials: Array<{
      name: string
      role: string
      content: string
      avatar?: string
    }>
  }
}

export default function TestimonialsSection({ dictionary }: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0)
  const testimonials = dictionary.testimonials

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                {dictionary.title}
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dictionary.description}
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl relative">
            <div className="overflow-hidden">
              <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4 pb-6">
                      <Card className="border-none shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col">
                            {/* Testimonial content */}
                            <div className="p-8 bg-white relative">
                              <Quote className="absolute text-blue-500 opacity-20 h-8 w-8 left-4 top-6" />
                              <p className="text-lg text-gray-700 pl-6">{testimonial.content}</p>
                            </div>

                            {/* User info with image */}
                            <div className="flex items-center p-6 bg-blue-50">
                              <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4 flex-shrink-0 border-2 border-white">
                                <Image
                                    src={
                                        testimonial.avatar ||
                                        `/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(0)}`
                                    }
                                    alt={testimonial.name}
                                    className="object-cover"
                                    fill
                                />
                              </div>
                              <div>
                                <p className="font-bold text-blue-700">{testimonial.name}</p>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center gap-2 mt-8">
              <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 hover:bg-blue-100 hover:text-blue-700"
                  onClick={previous}
                  aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {testimonials.map((_, index) => (
                  <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-blue-500" : "bg-gray-300"}`}
                      onClick={() => setCurrent(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                  />
              ))}
              <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 hover:bg-blue-100 hover:text-blue-700"
                  onClick={next}
                  aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}
