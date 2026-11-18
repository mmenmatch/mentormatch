'use client'
import katex from 'katex'
import 'katex/dist/katex.min.css' // required, or the math looks broken

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// "$$u_2 = 5$$ and text" → HTML with rendered math
const toHtml = (line: string) =>
  line
    .split(/(\$\$[\s\S]+?\$\$)/g) // split into text and $$math$$ pieces
    .map((part) =>
      part.startsWith('$$')
        ? katex.renderToString(part.slice(2, -2), { throwOnError: false })
        : escapeHtml(part),
    )
    .join('')

export const MathText = ({ text }: { text: string }) => (
  <div>
    {text
      .split('\n') // each line (a), (b), (c) on its own row
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line, i) => (
        <p
          key={i}
          className="text-[1rem] leading-[150%]"
          dangerouslySetInnerHTML={{ __html: toHtml(line) }}
        />
      ))}
  </div>
)
