import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PeoplePage() {
  const teamMembers = [
    {
      name: "Professor Name",
      role: "Principal Investigator",
      bio: "Brief biography of the professor, including research interests, education background, and achievements.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Researcher Name",
      role: "Postdoctoral Researcher",
      bio: "Brief biography of the researcher, including research focus and contributions to the lab.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "PhD Student Name",
      role: "PhD Candidate",
      bio: "Brief biography of the PhD student, including research topic and academic background.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Graduate Student Name",
      role: "Graduate Researcher",
      bio: "Brief biography of the graduate student, including research interests and current projects.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Principal Investigator</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Professor Name"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-2">Professor Name</h3>
            <p className="text-gray-600 mb-4">Principal Investigator</p>
            <div className="prose max-w-none">
              <p>
                Detailed biography of the professor, including research interests, education background, and significant
                achievements in the field. This section can include information about awards, grants, and other
                recognition received throughout their career.
              </p>
              <p>
                Information about their teaching philosophy, mentorship approach, and vision for the research lab. This
                helps visitors understand the professor's academic values and goals.
              </p>
              <h4 className="text-xl font-semibold mt-4 mb-2">Education</h4>
              <ul>
                <li>Ph.D. in [Field], [University], [Year]</li>
                <li>M.S. in [Field], [University], [Year]</li>
                <li>B.S. in [Field], [University], [Year]</li>
              </ul>
              <h4 className="text-xl font-semibold mt-4 mb-2">Research Interests</h4>
              <ul>
                <li>Research area 1</li>
                <li>Research area 2</li>
                <li>Research area 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Research Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.slice(1).map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
