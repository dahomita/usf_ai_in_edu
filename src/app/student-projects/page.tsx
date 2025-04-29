import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentProjectsPage() {
  const graduateProjects = [
    {
      id: 1,
      title: "Graduate Project 1",
      student: "Graduate Student Name",
      level: "PhD",
      year: "2024-2025",
      description:
        "Description of the graduate student's research project, including methodology and expected outcomes.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Graduate Project 2",
      student: "Graduate Student Name",
      level: "Master's",
      year: "2024-2025",
      description:
        "Description of the graduate student's research project, including methodology and expected outcomes.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const undergraduateProjects = [
    {
      id: 3,
      title: "Undergraduate Project 1",
      student: "Undergraduate Student Name",
      level: "Senior Thesis",
      year: "2025",
      description: "Description of the undergraduate student's research project, including methodology and outcomes.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Undergraduate Project 2",
      student: "Undergraduate Student Name",
      level: "Independent Study",
      year: "2024",
      description: "Description of the undergraduate student's research project, including methodology and outcomes.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Undergraduate Project 3",
      student: "Undergraduate Student Name",
      level: "Course Project",
      year: "2024",
      description: "Description of the undergraduate student's research project, including methodology and outcomes.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const renderProjectList = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card key={project.id}>
          <div className="relative h-48">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>{project.title}</CardTitle>
              <Badge>{project.level}</Badge>
            </div>
            <CardDescription>
              {project.student} • {project.year}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/student-projects/${project.id}`} className="text-primary flex items-center hover:underline">
              View project details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Student Projects</h1>

      <section className="mb-12">
        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          Our lab provides opportunities for both graduate and undergraduate students to engage in meaningful research
          projects.
        </p>

        <Tabs defaultValue="graduate">
          <TabsList className="mb-6">
            <TabsTrigger value="graduate">Graduate Projects</TabsTrigger>
            <TabsTrigger value="undergraduate">Undergraduate Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="graduate">{renderProjectList(graduateProjects)}</TabsContent>

          <TabsContent value="undergraduate">{renderProjectList(undergraduateProjects)}</TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <div className="prose max-w-3xl">
          <p>
            We are always looking for motivated students interested in joining our research lab. If you are a graduate
            or undergraduate student interested in our research areas, please contact Professor Name to discuss
            potential opportunities.
          </p>
          <p>For undergraduate students, we offer research opportunities through:</p>
          <ul>
            <li>Senior thesis projects</li>
            <li>Independent study courses</li>
            <li>Summer research programs</li>
            <li>Research assistant positions</li>
          </ul>
          <p>For graduate students, we have openings for:</p>
          <ul>
            <li>PhD candidates</li>
            <li>Master's thesis projects</li>
            <li>Research assistantships</li>
          </ul>
          <p className="mt-4">
            <Link href="/contact" className="text-primary hover:underline">
              Contact us to learn more about current opportunities
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
