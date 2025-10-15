"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="mt-[70px] tablet:h-[535px] h-52 relative">
      {/* 加载完成前显示标题 */}

      <h1
        className={cn(
          "opacity-100 tablet:text-[106px] text-4xl duration-700 transition-opacity text-white font-extrabold tablet:w-[755px] w-64 absolute top-1/2 left-16 -translate-y-1/2",
          { "opacity-0": isLoaded }
        )}
      >
        We are agents of change.
      </h1>

      {/* iframe - 加载完成后才显示 */}
      <iframe
        src="https://player.vimeo.com/video/860197114?h=ec97a3232a&title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
        className={cn(
          "w-full pointer-events-none h-[56vw] transition-opacity duration-700 opacity-0",
          {
            "opacity-100": isLoaded,
          }
        )}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        onLoad={() => {
          console.log("iframe 加载完成！");
          setIsLoaded(true);
        }}
        onError={(e) => {
          console.error("iframe 加载失败:", e);
        }}
      />
    </div>
  );
}
