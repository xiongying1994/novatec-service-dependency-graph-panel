const options = {
  name: 'breadthfirst',

  fit: true, // 是否将窗口拟合到图形 whether to fit the viewport to the graph
  directed: false, // 树是否向下（如果为false，或者边可以指向任何方向） whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30, // padding on fit
  circle: false, // 如果为true，将深度放在同心圆中，如果为false，则将深度从上向下 put depths in concentric circles if true, put depths top down if false
  grid: false, // 是否创建放置DAG的偶数网格（仅 圆：false） whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 0.75, // 正间距因子，越大=>节点之间的空间越大（如果导致重叠，则不适用） positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: undefined as undefined, // 约束布局边界；{x1，y1，x2，y2}或{x1、y1，w，h} constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // 防止节点重叠，如果没有足够的空间，可能会溢出边界框 prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false, // 在计算布局算法的节点边界框时排除标签 Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: undefined as undefined, // 树的根 the roots of the trees
  maximal: false, // 是否将节点向下移动其自然BFS深度，以避免向上边缘（仅DAG） whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
  depthSort: undefined as undefined, // 一个排序函数，用于按相等深度排序节点。e.g.函数（a，b）{返回a.data（'weight'）-b.data（'weight'）} a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false, // 是否转换节点位置 whether to transition the node positions
  animationDuration: 500, // 如果启用，动画持续时间以毫秒为单位 duration of animation in ms if enabled
  animationEasing: undefined as undefined, // 如果启用，则动画的缓和， easing of animation if enabled,
  animateFilter: true, // 确定节点是否应设置动画的函数。默认情况下，启用“动画”时所有节点都设置了动画。布局开始时，将立即定位非动画节点 a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: function () {}, // callback on layoutready
  stop: function () {}, // callback on layoutstop
  transform: undefined as undefined, // 变换给定的节点位置。用于更改离散布局中的流向 transform a given node position. Useful for changing flow direction in discrete layouts
};

export default options;
