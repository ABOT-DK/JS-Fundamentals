function add(a, b) {
    return a + b;
  }
  
  let int1 = parseInt(process.argv[2]);
  let int2 = parseInt(process.argv[3]);
  
  if (int1%1 != 0 || int2%1 != 0) {
    console.log("Invalid arguments - please provide two integers");
  } else {
    console.log(add(int1, int2));
  }