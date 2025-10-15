import Link from "next/link";
import { Button } from "antd";
import Image from "next/image";

/**
 * Footer - 页脚组件
 *
 * 包含 Logo、导航链接、品牌链接、法律信息和版权声明
 */
export default function Footer() {
  return (
    <footer className="bg-[#0c2a31] text-white py-16 px-12 tablet:px-32">
      {/* 上半部分：Logo + 链接 + 按钮 */}
      <div className="flex flex-col tablet:flex-row gap-12 tablet:gap-24 mb-12">
        {/* Logo */}
        <Image
          src="/A3G-logos-light.svg"
          className="w-[203px] h-[44px]"
          width={203}
          height={44}
          alt="A3G-logos"
        />

        {/* 链接区域 */}
        <div className="flex flex-1 flex-wrap gap-12 tablet:gap-16 laptop:gap-24">
          {/* 第一列 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Agent3 Group</h3>
            <Link
              href="/work"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Careers
            </Link>
          </div>

          {/* 第二列 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Brands</h3>
            <Link
              href="/agent3"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Agent3
            </Link>
            <Link
              href="/this-machine"
              className="text-white hover:text-gray-300 transition-colors"
            >
              This Machine
            </Link>
          </div>

          {/* 第三列：Contact us 按钮 */}
          <div className="flex-shrink-0">
            <Button
              type="primary"
              shape="round"
              href="/contact"
              style={{
                backgroundColor: "#E43E30",
                height: "56px",
                width: "160px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>

      {/* 分隔线 */}
      <div className="border-t border-gray-600 mb-8" />

      {/* 底部：版权 + 法律链接 */}
      <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center gap-6">
        {/* 版权声明 */}
        <p className="text-gray-300 text-sm">
          © 2025, Agent3 & Agent3 Group. All rights reserved.
        </p>

        {/* 法律链接 */}
        <div className="flex flex-wrap gap-6 text-sm">
          <Link
            href="/privacy"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/cookies"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Cookies
          </Link>
          <Link
            href="/ccpa"
            className="text-gray-300 hover:text-white transition-colors"
          >
            CCPA
          </Link>
          <Link
            href="/terms-usa"
            className="text-gray-300 hover:text-white transition-colors"
          >
            T&Cs USA
          </Link>
          <Link
            href="/terms-uk"
            className="text-gray-300 hover:text-white transition-colors"
          >
            T&Cs UK
          </Link>
          <Link
            href="/terms-asia-pacific"
            className="text-gray-300 hover:text-white transition-colors"
          >
            T&Cs Asia Pacific
          </Link>
        </div>
      </div>
    </footer>
  );
}
