import Image from 'next/image'

/**
 * Supports links in markdown format
 */
export default function HeadfulCard({
  profileImagePath,
  bgImagePath,
  children
}: {
  profileImagePath: string
  bgImagePath: string
  children: React.ReactNode
}) {
  return (
    <div className="relative sm:pt-12 sm:px-16 sm:max-w-2xl sm:mx-auto">
      <div className="relative">
        <Image
          src={bgImagePath}
          alt="Header background image"
          className="w-full h-auto z-0 sm:rounded-t-[64px]"
          width={512}
          height={256}
        />
        <div className="absolute inset-0 bg-black opacity-5 sm:rounded-t-[64px]"></div>
      </div>
      <div className="transform -translate-y-24">
        <div className="absolute z-20 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <Image
            src={profileImagePath}
            alt="Profile Picture"
            width={256}
            height={256}
            className="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-full border-8 border-white"
          />
        </div>
        <div className="w-full h-auto bg-white text-black z-10 text-center rounded-[32px] xs:rounded-[48px] sm:rounded-[64px] p-8 pt-20 xs:pt-24">
          {children}
        </div>
      </div>
    </div>
  )
}
