import Link from 'next/link'

const linkColor = '#ffac40'

function extractLinks(input: string): (string | [string, string])[] {
  const regex = /\[(.*?)\]\((.*?)\)/g
  const matches = [...input.matchAll(regex)]

  const result: (string | [string, string])[] = []
  let lastIndex: number | undefined = 0

  for (const match of matches) {
    const [fullMatch, linkText, linkUrl] = match
    const precedingText = input.slice(lastIndex, match.index)

    if (precedingText) {
      result.push(precedingText.trim())
    }
    result.push([linkText.trim(), linkUrl])

    lastIndex = (match.index ?? 0) + fullMatch.length
  }

  const remainingText = input.slice(lastIndex)
  if (remainingText) {
    result.push(remainingText.trim())
  }

  return result
}

/**
 * Supports links in markdown format
 */
export default function CvElement({ mdText }: { mdText: string }) {
  const parts = []

  for (const part of extractLinks(mdText)) {
    if (parts.length > 0) {
      parts.push(<span>&nbsp;</span>)
    }
    if (typeof part === 'string') {
      parts.push(<span>{part}</span>)
    } else {
      const [linkText, linkUrl] = part
      parts.push(
        <Link href={linkUrl} style={{ color: linkColor }}>
          {linkText}
        </Link>
      )
    }
  }
  return <p className="mt-2 font-bold text-sm xs:text-base">{parts}</p>
}
