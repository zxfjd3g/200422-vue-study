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
  let listnerContainer = {}
  

  /* 
  1. on(eventName, listener): 绑定事件监听
  */
  eventBus.on = function (eventName, listener) {

    // 先根据eventName获取对应的数组小容器
    const listeners = listnerContainer[eventName] 
    // 如果不存在
    if (!listeners) {
      listnerContainer[eventName] = [listener]
    } else { // 如果存在
      listeners.push(listener)
    }
    // console.log('on()', listnerContainer)
  }
  
  /* 
  2. emit/dispatch(eventName, data): 分发事件
  */
  eventBus.emit = function (eventName, data) {
    // 根据eventName得到包含所有对应回调函数的数组容器
    const listeners = listnerContainer[eventName]
    // 如果有, 遍历每个listener, 立即同步调用它
    if (listeners && listeners.length>0) {
      listeners.forEach(listener => listener(data))
    }
  }

  /* 
  3. off(eventName): 解绑事件监听
    如果eventName没指定, 解绑所有监听
  */
  eventBus.off = function (eventName) {
    if (eventName===undefined) { // 解绑所有监听
      listnerContainer = {}
    } else if (typeof eventName==='string') {
      delete listnerContainer[eventName] // 删除对应的属性
    } else {
      throw new Error('事件名可以不传或者为字符串')
    }
  }

  // 暴露总线对象
  window.eventBus = eventBus
})(window)