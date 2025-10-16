"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, Button, Drawer, ConfigProvider } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Image from "next/image";

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
  const [isTablet, setIsTablet] = useState(false);

  // 检测屏幕尺寸（tablet 断点 990px）
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 990px)");

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

  // 优化：使用 useCallback 避免重复创建函数
  const toggleDrawer = useCallback(() => {
    setDrawerVisible((prev) => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  // 构建 Menu 数据
  const menuItems: MenuProps["items"] = useMemo(
    () =>
      links.map((link) => ({
        key: link.href,
        label: (
          <Link
            href={link.href}
            style={{
              color: "#374151",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ),
        style: {
          paddingLeft: "20px",
          paddingRight: "20px",
        },
        href: link.href,
      })),
    [links]
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E43E30", // 👈 这里修改主色
        },
      }}
    >
      <nav
        style={{
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        role="navigation"
      >
        <div
          style={{
            paddingLeft: "12px",
            paddingRight: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70px",
          }}
        >
          {/* 左侧 Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity shrink-0"
            aria-label="Agent3 Group 首页"
          >
            <Image
              src="/A3G-logos.svg"
              width={204}
              height={44}
              alt="A3G-logos"
            />
          </Link>

          {/* 桌面端：中间导航菜单 + CTA 按钮 */}
          {isTablet && (
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Menu
                mode="horizontal"
                style={{
                  borderBottom: 0,
                  minWidth: "470px",
                  flex: 1,
                }}
                items={menuItems}
              />

              {/* 右侧：CTA 按钮（桌面端） */}
              <Button
                type="primary"
                shape="round"
                href={ctaHref}
                style={{
                  backgroundColor: "#E43E30",
                  height: "40px",
                  width: "112px",
                  fontWeight: 800,
                }}
              >
                {ctaText}
              </Button>
            </div>
          )}

          {/* 移动端：汉堡菜单按钮 */}
          {!isTablet && (
            <Button
              type="text"
              icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
              onClick={toggleDrawer}
              size="large"
              aria-label="主菜单"
            />
          )}
        </div>

        {/* 移动端 Drawer 菜单 */}
        <Drawer
          placement="bottom"
          onClose={closeDrawer}
          open={drawerVisible}
          mask={false}
          height="calc(100vh - 70px)"
          styles={{
            header: { display: "none" },
          }}
        >
          <Menu
            mode="vertical"
            items={menuItems}
            style={{ border: 0 }}
            onClick={closeDrawer}
          />
          <div
            style={{
              marginTop: "16px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Link href={ctaHref} onClick={closeDrawer}>
              <Button
                type="primary"
                block
                size="large"
                style={{
                  backgroundColor: "#E94B35",
                  borderRadius: "24px",
                  height: "48px",
                }}
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        </Drawer>
      </nav>
    </ConfigProvider>
  );
}
