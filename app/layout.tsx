import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "星启电脑 | 电脑销售与装机服务",
  description: "精选品牌笔记本、电竞台式机、设计工作站和办公套装的一站式电脑销售店。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
