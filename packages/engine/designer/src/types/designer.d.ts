/**
 * 设计器管理模块
 */
export interface IDesignerManager {
  /**
   * 添加新组件
   */
  addComponent(schema: Omit<ComponentSchema, "id">): string

  /**
   * 移除指定 ID 的组件
   */
  removeComponent(id: string): void

  /**
   * 获取指定 ID 的组件
   */
  getComponent(id: string): ComponentSchema | undefined

  /**
   * 移动组件位置
   */
  moveComponent(id: string, position: Vec2): void

  /**
   * 设置父组件
   */
  setParent(childId: string, parentId: string | null): void

  /**
   * 选择组件
   */
  selectComponent(id: string | null): void
}

// 组件描述
export interface ComponentSchema {
  id: string
  type: string
  position: Vec2
  parentId: string | null
  props: Record<string, any>
}

// 基础类型
export type Vec2 = { x: number; y: number }
export type _RenderingContext =
  | WebGL2RenderingContext
  | CanvasRenderingContext2D
