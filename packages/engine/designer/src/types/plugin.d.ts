import { IEngine } from "./index"
/**
 * 插件系统接口
 */
export interface IPluginSystem {
  /**
   * 注册插件
   */
  register(plugin: IPlugin): void

  /**
   * 激活插件
   */
  activate(name: string): void

  /**
   * 获取扩展点
   */
  getExtensionPoint(pointName: string): IExtension[]
}

/**
 * 插件接口定义
 */
export interface IPlugin {
  name: string
  init(engine: IEngine): void
  destroy?(): void
}

/**
 * 扩展点接口定义
 */
export interface IExtension {
  pointName: string
  content: any
}
