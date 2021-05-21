/* Program that outputs a symmetrical pyramid of hashes
with a height based on an integer input */
function createPyramid(height) {
  let row = 1;

  // print first half of pyramid
  while (row <= height) {  
    // print number of spaces equal to the height - row number
    for (let i = 0; i < height - row; i++) {
      process.stdout.write(" ");
    }

    // print number of hashes equal to the row number
    for (let i = 0; i < row; i++) {
      process.stdout.write("#");
    }

    process.stdout.write(" "); // space to separate both halves

    // print second half of pyramid
    for (let i = 0; i < row; i++) {
      process.stdout.write("#");
    }

    process.stdout.write("\n");
    row++;
  }

  return height + "m tall pyramid.";
}

console.log(createPyramid(8));