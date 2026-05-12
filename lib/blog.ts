import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type BlogFrontmatter = {
  title: string
  date: string
  excerpt: string
  author?: string
  tags?: string[]
}

export type BlogPost = BlogFrontmatter & {
  slug: string
  html: string
}

export type BlogSummary = BlogFrontmatter & {
  slug: string
}

function readMarkdown(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf8')
  return matter(raw)
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getAllPosts(): BlogSummary[] {
  const slugs = getAllSlugs()
  const posts = slugs.map((slug) => {
    const { data } = readMarkdown(slug)
    return { slug, ...(data as BlogFrontmatter) }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): BlogPost {
  const { data, content } = readMarkdown(slug)
  const html = marked.parse(content, { async: false }) as string
  return { slug, html, ...(data as BlogFrontmatter) }
}

export function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
