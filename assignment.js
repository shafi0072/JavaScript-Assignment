/*feetToMile*/
function feetToMile(Feet) {
    let feet = Feet;
    let Mile = feet * 0.00018939393;
    return Mile;
}
let mileResult = feetToMile(3000);
console.log("User Pushed Feet is =", mileResult, "Mile.");

/*woodCalculator*/
function woodCalculator(chair, table, bed) {
    let Chair = chair * 1728;
    let Table = table * 1728;
    let Bed = bed * 1728;
    let totalSum = Chair + Table + Bed;
    let totalCubicFeet = totalSum / 1728;
    return totalCubicFeet;
}
let woodCalculatorResult = woodCalculator(1, 4, 20);
console.log("You Need ", woodCalculatorResult, "CubicFoot of Wood.");

/*brickCalculator*/
function brickCalculator(Floor) {
    let brick = 1000;
    if (Floor <= 10) {
        let brickEqual = brick * 15;
        return brickEqual
    } else if (Floor <= 100) {
        let brickEqual = brick * 17;
        return brickEqual
    } else {
        let brickEqual = brick * 10;
    }
}
let brickCalculatorResult = brickCalculator(50);
console.log("You Need ", brickCalculatorResult, " brick for your building.");

/*tinyFriends*/
let FriendsName = ["Reeza", "raz", "Abir"]
function tinyFriends(FriendsName) {
    let Friends = FriendsName;
    let min = Friends[0];
    for (let i = 0; i < Friends.length; i++) {
        let element = Friends[i];
        if (element > min) {
            min = element;
        }
    }
    return min;

}
let TinyResul = tinyFriends(FriendsName);
console.log("The tinyName is:", TinyResul);