import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Research Project 1",
      description: "Description of the research project, its goals, methodology, and expected outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Category 1", "Category 2"],
      status: "Ongoing",
    },
    {
      id: 2,
      title: "Research Project 2",
      description: "Description of the research project, its goals, methodology, and expected outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Category 2", "Category 3"],
      status: "Completed",
    },
    {
      id: 3,
      title: "Research Project 3",
      description: "Description of the research project, its goals, methodology, and expected outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Category 1", "Category 3"],
      status: "Ongoing",
    },
    {
      id: 4,
      title: "Research Project 4",
      description: "Description of the research project, its goals, methodology, and expected outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Category 4"],
      status: "Planned",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Research Projects</h1>

      <section className="mb-12">
        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          Our laboratory focuses on [specific research areas]. Below are our current and past research projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Ongoing"
                        ? "default"
                        : project.status === "Completed"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>
                  {project.categories.map((category) => (
                    <Badge key={category} variant="outline" className="mr-2">
                      {category}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/projects/${project.id}`} className="text-primary flex items-center hover:underline">
                  View project details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Student Projects</h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Our lab also supervises various student projects at undergraduate and graduate levels.
        </p>
        <Link href="/student-projects" className="text-primary flex items-center hover:underline">
          View student projects <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
