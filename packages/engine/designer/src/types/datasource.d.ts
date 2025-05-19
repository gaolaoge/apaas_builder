/**
 * 数据源管理接口
 * 负责管理组件绑定的数据源，包括数据获取、更新与生命周期控制
 */
export interface IDataSourceManager {
  /**
   * 注册一个数据源
   * @param dataSource - 要注册的数据源实例
   * @returns 取消注册的函数
   */
  register(dataSource: DataSource): () => void

  /**
   * 获取指定 ID 的数据源
   * @param id - 数据源唯一标识符
   * @returns 数据源实例或 undefined
   */
  getDataSource(id: string): DataSource | undefined

  /**
   * 查询与指定组件关联的数据源
   * @param componentId - 组件 ID
   * @returns 关联的数据源列表
   */
  getDataSourcesByComponent(componentId: string): DataSource[]

  /**
   * 更新数据源内容
   * @param id - 数据源 ID
   * @param data - 新数据
   */
  updateData(id: string, data: any): void

  /**
   * 销毁指定数据源
   * @param id - 数据源 ID
   */
  destroyDataSource(id: string): void
}

/**
 * 数据源基础定义
 */
export interface DataSource {
  /**
   * 数据源唯一标识
   */
  id: string

  /**
   * 数据源名称（用于 UI 显示）
   */
  name?: string

  /**
   * 数据源类型（如 API、Static、Database 等）
   */
  type: string

  /**
   * 当前数据快照
   */
  data: any

  /**
   * 是否正在加载数据
   */
  loading: boolean

  /**
   * 加载数据的方法
   */
  load?(): Promise<void>

  /**
   * 销毁数据源时调用
   */
  dispose?(): void
}
