import Image from "next/image";

/**
 * ImageCard 组件的 Props 接口
 */
export interface ImageCardProps {
  /** 图片源地址 */
  src: string;
  /** 图片的替代文本（用于无障碍访问和SEO） */
  alt: string;
  /** 图片下方显示的文字内容 */
  caption: string;
  /** 图片宽度（默认：400） */
  width?: number;
  /** 图片高度（默认：300） */
  height?: number;
  /** 自定义容器样式类名 */
  className?: string;
  /** 图片样式类名 */
  imageClassName?: string;
  /** 文字样式类名 */
  captionClassName?: string;
}

/**
 * ImageCard - 语义化的图文卡片组件
 *
 * 使用 HTML5 语义化标签 <figure> 和 <figcaption>
 * 结合 Next.js Image 组件实现性能优化
 *
 * @example
 * ```tsx
 * <ImageCard
 *   src="/images/example.jpg"
 *   alt="示例图片描述"
 *   caption="这是图片说明文字"
 *   width={500}
 *   height={400}
 * />
 * ```
 */
export default function ImageCard({
  src,
  alt,
  caption,
  width = 400,
  height = 300,
  className = "",
  imageClassName = "",
  captionClassName = "",
}: ImageCardProps) {
  return (
    <figure
      className={`flex flex-col items-center gap-4 ${className}`}
      role="figure"
      aria-label={alt}
    >
      {/* 图片容器 */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover w-full h-auto ${imageClassName}`}
          priority={false}
        />
      </div>

      {/* 文字说明 */}
      <figcaption
        className={`text-center text-gray-700 dark:text-gray-300 text-base ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
