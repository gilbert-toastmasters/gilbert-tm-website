import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts, formatDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Gilbert Toastmasters',
  description:
    'Notes from Gilbert Toastmasters: speech reflections, meeting highlights, member spotlights, and practical notes on public speaking.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main>
      <Header />
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="mb-14 md:mb-20">
            <p className="text-sm font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432] mb-4">
              Blog
            </p>
            <h1 className="font-extrabold text-[#1C1C1C] text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
              Notes from the club.
            </h1>
            <p className="text-lg md:text-xl text-[#1C1C1C]/80 leading-relaxed max-w-2xl">
              Speech reflections, meeting highlights, member spotlights, and the occasional opinion on what makes public speaking actually work.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-[#1C1C1C]/70 text-lg">No posts yet. Check back soon.</p>
          ) : (
            <ul className="divide-y divide-black/10 border-t border-b border-black/10">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block py-8 md:py-10 group"
                  >
                    <div className="flex items-baseline gap-4 mb-3 text-sm">
                      <time className="font-[Montserrat] font-bold tracking-[0.14em] uppercase text-[#772432]">
                        {formatDate(post.date)}
                      </time>
                      {post.author && (
                        <span className="text-[#1C1C1C]/60">by {post.author}</span>
                      )}
                    </div>
                    <h2 className="font-extrabold text-[#1C1C1C] text-2xl md:text-3xl leading-tight tracking-tight mb-3 group-hover:text-[#772432] transition-colors">
                      {post.title}
                    </h2>
                    <div className="w-12 h-1 bg-[#F2DF74] mb-4" aria-hidden />
                    <p className="text-[#1C1C1C]/80 text-base md:text-lg leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-5">
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
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
