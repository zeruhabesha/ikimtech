"use client"

import { useState, useEffect } from "react"
import type { ProjectCategory } from "@/types/project"
import { projects } from "@/data/projects"
import { ProjectTabs } from "./project-tabs"
import { ProjectGrid } from "./project-grid"
import { ProjectPagination } from "./project-pagination"

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // Show 6 projects per page

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  // Calculate total pages
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeCategory)
            : project.category === activeCategory,
        )

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#033D54]">Our Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of our recent work and see how we bring ideas to life.
            </p>
          </div>

          {/* Category Tabs */}
          <ProjectTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>

        {/* Projects Grid */}
        <ProjectGrid
          projects={projects}
          activeCategory={activeCategory}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <ProjectPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </section>
  )
}
