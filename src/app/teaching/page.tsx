import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeachingPage() {
  const currentCourses = [
    {
      id: 1,
      code: "CS 101",
      title: "Introduction to Computer Science",
      semester: "Spring 2025",
      description: "An introductory course covering the fundamentals of computer science and programming.",
    },
    {
      id: 2,
      code: "CS 401",
      title: "Advanced Topics in Research Area",
      semester: "Spring 2025",
      description: "An advanced course exploring cutting-edge research in the field.",
    },
  ]

  const pastCourses = [
    {
      id: 3,
      code: "CS 201",
      title: "Data Structures and Algorithms",
      semester: "Fall 2024",
      description: "A comprehensive course on fundamental data structures and algorithms.",
    },
    {
      id: 4,
      code: "CS 301",
      title: "Research Methods",
      semester: "Fall 2024",
      description: "A course on research methodologies and academic writing in the field.",
    },
    {
      id: 5,
      code: "CS 102",
      title: "Programming Fundamentals",
      semester: "Spring 2024",
      description: "A course covering programming concepts and practices.",
    },
  ]

  type Course = {
    id: number
    code: string
    title: string
    semester: string
    description: string
  }

  const renderCourseList = (courses: Course[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course: Course) => (
        <Card key={course.id}>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle>
                  {course.code}: {course.title}
                </CardTitle>
                <CardDescription className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 mr-1" /> {course.semester}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{course.description}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/teaching/${course.id}`} className="text-primary flex items-center hover:underline">
              View course details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Teaching</h1>

      <section className="mb-12">
        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          Professor Name teaches various courses at undergraduate and graduate levels, focusing on [specific areas].
        </p>

        <Tabs defaultValue="current">
          <TabsList className="mb-6">
            <TabsTrigger value="current">Current Courses</TabsTrigger>
            <TabsTrigger value="past">Past Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="current">{renderCourseList(currentCourses)}</TabsContent>

          <TabsContent value="past">{renderCourseList(pastCourses)}</TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Teaching Philosophy</h2>
        <div className="prose max-w-3xl">
          <p>
            A statement about the professor's teaching philosophy, approach to education, and goals for student
            learning. This section can discuss pedagogical methods, classroom environment, and assessment strategies.
          </p>
          <p>
            Information about how the professor integrates research into teaching and provides opportunities for
            students to engage in research projects.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Student Advising</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" /> Graduate Advising
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Information about graduate student advising, including PhD and Master's students. This can include the
                professor's approach to mentorship and available opportunities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" /> Undergraduate Research
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Information about undergraduate research opportunities, including how students can get involved in the
                professor's research projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
