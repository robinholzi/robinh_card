import Link from 'next/link'
import CtaButton from '@/components/CtaButton/CtaButton'
import CvElement from '@/components/CvElement/CvElement'
import HeadfulCard from '@/components/HeadfulCard/HeadfulCard'

export default function MainPage() {
  return (
    <div>
      <div className="relative text-center">
        <div className="stack">
          <HeadfulCard profileImagePath="/img/profile_picture_colored.jpg" bgImagePath="/img/background.jpeg">
            <h2 className="text-2xl xs:text-3xl font-semibold">Robin Holzinger</h2>
            <div className="my-4">
              <CvElement mdText="CS Student [@TUM](https://www.tum.de/en/) | top 2%: [best-in-tum](https://www.cit.tum.de/en/cit/studies/students/advising/informatics/tips-for-successful-studies/support-programs/)" />
              <CvElement mdText="SWE Intern [@QuantCo](https://quantco.com/) | 6 months" />
              <CvElement mdText="SWE Working Student [@FINN](https://www.finn.com/en-US) | 7 months" />
              <CvElement mdText="Abitur [@JGG](https://jgg-waldkirchen.de/) | top 0.5% within Bavaria" />
            </div>

            <div className="mt-8 mb-4">
              <h2 className="font-bold text-xl">Scholarships</h2>

              <CvElement mdText="[Max Weber Program](https://www.elitenetzwerk.bayern.de/en/home/funding-programs/max-weber-program)" />
              <CvElement mdText="[German Academic Scholarship Foundation](https://www.studienstiftung.de/en/)" />
              <CvElement mdText="[IT-Talents & Mathema GmbH](https://it-talents.de/partnerunternehmen/it-stipendien/robin-erhaelt-ein-it-stipendium/)" />
            </div>

            <div className="mt-8 mb-4">
              <CtaButton
                iconPath="/icon/linkedin.svg"
                alt="LinkedIn"
                bgColor="rgb(0, 127, 177)"
                href="https://www.linkedin.com/in/robin-holzinger/"
              />
              <CtaButton
                iconPath="/icon/github.svg"
                alt="GitHub"
                bgColor="rgb(36, 41, 46)"
                href="https://www.linkedin.com/in/robin-holzinger/"
              />
              <CtaButton
                iconPath="/icon/stackoverflow.svg"
                alt="StackOverflow"
                bgColor="rgb(237, 128, 61)"
                href="https://www.linkedin.com/in/robin-holzinger/"
              />
            </div>
          </HeadfulCard>
        </div>
      </div>
      <div className="relative w-full text-center pb-8 text-sm xs:text-base">
        <span className="inline-block justify-center">
          Copyright © {new Date().getFullYear()}{' '}
          <Link href="/" className="text-white">
            Robin Holzinger
          </Link>{' '}
          |{' '}
          <Link href="/" className="text-white">
            Imprint
          </Link>
        </span>
      </div>
    </div>
  )
}

// TODO: responsive
