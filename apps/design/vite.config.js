import { defineConfig } from "vite"
import path from "path"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    fs: {
      // 允许访问的根目录
      allow: ["./"], // 可以根据需要调整路径权限
    },
  },
  build: {
    outDir: "dist", // 构建输出目录
    html: {
      enabled: false,
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: { title: "design page" }, // 注入变量
      },
      entry: "/src/index.ts", // 指定入口
      template: "/public/index.html", // 自定义模板路径
    }),
  ],
})
