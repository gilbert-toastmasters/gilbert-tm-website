import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/site'
import { getAllPosts, getAllSlugs, getPost, formatDate } from '@/lib/blog'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPost(slug)
    const url = `${SITE_URL}/blog/${slug}/`
    const ogImage = `${SITE_URL}/images/og-image.webp`
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title: post.title,
        description: post.excerpt,
        siteName: 'Gilbert Toastmasters',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
        tags: post.tags,
        images: [{ url: ogImage, width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [ogImage],
      },
    }
  } catch {
    return { title: 'Post not found' }
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  const url = `${SITE_URL}/blog/${slug}/`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author
      ? { '@type': 'Person', name: post.author }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Gilbert Toastmasters',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/Toastmasters-International-logo-color-300.webp`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags?.join(', '),
  }

  const related = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <article className="bg-white">
        <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-10 md:mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] hover:text-[#1C1C1C] transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              All posts
            </Link>
            <div className="flex items-baseline gap-4 mb-4 text-sm">
              <time
                dateTime={post.date}
                className="font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432]"
              >
                {formatDate(post.date)}
              </time>
              {post.author && (
                <span className="text-[#1C1C1C]/60">by {post.author}</span>
              )}
            </div>
            <h1 className="font-extrabold text-[#1C1C1C] text-4xl md:text-5xl leading-[1.05] tracking-tight mb-5">
              {post.title}
            </h1>
            <div className="w-12 h-1 bg-[#F2DF74]" aria-hidden />
          </div>

          <div
            className="blog-prose text-[#1C1C1C]/90 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-black/10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-xs font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#1C1C1C]/60 border border-black/15 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-[#F5F5F5] border-t border-black/10 py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3">
              More from the blog
            </p>
            <h2 className="font-extrabold text-[#1C1C1C] text-3xl md:text-4xl leading-tight tracking-tight mb-10">
              Keep reading.
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block bg-white border border-black/10 rounded-md p-6 h-full hover:border-[#772432] transition-colors"
                  >
                    <time
                      dateTime={p.date}
                      className="block text-xs font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-3"
                    >
                      {formatDate(p.date)}
                    </time>
                    <h3 className="font-extrabold text-[#1C1C1C] text-lg leading-tight tracking-tight mb-3 group-hover:text-[#772432] transition-colors">
                      {p.title}
                    </h3>
                    <div className="w-10 h-1 bg-[#F2DF74] mb-3" aria-hidden />
                    <p className="text-[#1C1C1C]/75 text-sm leading-relaxed">
                      {p.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
