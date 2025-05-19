import { ComponentSchema } from "./designer"

/**
 * 引擎状态管理
 */
export interface IEngineState {
  // 状态访问
  get components(): ComponentSchema[]
  get selectedId(): string | null

  // 状态监听
  onComponentChange(listener: StateListener): () => void
  onSelectionChange(listener: SelectionListener): () => void
}

/**
 * 组件状态变更监听器
 */
export type StateListener = (component: ComponentSchema) => void

/**
 * 组件选中状态变更监听器
 */
export type SelectionListener = (id: string | null) => void
