import type { Project, ProjectCategory } from "@/types/project"
import { ProjectCard } from "./project-card"

interface ProjectGridProps {
  projects: Project[]
  activeCategory: ProjectCategory
  currentPage: number
  itemsPerPage: number
}

export function ProjectGrid({ projects, activeCategory, currentPage, itemsPerPage }: ProjectGridProps) {
  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeCategory)
            : project.category === activeCategory,
        )

  // Calculate pagination
  const indexOfLastProject = currentPage * itemsPerPage
  const indexOfFirstProject = indexOfLastProject - itemsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  return (
    <div className="mx-auto grid max-w-full grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
      {currentProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
