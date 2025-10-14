"use client";

import React from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";

/**
 * AntdRegistry - Ant Design 样式注入组件
 *
 * 用于 Next.js App Router 环境下正确注入 antd 的 CSS-in-JS 样式
 * 解决服务端渲染（SSR）时的样式闪烁问题
 */
export default function AntdRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = React.useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      <style
        id="antd-css"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
