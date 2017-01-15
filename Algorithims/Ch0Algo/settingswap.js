function SettingSwap() {
    var myNumber = 42;
    var myName = "Andrew";
    var temp = myNumber;

    myNumber = myName;
    myName = temp;
    console.log(myNumber);
    console.log(myName);

}

SettingSwap()
