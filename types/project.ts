export type ProjectCategory = "all" | "web" | "mobile" | "logo" | "others"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: ProjectCategory | ProjectCategory[]
}
