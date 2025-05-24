let x = parseInt(process.argv[2])

if(x%1 != 0){
    console.log("Missing number of occurrences")
} else {
    Array(x).fill().forEach(() => {
        console.log("C is fun");
    })
}

