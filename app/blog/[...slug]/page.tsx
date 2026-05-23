import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return allBlogs.map((p) => ({
    slug: p.slug.split('/').map((name) => decodeURI(name)),
  }))
}

export default function Page() {
  notFound()
}
