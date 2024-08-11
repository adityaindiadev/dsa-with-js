const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
  ];
  
  const outputArray = [];
  
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftCol = 0;
  let rightCol = matrix[0].length - 1;
  
  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Traverse right
    let col = leftCol;
    while (col <= rightCol) {
      outputArray.push(matrix[topRow][col]);
      col++;
    }
    topRow++;
  
    // Traverse down
    let row = topRow;
    while (row <= bottomRow) {
      outputArray.push(matrix[row][rightCol]);
      row++;
    }
    rightCol--;
  
    // Traverse left
    if (topRow <= bottomRow) { // Avoid duplicate traversal
      col = rightCol;
      while (col >= leftCol) {
        outputArray.push(matrix[bottomRow][col]);
        col--;
      }
      bottomRow--;
    }
  
    // Traverse up
    if (leftCol <= rightCol) { // Avoid duplicate traversal
      row = bottomRow;
      while (row >= topRow) {
        outputArray.push(matrix[row][leftCol]);
        row--;
      }
      leftCol++;
    }
  }
  
  console.log(outputArray);
  