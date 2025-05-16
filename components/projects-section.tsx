"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Define project categories
type ProjectCategory = "all" | "web" | "mobile" | "logo" | "others"

// Define project interface
interface Project {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory | ProjectCategory[]
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Nawla Trading PLC",
    description: "This Nawla Trading website showcases products and services with a clean, responsive design.",
    image: "/agape.jpg", // Ensure the image is in the public folder
    category: "web",
  },
  {
    id: 2,
    title: "Gojo Guest House",
    description: "This guesthouse website highlights services, room options, and amenities.",
    image: "/agape.jpg?height=300&width=400",
    category: "web",
  },
  {
    id: 3,
    title: "Brand Clothing",
    description: "Brand Clothing brings you timeless fashion with a modern touch.",
    image: "/agape.jpg?height=300&width=400",
    category: "web",
  },
  {
    id: 4,
    title: "Heiver Tech",
    description:
      "Provides various technology services and is globally recognized for its outstanding innovations, cutting-edge solutions, and commitment to excellence in the tech industry.",
    image: "/agape.jpg?height=300&width=400",
    category: "web",
  },
  {
    id: 5,
    title: "ነጋሪት Marketing Agency",
    description:
      "Offers a wide range of digital services, striving to modernize the world by providing innovative and effective marketing solutions.",
    image: "/agape.jpg?height=300&width=400",
    category: "web",
  },
  {
    id: 6,
    title: "Adape Leather Design",
    description:
      "Specializes in crafting a variety of high-quality leather products, delighting clients with beautiful and expertly handcrafted designs.",
    image: "/agape.jpg?height=300&width=400",
    category: "others",
  },
  {
    id: 7,
    title: "ShoeIT",
    description:
      "This mobile app is dedicated to shoe sales, offering a clean, user-friendly design. It features easy navigation, comprehensive product details, and a visually appealing layout that enhances the shopping experience.",
    image: "/agape.jpg?height=300&width=400",
    category: "mobile",
  },
  {
    id: 8,
    title: "Gojo Guest House",
    description:
      "A logo for a guesthouse that gives different kinds of services, showcasing versatility and professionalism.",
    image: "/agape.jpg?height=300&width=400",
    category: "logo",
  },
  {
    id: 9,
    title: "Habesha Crowd",
    description: "A logo for a company that provides various services, showcasing versatility and professionalism.",
    image: "/agape.jpg?height=300&width=400",
    category: "logo",
  },
  {
    id: 10,
    title: "Eromica",
    description:
      "A logo for a woman that is represented by E= Ethiopia, Romi= roman (name of the woman), ca= comes from the last word Africa",
    image: "/agape.jpg?height=300&width=400",
    category: "logo",
  },
  {
    id: 11,
    title: "ነጋሪት Marketing Agency",
    description:
      "This one is the logo part for the marketing agency that provides innovative and effective marketing solutions.",
    image: "/agape.jpg?height=300&width=400",
    category: "logo",
  },
  {
    id: 12,
    title: "Hany Beauty",
    description:
      "A logo for a beauty salon that provides various services, showcasing versatility and professionalism.",
    image: "/agape.jpg?height=300&width=400",
    category: "logo",
  },
  {
    id: 13,
    title: "Yegna Dirsha",
    description: "A logo for a company that is worked for their youtube and social media channels.",
    image: "/agape.jpg?height=300&width=400",
    category: "logo",
  },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeCategory)
            : project.category === activeCategory,
        )

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#033D54]">Our Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of our recent work and see how we bring ideas to life.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <CategoryTab category="all" activeCategory={activeCategory} onClick={() => setActiveCategory("all")}>
              All
            </CategoryTab>
            <CategoryTab category="web" activeCategory={activeCategory} onClick={() => setActiveCategory("web")}>
              Web
            </CategoryTab>
            <CategoryTab category="mobile" activeCategory={activeCategory} onClick={() => setActiveCategory("mobile")}>
              Mobile
            </CategoryTab>
            <CategoryTab category="logo" activeCategory={activeCategory} onClick={() => setActiveCategory("logo")}>
              Logo
            </CategoryTab>
            <CategoryTab category="others" activeCategory={activeCategory} onClick={() => setActiveCategory("others")}>
              Others
            </CategoryTab>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* <Image
                src={project.image || "/agape.jpg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              /> */}
                            <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#033D54] mb-2">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CategoryTabProps {
  category: ProjectCategory
  activeCategory: ProjectCategory
  onClick: () => void
  children: React.ReactNode
}

function CategoryTab({ category, activeCategory, onClick, children }: CategoryTabProps) {
  const isActive = category === activeCategory

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 border rounded-md transition-colors ${
        isActive ? "border-[#033D54] text-white bg-[#033D54]" : "border-[#033D54] text-[#033D54] hover:bg-[#033D54]/10"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </button>
  )
}
