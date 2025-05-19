import { _RenderingContext } from "./designer"
/**
 * 画布控制器
 */
export interface ICanvasController {
  /**
   * 重设画布尺寸
   */
  resize(width: number, height: number): void

  /**
   * 设置缩放比例
   */
  setZoom(scale: number): void

  /**
   * 请求重新渲染
   */
  requestRender(): void

  /**
   * 获取当前渲染上下文
   */
  getContext(): _RenderingContext

  /**
   * 开始拖拽组件
   */
  startDrag(componentId: string): void

  /**
   * 结束拖拽
   */
  endDrag(): void
}
