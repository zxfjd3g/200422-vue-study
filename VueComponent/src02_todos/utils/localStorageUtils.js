/* 
localStorage存储操作的工具函数模块
*/

/* 
读取local中的todos返回
*/
export function readTodos() {
  return JSON.parse(window.localStorage.getItem('todos_key')) || []
}

/* 
保存todos到local中
*/
export function saveTodos(todos) {
  window.localStorage.setItem('todos_key', JSON.stringify(todos))
}