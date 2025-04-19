import "server-only"

interface Dictionary {
  metadata: {
    description: string
  }
  navigation: {
    home: string
    about: string
  }
  home: {
    hero: {
      headline: string
      description: string
      cta: string
    }
    story: {
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
    training: {
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
    testimonials: {
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
  about: {
    title: string
    description: string
    mission: {
      title: string
      description: string
    }
    vision: {
      title: string
      description: string
    }
  }
  footer: {
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

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  vi: () => import("./dictionaries/vi.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  return (dictionaries[locale] || dictionaries.en)()
}
