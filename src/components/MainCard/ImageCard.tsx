"use client";

import Image from "next/image";
import Link from "next/link";

export interface ImageCardProps {
  /** 图片路径 */
  image: string;
  /** 图片宽度 */
  imageWidth?: number;
  /** 图片高度 */
  imageHeight?: number;
  /** 标题 */
  title: string;
  /** 描述文字 */
  description: string;
  /** 标签（如 "Work"） */
  tag?: string;
  /** 链接地址 */
  href?: string;
}

/**
 * ImageCard - 图文卡片组件
 *
 * 用于展示案例、作品等内容
 * 包含图片、标签、标题、描述和链接
 */
export default function ImageCard({
  image,
  imageWidth = 896,
  imageHeight = 480,
  title,
  description,
  tag = "Work",
  href = "#",
}: ImageCardProps) {
  const content = (
    <div className="group cursor-pointer">
      {/* 图片 */}
      <div className="relative w-full overflow-hidden rounded-3xl mb-6">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 标签 */}
      {tag && <p className="text-sm font-semibold text-gray-900 mb-3">{tag}</p>}

      {/* 标题 + 箭头 */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-start gap-2">
        <span className="flex-1 line-clamp-2 font-bold">{title}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </h3>

      {/* 描述文字 */}
      <p className="text-base text-gray-600 leading-relaxed mb-4">
        {description}
      </p>

      {/* Learn more 链接 */}
      <p className="text-base text-gray-600 underline">Learn more.</p>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
