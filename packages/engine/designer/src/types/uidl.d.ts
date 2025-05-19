import { ComponentSchema } from "./designer"

export interface IUIDLService {
  // 核心能力
  parse(uidl: UIDL): {
    components: ComponentInstance[]
    dataSources: DataSourceConfig[]
    validation: {
      isValid: boolean
      errors: ValidationError[]
    }
  }

  serialize(state: {
    components: ComponentInstance[]
    dataSources: DataSourceConfig[]
  }): UIDL

  // 高级功能
  migrate(uidl: UIDL, targetVersion: string): UIDL
  diff(oldUIDL: UIDL, newUIDL: UIDL): ChangeSet[]
}

/**
 * UIDL (Universal Interface Description Language)
 * 描述 UI 的通用结构化格式，支持跨平台导入导出
 */
export type UIDL = {
  version: string
  components: ComponentSchema[]
  connections?: ConnectionDescriptor[]
}

/**
 * 组件之间的连接关系描述
 */
export interface ConnectionDescriptor {
  from: string
  to: string
  type: "data" | "event" | "parent-child"
}

export interface ValidationError {}

/**
 * 数据源配置信息
 */
export interface DataSourceConfig {
  /**
   * 数据源 ID
   */
  id: string

  /**
   * 数据源类型（如 API、Static、Database 等）
   */
  type: string

  /**
   * 配置参数（不同数据源类型不同）
   */
  config: Record<string, any>

  /**
   * 是否自动加载
   */
  autoLoad?: boolean
}

/**
 * UIDL 差异描述
 */
export interface ChangeSet {
  /**
   * 变更类型
   */
  type: "add" | "remove" | "update" | "move"

  /**
   * 变更目标路径（JSON Path 格式）
   */
  path: string

  /**
   * 旧值（适用于 update）
   */
  oldValue?: any

  /**
   * 新值
   */
  newValue?: any
}

/**
 * 组件实例运行时描述
 */
export interface ComponentInstance {
  /**
   * 实例唯一标识符
   */
  id: string

  /**
   * 绑定的组件类型
   */
  type: string

  /**
   * 组件属性映射（绑定数据源、事件等）
   */
  props: Record<string, any>

  /**
   * 子组件列表
   */
  children?: ComponentInstance[]
}
