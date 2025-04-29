import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PublicationsPage() {
  const publications = [
    {
      id: 1,
      title: "Publication Title 1",
      authors: "Author 1, Author 2, Professor Name",
      journal: "Journal Name",
      year: 2025,
      doi: "10.1234/example.123456",
      type: "journal",
    },
    {
      id: 2,
      title: "Publication Title 2",
      authors: "Author 3, Professor Name, Author 4",
      journal: "Conference Name",
      year: 2024,
      doi: "10.1234/example.123457",
      type: "conference",
    },
    {
      id: 3,
      title: "Publication Title 3",
      authors: "Professor Name, Author 5",
      journal: "Journal Name",
      year: 2024,
      doi: "10.1234/example.123458",
      type: "journal",
    },
    {
      id: 4,
      title: "Publication Title 4",
      authors: "Author 6, Author 7, Professor Name",
      journal: "Book Title",
      year: 2023,
      doi: "10.1234/example.123459",
      type: "book",
    },
    {
      id: 5,
      title: "Publication Title 5",
      authors: "Author 8, Professor Name",
      journal: "Journal Name",
      year: 2023,
      doi: "10.1234/example.123460",
      type: "journal",
    },
  ]

  const journalPublications = publications.filter((pub) => pub.type === "journal")
  const conferencePublications = publications.filter((pub) => pub.type === "conference")
  const bookPublications = publications.filter((pub) => pub.type === "book")

  const renderPublicationList = (pubList) => (
    <div className="space-y-6">
      {pubList.map((pub) => (
        <div key={pub.id} className="p-4 border rounded-lg hover:bg-gray-50">
          <h3 className="font-semibold text-lg">{pub.title}</h3>
          <p className="text-gray-600 mb-2">{pub.authors}</p>
          <p className="text-gray-600 text-sm mb-2">
            {pub.journal}, {pub.year}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link href={`/publications/${pub.id}`} className="text-primary hover:underline">
              Abstract
            </Link>
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary flex items-center hover:underline"
            >
              DOI <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>

      <section className="mb-12">
        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          Our research has been published in various prestigious journals and conference proceedings.
        </p>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Publications</TabsTrigger>
            <TabsTrigger value="journal">Journal Articles</TabsTrigger>
            <TabsTrigger value="conference">Conference Papers</TabsTrigger>
            <TabsTrigger value="book">Book Chapters</TabsTrigger>
          </TabsList>

          <TabsContent value="all">{renderPublicationList(publications)}</TabsContent>

          <TabsContent value="journal">{renderPublicationList(journalPublications)}</TabsContent>

          <TabsContent value="conference">{renderPublicationList(conferencePublications)}</TabsContent>

          <TabsContent value="book">{renderPublicationList(bookPublications)}</TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
