import Image from "next/image";
import Link from "next/link";

/**
 * Logo 组件 - Agent3 Group 标识
 *
 * 设计：左侧 "Agent"，中间红色圆圈数字 "3"，右侧 "Group"
 */
export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 hover:opacity-80 transition-opacity"
      aria-label="Agent3 Group 首页"
    >
      <Image src="/A3G-logos.svg" width={204} height={44} alt="A3G-logos" />
    </Link>
  );
}
