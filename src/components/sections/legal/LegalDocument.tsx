type Block = {
  heading: string
  /** A plain string renders as a paragraph; a string[] renders as a bulleted list. */
  content: Array<string | string[]>
}

type Props = {
  updated: string
  intro: string
  blocks: Block[]
}

export default function LegalDocument({ updated, intro, blocks }: Props) {
  return (
    <section className="relative bg-travertine pb-28 md:pb-36">
      <div className="mx-auto max-w-[860px] px-6 md:px-10">
        <p className="font-mono text-[12px] tracking-[0.24em] uppercase text-concrete/70 mb-10">
          Last updated — {updated}
        </p>

        <p className="font-body text-base md:text-lg text-concrete leading-relaxed text-pretty mb-16 max-w-[68ch]">
          {intro}
        </p>

        <div className="flex flex-col gap-12">
          {blocks.map((block) => (
            <div key={block.heading}>
              <h2 className="font-display text-2xl md:text-3xl font-light text-pivot-black mb-5">
                {block.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {block.content.map((item, i) =>
                  Array.isArray(item) ? (
                    <ul key={i} className="flex flex-col gap-2 pl-1">
                      {item.map((li) => (
                        <li
                          key={li}
                          className="font-body text-base text-concrete leading-relaxed text-pretty flex gap-3"
                        >
                          <span className="mt-2.5 h-px w-4 shrink-0 bg-concrete/50" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={i}
                      className="font-body text-base text-concrete leading-relaxed text-pretty max-w-[68ch]"
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
