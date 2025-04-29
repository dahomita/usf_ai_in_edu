import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Professor Research Lab</h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to our research laboratory. We focus on cutting-edge research in [field of study], developing
            innovative solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects">View Research Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/publications">Browse Publications</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Research Project {i}</CardTitle>
                <CardDescription>Innovative research in [specific area]</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Brief description of the research project, its goals, and potential impact on the field.
                </p>
                <Link href={`/projects/project-${i}`} className="text-primary flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Recent Publications</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border rounded-lg hover:bg-gray-50">
              <h3 className="font-semibold text-lg">Publication Title {i}</h3>
              <p className="text-gray-600 text-sm mb-2">Authors, Journal Name, Year</p>
              <p className="mb-2">Brief abstract or description of the publication.</p>
              <Link href={`/publications/pub-${i}`} className="text-primary flex items-center hover:underline">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link href="/publications">View all publications</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Lab News</h2>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="border-l-4 border-primary pl-4">
              <p className="text-sm text-gray-500">April {10 + i}, 2025</p>
              <h3 className="font-semibold text-lg">News Title {i}</h3>
              <p>Brief description of the news item, such as a new grant, publication, or award.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
