import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并和优化 Tailwind CSS 类名
 *
 * 功能：
 * 1. 使用 clsx 处理条件类名
 * 2. 使用 twMerge 解决 Tailwind 类名冲突
 *
 * @example
 * ```tsx
 * // 基础用法
 * cn("px-2 py-1", "bg-blue-500")
 * // => "px-2 py-1 bg-blue-500"
 *
 * // 条件类名
 * cn("text-base", { "text-lg": isLarge, "font-bold": isBold })
 *
 * // 解决冲突（后面的会覆盖前面的）
 * cn("px-2 py-1", "px-4")
 * // => "py-1 px-4"
 *
 * // 数组形式
 * cn(["px-2", "py-1"], "bg-blue-500")
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
