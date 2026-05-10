type Item = { label: string; href: string }

type Props = {
  items: Item[]
}

export default function PageNav({ items }: Props) {
  return (
    <nav className="bg-white border-y border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-5">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <span className="font-bold text-[#1C1C1C] text-sm md:text-base shrink-0">
            On this page:
          </span>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm md:text-base text-[#1C1C1C] hover:text-[#772432] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
