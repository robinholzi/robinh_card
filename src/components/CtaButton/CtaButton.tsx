export default function CtaButton({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} className="btn mx-2 border-none color-white bg-green-600">
      <span className="text-white">{text}</span>
    </a>
  )
}
