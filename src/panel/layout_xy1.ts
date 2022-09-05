const options = {
  name: 'cose',

  // Called on `layoutready`
  ready: function () {},

  // Called on `layoutstop`
  stop: function () {},

  // Whether to animate while running the layout  是否在运行布局时设置动画
  // true : Animate continuously as the layout is running  true：在布局运行时连续设置动画
  // false : Just show the end result  false：只显示最终结果
  // 'end' : Animate with the end result, from the initial positions to the end positions  “结束”：从初始位置到结束位置，使用最终结果制作动画
  animate: true,

  // Easing of the animation for animate:'end' 动画的动画化：结束
  animationEasing: undefined as undefined,

  // The duration of the animation for animate:'end'  动画的持续时间：“结束”
  animationDuration: 100,

  // A function that determines whether the node should be animated  确定节点是否应设置动画的函数
  // All nodes animated by default on animate enabled  默认情况下，启用“动画”时所有节点都已设置动画
  // Non-animated nodes are positioned immediately when the layout starts  布局开始时，将立即定位非动画节点
  animateFilter: true,

  // The layout animates only after this many milliseconds for animate:true 布局仅在animate:true的许多毫秒后才进行动画
  // (prevents flashing on fast runs) （防止快速运行时闪烁）
  animationThreshold: 250,

  // Number of iterations between consecutive screen positions update 连续屏幕位置更新之间的迭代次数
  refresh: 20,

  // Whether to fit the network view after when done 完成后是否适合网络视图
  fit: true,

  // Padding on fit 贴合垫
  padding: 30,

  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }  约束布局边界；{x1，y1，x2，y2}或{x1、y1，w，h}
  boundingBox: undefined as undefined,

  // Excludes the label when calculating node bounding boxes for the layout algorithm 为布局算法计算节点边界框时排除标签
  nodeDimensionsIncludeLabels: false,

  // Randomize the initial positions of the nodes (true) or use existing positions (false) 随机化节点的初始位置（true）或使用现有位置（false）
  randomize: false,

  // Extra spacing between components in non-compound graphs 非复合图中组件之间的额外间距
  componentSpacing: 40,

  // Node repulsion (non overlapping) multiplier 节点排斥（非重叠）乘数
  nodeRepulsion: 2048,

  // Node repulsion (overlapping) multiplier 节点排斥（重叠）乘数
  nodeOverlap: 2000,

  // Ideal edge (non nested) length 理想边（非嵌套）长度
  idealEdgeLength: 32,

  // Divisor to compute edge forces 计算边缘力的除数
  edgeElasticity: 32,

  // Nesting factor (multiplier) to compute ideal edge length for nested edges 嵌套因子（乘数），用于计算嵌套边的理想边长度
  nestingFactor: 1.2,

  // Gravity force (constant) 重力（恒定）
  gravity: 1,

  // Maximum number of iterations to perform 要执行的最大迭代次数
  numIter: 1000,

  // Initial temperature (maximum node displacement) 初始温度（最大节点位移）
  initialTemp: 1000,

  // Cooling factor (how the temperature is reduced between consecutive iterations 冷却系数（连续迭代之间温度降低的方式
  coolingFactor: 0.99,

  // Lower temperature threshold (below this point the layout will end) 较低的温度阈值（低于此点，布局将结束）
  minTemp: 1.0,
};

export default options;
