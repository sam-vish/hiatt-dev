'use client'

type Props = {
  eyebrow: string
  body: string
  emphasis?: string
  align?: 'left' | 'center'
}

export default function StatementBlock({ eyebrow, body, emphasis, align = 'left' }: Props) {
  return (
    <section className={`relative bg-travertine py-32 md:py-48 ${align === 'center' ? 'text-center' : ''}`}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className={`flex flex-col gap-10 ${align === 'center' ? 'items-center' : ''}`}>
          <div className="font-mono text-[12px] tracking-[0.32em] uppercase text-golden-amber">
            — {eyebrow}
          </div>
          <p className="font-display font-light text-pivot-black text-[7vw] md:text-[3.6vw] leading-[1.1] tracking-tight max-w-[24ch] text-balance">
            {body}
          </p>
          {emphasis && (
            <div className="font-display italic text-2xl md:text-3xl text-golden-amber">
              — {emphasis}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
