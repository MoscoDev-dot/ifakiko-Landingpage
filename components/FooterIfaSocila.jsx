import React from 'react'
import NavImage from "./NavImage";
import Link from "next/link";
import Image from "next/image";

const FooterIfaSocila = () => {
  return (
    <div>
      <NavImage />
              <div className="mt-4">
                <p className="text-[16px] text-white leading-[24px] ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                  <br /> Quos perspiciatis quo eos fugit, ex earum minus velit
                  deserunt <br /> amet sit dolorum voluptatibus, asperiores
                  cupiditate soluta.
                </p>
              </div>
              <div className="flex mt-3 gap-3">
                <Link href={"#"}>
                  <Image
                    src="/facebook-fill.png"
                    alt=" "
                    width={100}
                    height={100}
                    className="h-auto w-auto"
                  />
                </Link>
                 <div className="h-5 border-1 border-white " />
                <Link href={"#"}>
                  <Image
                    src="/instagram-fill.png"
                    alt=" "
                    width={100}
                    height={100}
                    className="h-auto w-auto"
                  />
                </Link>
                <div className="h-5 border-1 border-white " />
                <Link href={"#"}>
                  <Image
                    src="/twitter-fill.png"
                    alt=" "
                    width={100}
                    height={100}
                    className="h-auto w-auto"
                  />
                </Link>
                <div className="h-5 border-1 border-white " />
                <Link href={"#"}>
                  <Image
                    src="/youtube-fill.png"
                    alt=" "
                    width={100}
                    height={100}
                    className="h-auto w-auto"
                  />
                </Link>
              </div>
    </div>
  )
}

export default FooterIfaSocila
