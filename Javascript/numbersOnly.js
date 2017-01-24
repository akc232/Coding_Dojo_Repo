function numberOlny() {


    var arr = ["hello", 23, "ciao", 3, 5, 9, "sup", 10, ];
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
numberOlny()
