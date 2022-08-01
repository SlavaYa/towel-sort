
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined'){return []}
  else if (matrix.length === 0){
    return []
  }
  
  else if (matrix === matrix) {

  
  for (let i=1; i < matrix.length; i = i + 2){
    matrix[i].reverse();
  }
  let x = matrix.join(',');
  let y = x.split(',');
  return y
}

}
