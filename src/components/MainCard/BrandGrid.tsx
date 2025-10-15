"use client";

import Image from "next/image";
import { useMemo } from "react";

interface Brand {
  /** 图片路径 */
  src: string;
  /** 图片替代文本 */
  alt: string;
  /** 图片原始宽度（用于计算比例） */
  width: number;
  /** 图片原始高度 */
  height: number;
}

/**
 * BrandGrid - 品牌 Logo 网格组件
 *
 * 每排显示 5 个品牌 Logo，根据图片原始宽度按比例分配空间
 */
export default function BrandGrid() {
  // 合并所有品牌数据
  const allBrands: Brand[] = useMemo(
    () => [
      { src: "/logo-nttdata.webp", alt: "NTT Data", width: 170, height: 60 },
      {
        src: "/logo-servicenow.webp",
        alt: "ServiceNow",
        width: 180,
        height: 60,
      },
      {
        src: "/logo-statefarm.webp",
        alt: "State Farm",
        width: 160,
        height: 60,
      },
      {
        src: "/logo-mcdonalds.webp",
        alt: "McDonald's",
        width: 180,
        height: 60,
      },
      { src: "/logo-adobe.webp", alt: "Adobe", width: 150, height: 60 },
      { src: "/logo-zscaler.webp", alt: "Zscaler", width: 170, height: 60 },
      {
        src: "/logo-Salesforce.webp",
        alt: "Salesforce",
        width: 190,
        height: 60,
      },
      { src: "/logo-linkedIn.webp", alt: "LinkedIn", width: 160, height: 60 },
      { src: "/logo-cisco.webp", alt: "Cisco", width: 140, height: 60 },
      { src: "/logo-tmobile.webp", alt: "T-Mobile", width: 150, height: 60 },
    ],
    []
  );

  return (
    <div className="grid tablet:grid-cols-5 grid-cols-2 gap-4 mt-12 place-items-center">
      {allBrands.map((brand) => (
        <Image
          key={brand.alt}
          src={brand.src}
          alt={brand.alt}
          width={brand.width}
          height={brand.height}
          className="w-full h-auto object-contain max-h-20"
        />
      ))}
    </div>
  );
}
