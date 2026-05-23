import { allPages } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
})

export default function Page() {
  const content = allPages.find(
    (p) => p.slug === 'privacy'
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold">
          {content?.title}
        </h1>
      </div>

      <div className="py-8">
        <MDXLayoutRenderer code={content.body.code} />
      </div>
    </div>
  )
}
