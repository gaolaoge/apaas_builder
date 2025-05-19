import {
  IDesignerManager,
  ComponentSchema,
  Vec2,
  _RenderingContext,
} from "./designer"
import { ICanvasController } from "./canvas"
import { IDataSourceManager, DataSource } from "./datasource"
import { IMaterialManager, MaterialDefinition } from "./material"
import { IPluginSystem, IPlugin, IExtension } from "./plugin"
import { IEngineState, StateListener, SelectionListener } from "./state"
import { IUIDLService, UIDL, ConnectionDescriptor } from "./uidl"
/**
 * 引擎主接口
 */
export interface IEngine {
  // 核心模块访问
  readonly designer: IDesignerManager
  readonly material: IMaterialManager
  readonly canvas: ICanvasController
  readonly data: IDataSourceManager
  readonly plugin: IPluginSystem
  readonly state: IEngineState
  readonly uidl: IUIDLService

  /**
   * 导入 UIDL 数据到引擎
   */
  importUIDL(uidl: UIDL): Promise<void>

  /**
   * 导出当前引擎状态为 UIDL
   */
  exportUIDL(): UIDL

  /**
   * 初始化引擎
   */
  init(config: EngineConfig): void

  /**
   * 销毁引擎实例，释放资源
   */
  dispose(): void
}

export {
  IDesignerManager,
  ComponentSchema,
  Vec2,
  _RenderingContext,
  ICanvasController,
  IDataSourceManager,
  DataSource,
  IMaterialManager,
  MaterialDefinition,
  IPluginSystem,
  IPlugin,
  IExtension,
  IEngineState,
  StateListener,
  SelectionListener,
  IUIDLService,
  ConnectionDescriptor,
}

/**
 * 引擎初始化配置参数
 */
interface EngineConfig {
  initialUIDL?: UIDL
  debug?: boolean
  plugins?: IPlugin[]
}
