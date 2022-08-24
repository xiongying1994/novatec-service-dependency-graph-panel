const options = {
  name: 'cola',
  animate: true, // 是否在布局运行时显示布局 whether to show the layout as it's running
  refresh: 1, // 每帧的节拍数；越高刷新越快，间隔越短（急促） number of ticks per frame; higher is faster but more jerky
  maxSimulationTime: 3000, // 运行布局的最大长度（毫秒） max length in ms to run the layout
  ungrabifyWhileSimulating: false, // 因此您不能在布局期间拖动节点 so you can't drag nodes during layout
  fit: true, // 由控制器设置 set by controller // 在节点的每个布局重新定位上，拟合视口 on every layout reposition of nodes, fit the viewport
  padding: 90, // 模拟周围的填充 padding around the simulation
  boundingBox: undefined as undefined, // 约束布局边界 constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  nodeDimensionsIncludeLabels: false, // 在确定节点使用的空间时是否应包括标签 whether labels should be included in determining the space used by a node

  // 布局时间回调函数 layout event callbacks
  ready: function () {}, // on layoutready
  stop: function () {}, // on layoutstop

  // 定位选项 positioning options
  randomize: false, // 在布局开始时使用随机节点位置 use random node positions at beginning of layout
  avoidOverlap: true, // 如果为true，则防止节点边界框重叠 if true, prevents overlap of node bounding boxes
  handleDisconnected: true, // 如果为true，则避免断开的组件重叠 if true, avoids disconnected components from overlapping
  convergenceThreshold: 0.01, // 当alpha值（系统能量）低于此值时，布局停止 when the alpha value (system energy) falls below this value, the layout stops
  nodeSpacing: function (node: any) {
    return 50;
  }, // 节点周围的额外间距 extra spacing around nodes
  flow: undefined as undefined, // 如果指定，则使用DAG/树流布局 use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
  alignment: undefined as undefined, // 节点上的相对对齐约束 relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }
  gapInequalities: undefined as undefined, // 节点之间间隙的不等式约束列表 list of inequality constraints for the gap between the nodes, e.g. [{"axis":"y", "left":node1, "right":node2, "gap":25}]

  // 指定边长度的不同方法 different methods of specifying edge length
  // 每一个都可以是一个恒定的数值或一个类似于`函数（边）each can be a constant numerical value or a function like `function( edge ){ return 2; }`
  edgeLength: undefined as undefined, // 在模拟中直接设置边长度 sets edge length directly in simulation
  edgeSymDiffLength: undefined as undefined, // 模拟中的对称差异边缘长度 symmetric diff edge length in simulation
  edgeJaccardLength: undefined as undefined, // 模拟中的jaccard边长度 jaccard edge length in simulation

  // cola算法的迭代 iterations of cola algorithm; 在未定义上使用默认值 uses default values on undefined
  unconstrIter: 50, // 由控制器设置 set by controller // 无约束初始布局迭代 unconstrained initial layout iterations
  userConstIter: undefined as undefined, // 具有用户指定约束的初始布局迭代 initial layout iterations with user-specified constraints
  allConstIter: undefined as undefined, // 初始布局迭代，包含所有约束，包括非重叠 initial layout iterations with all constraints including non-overlap

  // 无限布局选项 infinite layout options
  infinite: false, // 覆盖强制始终模式的所有其他选项 overrides all other options for a forces-all-the-time mode
};

export default options;
