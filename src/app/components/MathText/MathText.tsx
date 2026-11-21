'use client'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const MATH = /(\$\$[\s\S]+?\$\$)/g

// "$$u_2 = 5$$ and text" → HTML with rendered math
const toHtml = (line: string) =>
  line
    .split(MATH)
    .map((part) =>
      part.startsWith('$$')
        ? katex.renderToString(part.slice(2, -2), { throwOnError: false })
        : escapeHtml(part),
    )
    .join('')

// Run a replace only on the plain text, never inside $$math$$
const onText = (text: string, fn: (t: string) => string) =>
  text
    .split(MATH)
    .map((p) => (p.startsWith('$$') ? p : fn(p)))
    .join('')

// (a), (b), (ii) … each start a new line; "(b)(i)" stays together
const PART = /\s+(?=\((?:[a-h]|i{1,3}|iv|v|vi)\))/g

// Step separator inside a part: "…; …"  →  new step line
const STEP_MARK = '\u0000'

// Trailing marks like "[2]" or "[2 marks]"
const MARKS = /\s*\[(\d+)(?:\s*marks?)?\]\s*$/i

export const MathText = ({
  text,
  splitParts = false,
  splitSteps = false,
}: {
  text: string
  splitParts?: boolean
  splitSteps?: boolean
}) => {
  let source = text ?? ''
  if (splitParts) source = onText(source, (t) => t.replace(PART, '\n'))
  if (splitSteps) source = onText(source, (t) => t.replace(/;\s*/g, STEP_MARK))

  return (
    <div className="flex flex-col gap-6">
      {source
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
        .map((block, i) => {
          const steps = block
            .split(STEP_MARK)
            .map((s) => s.trim())
            .filter(Boolean)

          return (
            <div key={i} className="flex flex-col gap-2">
              {steps.map((line, j) => {
                const m = line.match(MARKS)
                const body = m ? line.slice(0, m.index) : line
                return (
                  <div key={j} className="flex justify-between items-start gap-6">
                    <p
                      className="text-[1rem] leading-[150%]"
                      dangerouslySetInnerHTML={{ __html: toHtml(body) }}
                    />
                    {m && (
                      <span className="shrink-0 text-[1rem] leading-[150%] font-semibold">
                        [{m[1]}]
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}
