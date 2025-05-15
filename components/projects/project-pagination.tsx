"use client"

import type React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface ProjectPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function ProjectPagination({ currentPage, totalPages, onPageChange }: ProjectPaginationProps) {
  // Generate page numbers array
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const handlePageChange = (page: number, e: React.MouseEvent) => {
    e.preventDefault()
    onPageChange(page)

    // Scroll to projects section to show the change
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      const yOffset = -100 // Adjust this value to account for the sticky header
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={(e) => handlePageChange(currentPage - 1, e)} />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink href="#" isActive={currentPage === number} onClick={(e) => handlePageChange(number, e)}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href="#" onClick={(e) => handlePageChange(currentPage + 1, e)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
