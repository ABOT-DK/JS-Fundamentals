let x = parseInt(process.argv[2])

if(x%1 != 0){
    console.log("Missing number of occurrences")
} else {
    let arr = new Array(x);
    arr.fill(0).forEach(() => {
      console.log("C is fun");
    })
}

