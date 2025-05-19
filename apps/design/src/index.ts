import { name } from "@apaas/designer"
// // 动态加载 React 组件
// async function loadReactComponent() {
//   const { default: ReactComponent } = await import(
//     "react-app/dist/ReactComponent"
//   );

//   // 创建 React 组件挂载点
//   const container = document.getElementById("react-container");

//   // 使用 React 18 的 createRoot API
//   const root = ReactDOM.createRoot(container);
//   root.render(<ReactComponent />);
// }

// // 加载 React 和 ReactDOM
// await Promise.all([import("react"), import("react-dom/client")]);

// // 加载并渲染 React 组件
// loadReactComponent();

console.log("design index.ts init")
console.log("designer index.ts name: ", name)

export {}
