"use client"

import type React from "react"

import type { ProjectCategory } from "@/types/project"

interface ProjectTabsProps {
  activeCategory: ProjectCategory
  setActiveCategory: (category: ProjectCategory) => void
}

export function ProjectTabs({ activeCategory, setActiveCategory }: ProjectTabsProps) {
  return (
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
