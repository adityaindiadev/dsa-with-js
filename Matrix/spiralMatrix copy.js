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
    for (let col = leftCol; col <= rightCol; col++) {
      outputArray.push(matrix[topRow][col]);
    }
    topRow++;
  
    // Traverse down
    for (let row = topRow; row <= bottomRow; row++) {
      outputArray.push(matrix[row][rightCol]);
    }
    rightCol--;
  
    // Traverse left
    if (topRow <= bottomRow) { // Avoid duplicate traversal
      for (let col = rightCol; col >= leftCol; col--) {
        outputArray.push(matrix[bottomRow][col]);
      }
      bottomRow--;
    }
  
    // Traverse up
    if (leftCol <= rightCol) { // Avoid duplicate traversal
      for (let row = bottomRow; row >= topRow; row--) {
        outputArray.push(matrix[row][leftCol]);
      }
      leftCol++;
    }
  }
  
  console.log(outputArray);
  