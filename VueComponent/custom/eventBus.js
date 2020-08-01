/* 
自定义一个事件总线对象的模块
1. on(eventName, listener): 绑定事件监听
2. emit/dispatch(eventName, data): 分发事件
3. off(eventName): 解绑事件监听
*/
(function (window) {
  // 定义事件总线对象
  const eventBus = {}
  /* 
  内部缓存所有绑定的事件监听回调
  需要一个容器, 什么结构?
  {}容器: 根据字符串标识名称来取对应的数据
  []容器: 根据下标来取对应的数据
  {
    属性名1: 属性值,
    属性名2: 属性值,
  }
  [元素值1, 元素值2]

  {
    'add': [listener1, listener2],
    'delete': [listener3]
  }
  */
  

  /* 
  1. on(eventName, listener): 绑定事件监听
  */
  eventBus.on = function (eventName, listener) {
    
  }
  
  /* 
  2. emit/dispatch(eventName, data): 分发事件
  */
  eventBus.emit = function (eventName, data) {
      
  }

  /* 
  3. off(eventName): 解绑事件监听
  */
  eventBus.off = function (eventName) {
      
  }

  // 暴露总线对象
  window.eventBus = eventBus
})(window)