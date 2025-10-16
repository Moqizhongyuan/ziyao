import { Footer } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative">
      <Image
        src="/about-banner.webp"
        width={2160}
        height={941}
        alt="about-banner"
        className="w-full fixed left-0 top-[70px] -z-10"
      />
      <div className="bg-white mt-[calc(100vw/2160*800+70px)] rounded-t-4xl tablet:px-36 pt-40 px-3">
        <div className="flex gap-[100px] flex-col tablet:flex-row">
          <div className="tablet:w-[60%]">
            <h1 className="font-semibold mb-6">Agent3 Group Story</h1>
            <p className="font-semibold tablet:text-4xl text-3xl">
              Formed in 2013, the Agent3 Groupwas an early pioneer of
              Account-Based Marketing. ABM initiatives are our currency, and
              we’ve helped some of the largest B2B organizations activate,
              succeed and propel growth. Now we’re applying those principles and
              experience to the related fields of Demand Generation, Customer
              Marketing and Creative.
            </p>
          </div>
          <div className="tablet:w-[40%]">
            <Image
              src="/agent3-logo.svg"
              width={126}
              height={40}
              alt="agent3-logo"
              className="w-[126px] h-10 mb-3"
            />
            <p className="mb-6 font-light">
              Agent3 delivers B2B marketing to engage clients&apos; critical
              growth, revenue and key customer challenges. We deploy ABM,
              pipeline, and GTM transformation programs to empower technology
              enterprises to drive success, at speed and scale.
            </p>
            <Link
              href="/brands/agent3"
              className="hover:text-purple-900 font-semibold hover:font-bold"
            >
              Learn more ↗
            </Link>
            <Image
              src="/This-Machine.svg"
              alt="This-Machine"
              width={219}
              height={35}
              className="w-[219px] h-[35px] mt-6"
            />
            <p className="mb-6 font-light">
              This Machine helps brands show up where it counts, with
              high-impact creative to win customers at every journey touchpoint.
            </p>
            <Link
              href="/brands/this-machine"
              className="hover:text-purple-900 font-semibold hover:font-bold"
            >
              Learn more ↗
            </Link>
          </div>
        </div>

        <h1 className="font-semibold mb-6 mt-40">Agent3 Group Story</h1>
        <p className="font-semibold tablet:text-5xl text-3xl tablet:w-[60%] mb-11">
          Our values define our culture and drive what we do.
        </p>
        <div className="flex gap-[100px] tablet:items-center flex-col tablet:flex-row">
          <div className="bg-[url('/aboutbg.webp')] bg-cover bg-center tablet:w-[60%] h-[800px] relative rounded-2xl">
            <div className="p-9 absolute bottom-0">
              <h1 className="text-sm font-bold">Lead</h1>
              <h2 className="my-3 text-[26px] font-semibold">
                We lead with conviction.
              </h2>
              <p className="text-xl font-light">
                Marketing and technology never stand still. Neither do we. We’re
                entrepreneurial by nature, navigating new paths for our clients.
                For us, past successes are no resting place. We want to shape
                the future. Doing things for the first time and expanding the
                marketing universe – that’s our comfort zone.
              </p>
            </div>
          </div>
          <div className="tablet:w-[40%]">
            <h1 className="text-sm font-bold mb-6">Challenge</h1>
            <p className="text-xl font-light">
              We approach every project with a challenger mindset. We question
              it all, including our own briefs and insights. And we take it
              personally – a client&apos;s success is our success.
            </p>
            <h2 className="my-3 text-[26px] font-semibold mb-6">
              &apos;Good enough&apos; is never enough.
            </h2>
            <Image
              src="/Image-4.webp"
              alt="Image-4"
              width={479}
              height={433}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-[100px] flex-col tablet:flex-row mt-24">
          <div className="tablet:w-[40%]">
            <h1 className="text-sm font-bold">Collaborate</h1>
            <h2 className="my-3 text-[26px] font-semibold">
              We collaborate as one team.
            </h2>
            <p className="text-xl font-light">
              When you bring brilliant individuals together, great things can be
              accomplished. Add transparency, kindness and respect to the
              equation, and routine expectations are routinely exceeded.
            </p>
          </div>
          <Image
            src="/Image.webp"
            width={692}
            height={507}
            alt="Image"
            className="rounded-2xl w-full tablet:w-[60%]"
          />
        </div>

        <h1 className="font-semibold mb-4 mt-40">Find Us</h1>

        <h2 className="text-4xl font-semibold">Our offices</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.17168573882617!2d-0.1416515121996822!3d51.51785794490763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad583997fa3%3A0xd22c18ae8975022b!2s60%20Great%20Portland%20St%2C%20London%2B96281407329%20W1W%207RT%2C%20UK!5e0!3m2!1sen!2s!4v1760638588958!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
