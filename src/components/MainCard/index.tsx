"use client";

import { throttle } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BrandGrid from "./BrandGrid";
import ImageCard, { ImageCardProps } from "./ImageCard";
import { Button } from "antd";

export default function MainCard() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [isTablet, setIsTablet] = useState(false);

  const totalScrollY = useMemo(() => (isTablet ? 250 : 50), [isTablet]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 860px)");

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsTablet(e.matches);
    };

    // 初始化
    handleMediaChange(mediaQuery);

    // 监听变化
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const imageCards: ImageCardProps[] = useMemo(
    () => [
      {
        image: "/Container-896x480.avif",
        title: "How we doubled McDonald’s franchisee pipeline",
        description:
          "McDonald’s needed professionals and entrepreneurs-in-waiting from all types of backgrounds. See how we built an audience-first, demand generation strategy to find the right candidates and double the application pipeline! ",
      },
      {
        image: "/splunk-2-896x480.avif",
        title: "$58m of pipeline influenced with a 116x ROI for Splunk",
        description:
          "See how Agent3 built a scalable, responsive ABM program using deep, account-by-account personalization, influencing over $58m of pipeline generated: a 116x ROI for Splunk.",
      },
      {
        image: "/adobe-5-896x480.png",
        title:
          "Virtual Book Club drove executive engagement and pipeline when in-person events were not possible",
        description:
          "Building a “Virtual Book Club” for Adobe. It would combine elements of Adobe’s value proposition – customer experience – and be delivered via a mechanism that research proved was desirable to the target audience: reading.",
      },
      {
        image: "/LI-Header-1-896x480.avif",
        title: "Data-driven creativity for LinkedIn. Game on!",
        description:
          "LinkedIn needed to change Anonymous Co’s perception that it is purely a B2B platform, and establish its credibility as a place for gamers. LinkedIn needed help making an impact and changing perception to land the pilot deal.",
      },
      {
        image: "/expereo-banner-896x480.avif",
        title: "Smashing Expereo’s demand targets by 125%",
        description:
          "Expereo recognized it needed a step change in its demand model to build out an always-on, global demand generation program, targeting accounts with the highest propensity to buy. It engaged Agent3 Demand to help build this vision, with journey-driven campaigns.",
      },
      {
        image: "/Image-7-896x480.avif",
        title: "Intent-driven demand generation program for Salesforce",
        description:
          "Salesforce is a market mover and a driving force in today’s thriving tech economy. Experiencing unprecedented demand for the world’s #1 CRM solution, it did not have enough resources to serve all its customers and turned to Agent3 to help build and launch a new partner program to recruit tech providers, consultants, developers — even students — to join the Salesforce ecosystem. ",
      },
    ],
    []
  );
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > totalScrollY) {
          setIsFullScreen(true);
        } else {
          setIsFullScreen(false);
        }
      }, 200),
    [totalScrollY]
  );
  useEffect(() => {
    if (window.scrollY > totalScrollY) {
      setIsFullScreen(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, totalScrollY]);
  return (
    <article
      className={cn(
        "tablet:origin-[50%_20%] origin-[50%_10%] rounded-t-4xl tablet:px-32 px-12 pt-52 transition-transform bg-white w-full scale-75 ease-in-out duration-1000",
        {
          "scale-100": isFullScreen,
        }
      )}
    >
      <h1 className="font-semibold mb-2">The Agent3 Group</h1>
      <p className="tablet:text-[56px] text-3xl font-semibold">
        We are agents of change. A trinity of transformation: data, technology
        and creative smarts united to create marketing that becomes the most
        valuable growth driver for our clients.
      </p>
      <p className="tablet:text-[56px] text-3xl font-semibold mt-[50px]">
        Our capabilities span the entire customer life cycle, delivering
        outcomes that are measurable and predictable. And it’s all possible
        faster than ever before.
      </p>
      <h1 className="font-semibold mt-52 mb-2">What we do</h1>
      <a href="/account-based-growth" target="_blank" rel="noopener noreferrer">
        <Image
          width={896}
          height={430}
          alt="what we do"
          className="w-full"
          src="/account-based-growth.webp"
        />
      </a>
      <div className="flex mt-9 gap-9 flex-col tablet:flex-row">
        <a href="/multi-channel-demand-generation" className="flex-1">
          <Image
            width={533}
            height={580}
            alt="what we do"
            className="w-full"
            src="/multi-channel-demand-generation.webp"
          />
        </a>
        <a className="flex-1" href="/customer-journey-and-creative-experiences">
          <Image
            width={533}
            height={580}
            alt="what we do"
            className="w-full"
            src="/customer-journey-and-experiences.webp"
          />
        </a>
      </div>
      <h1 className="mt-52 text-center font-semibold text-4xl">
        Some of the incredible brands we&apos;ve worked with
      </h1>
      <BrandGrid />
      <h1 className="mt-52 text-center font-semibold text-4xl">
        See how we&apos;ve helped global brands meet their goals:
      </h1>
      <div className="grid tablet:grid-cols-3 grid-cols-1 gap-12 mt-16">
        {imageCards.map((imageCard) => (
          <ImageCard {...imageCard} key={imageCard.image} />
        ))}
      </div>

      <div className="mt-52 bg-center bg-cover bg-[url('/homepage-cta.webp')] -mx-12 tablet:-mx-32 h-[548px] flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-extrabold text-white text-center whitespace-pre-line">
          {`If you're interested in hearing more about
            the Agent3 Group, get in contact — we'd
            love to hear from you.`}
        </h1>
        <Button
          type="primary"
          shape="round"
          style={{
            backgroundColor: "#E43E30",
            height: "65px",
            width: "171px",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Contact us
        </Button>
      </div>
    </article>
  );
}
