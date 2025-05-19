/**
 * 物料资源管理
 */
export interface IMaterialManager {
  /**
   * 注册物料
   */
  registerMaterial(definition: MaterialDefinition): void

  /**
   * 获取指定类型的物料定义
   */
  getMaterial(type: string): MaterialDefinition | undefined

  /**
   * 获取所有注册的物料类型
   */
  getMaterialTypes(): string[]
}

// 物料定义
export interface MaterialDefinition {
  type: string
  metadata: {
    displayName: string
    category: string
  }
  runtime: React.ComponentType | string // 组件或 WASM 模块
}
