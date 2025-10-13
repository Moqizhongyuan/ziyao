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
      {/* Agent 文字 */}
      <span className="text-2xl font-bold text-gray-900">Agent</span>

      {/* 红色圆圈数字 3 */}
      <div className="relative flex items-center justify-center w-9 h-9 bg-[#E94B35] rounded-full">
        <span className="text-white text-xl font-bold">3</span>
      </div>

      {/* Group 文字 */}
      <span className="text-2xl font-bold text-gray-900">Group</span>
    </Link>
  );
}
