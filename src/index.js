module.exports = function towelSort (matrix) {
  if (typeof (matrix) === 'undefined' || matrix.length === 0) return [];
  let len = matrix.length;
  let mr = [];
  for (let i = 0; i < len; i++) {
    if ((i+1)%2===0) {
      matrix[i] = matrix[i].reverse();
    } 
    mr = mr.concat(matrix[i]);
  }
  return mr;
}
