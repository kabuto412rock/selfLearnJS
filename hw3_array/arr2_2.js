// 請寫一個函數計算兩矩陣相加？
// 範例： add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]]
function add (a, b) {
  for (var i in a) {
    for (var j in a[i]) {
      a[i][j] += b[i][j]
    }
  }
  return a
}

console.log('add([[1,2],[3,4]], [[1,1],[1,1]]) =', add([[1, 2], [3, 4]], [[1, 1], [1, 1]]))
