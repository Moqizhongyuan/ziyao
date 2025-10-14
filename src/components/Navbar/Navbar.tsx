"use client";

import { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
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

// 静态样式对象 - 避免每次渲染创建新对象
const MENU_STYLE = { borderBottom: 0, minWidth: "470px" } as const;
const MENU_ITEM_STYLE = { paddingLeft: "20px", paddingRight: "20px" } as const;
const CTA_BUTTON_STYLE = {
  backgroundColor: "#E43E30",
  height: "40px",
  width: "112px",
  fontWeight: 800,
} as const;
const DRAWER_STYLES = {
  header: { display: "none" },
} as const;
const DRAWER_BUTTON_STYLE = {
  backgroundColor: "#E94B35",
  borderRadius: "24px",
  height: "48px",
} as const;

/**
 * Navbar - 顶部导航栏组件 (使用 Ant Design)
 *
 * 仿照 Agent3 Group 网站设计
 * 包含左侧 Logo、中间导航菜单、右侧 CTA 按钮
 * 支持响应式移动端 Drawer 菜单
 */
export default function Navbar({
  links = defaultLinks,
  ctaText = "Contact us",
  ctaHref = "/contact",
}: NavbarProps) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // 优化：使用 useCallback 避免重复创建函数
  const toggleDrawer = useCallback(() => {
    setDrawerVisible((prev) => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  // 构建 Menu 数据 - 使用静态样式对象
  const menuItems: MenuProps["items"] = useMemo(
    () =>
      links.map((link) => ({
        key: link.href,
        label: (
          <Link href={link.href} className="text-gray-700 hover:text-gray-900">
            {link.label}
          </Link>
        ),
        style: MENU_ITEM_STYLE,
        href: link.href,
      })),
    [links]
  );

  return (
    <nav className="bg-white" role="navigation">
      <div className="px-3 flex items-center justify-between h-[70px]">
        {/* 左侧 Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="hidden tablet:flex flex-1 items-center">
          {/* 桌面端：中间导航菜单 */}
          <Menu
            mode="horizontal"
            className="flex-1"
            style={MENU_STYLE}
            items={menuItems}
          />

          {/* 右侧：CTA 按钮（桌面端） */}
          <Button
            type="primary"
            shape="round"
            href={ctaHref}
            style={CTA_BUTTON_STYLE}
            className="text-sm font-extrabold"
          >
            {ctaText}
          </Button>
        </div>

        {/* 移动端：汉堡菜单按钮 */}
        <div className="tablet:hidden">
          <Button
            type="text"
            icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleDrawer}
            size="large"
            aria-label="主菜单"
          />
        </div>
      </div>

      {/* 移动端 Drawer 菜单 */}
      <Drawer
        placement="bottom"
        onClose={closeDrawer}
        open={drawerVisible}
        mask={false}
        height="calc(100vh - 70px)"
        styles={DRAWER_STYLES}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          className="border-0"
          onClick={closeDrawer}
        />
        <div className="mt-4 px-4">
          <Link href={ctaHref} onClick={closeDrawer}>
            <Button
              type="primary"
              block
              size="large"
              style={DRAWER_BUTTON_STYLE}
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      </Drawer>
    </nav>
  );
}
