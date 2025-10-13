"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

/**
 * 导航链接项接口
 */
export interface NavLink {
  label: string;
  href: string;
}

/**
 * Navbar 组件的 Props
 */
export interface NavbarProps {
  /** 导航链接列表 */
  links?: NavLink[];
  /** CTA 按钮文本 */
  ctaText?: string;
  /** CTA 按钮链接 */
  ctaHref?: string;
}

/**
 * 默认导航链接
 */
const defaultLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
];

/**
 * Navbar - 顶部导航栏组件
 *
 * 仿照 Agent3 Group 网站设计
 * 包含左侧 Logo、中间导航菜单、右侧 CTA 按钮
 * 支持响应式移动端汉堡菜单
 */
export default function Navbar({
  links = defaultLinks,
  ctaText = "Contact us",
  ctaHref = "/contact",
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 左侧 Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* 桌面端：中间导航链接 */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 右侧：CTA 按钮（桌面端） */}
          <div className="hidden md:block">
            <Link
              href={ctaHref}
              className="inline-block px-6 py-3 bg-[#E94B35] text-white font-medium rounded-full hover:bg-[#d43d28] transition-colors"
            >
              {ctaText}
            </Link>
          </div>

          {/* 移动端：汉堡菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E94B35]"
              aria-expanded={isMobileMenuOpen}
              aria-label="主菜单"
            >
              {/* 汉堡图标 */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="block px-3 py-2 mt-4 text-center bg-[#E94B35] text-white font-medium rounded-full hover:bg-[#d43d28]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
