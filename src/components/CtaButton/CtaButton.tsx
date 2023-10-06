import Image from 'next/image'

export default function CtaButton({
  iconPath,
  bgColor,
  alt,
  href
}: {
  iconPath: string
  bgColor: string
  alt: string
  href: string
}) {
  return (
    <a href={href} className="btn btn-circle mx-2 border-none" style={{ backgroundColor: bgColor }}>
      <Image width={128} height={128} src={iconPath} alt={alt} className="w-6 h-6" />
    </a>
  )
}
