/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react"
import Marquee from "react-fast-marquee"
import CardWrapper from "@/components/cards/card-wrapper"

const TextMarqueeCard = () => {
  return (
    <CardWrapper>
      <div className="flex h-full items-center px-3 py-3">
        <div className="relative w-full max-w-full h-5 overflow-hidden">
          <span className="flex gap-1 text-sm mt-px">
            <Marquee
              speed={30}
              style={{
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                margin: "auto"
              }}
            >
              PRESIDENT HACKTHEBOX SRMIST <img src="/star1.svg" alt="Star" className="h-4 w-4 mx-2" />
              PROJECT INTERN @ APOLLO TYRES <img src="/star1.svg" alt="Star" className="h-4 w-4 mx-2" />
              BUILT CTF PLATFORM <img src="/star1.svg" alt="Star" className="h-4 w-4 mx-2" />
              <b className="ml-1.5">AI-POWERED HEALTHCARE SOLUTIONS</b>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Fragment key={index}>
                    <img src="/star1.svg" alt="Star" className="h-4 w-4 mx-2" />
                    PRESIDENT HACKTHEBOX SRMIST <img src="/star1.svg" alt="Star" className="h-4 w-4 mx-2" />
                    PROJECT INTERN @ APOLLO TYRES <img src="/star1.svg" alt="Star" className="h-4 w-4 mx-2" />
                    BUILT CTF PLATFORM <img src="/star1.svg" alt="Star" className="h-4 w-4 mx-2" />
                    <b className="ml-1.5">AI-POWERED HEALTHCARE SOLUTIONS</b>
                  </Fragment>
                ))}
            </Marquee>
          </span>
        </div>
      </div>
    </CardWrapper>
  )
}

export default TextMarqueeCard
