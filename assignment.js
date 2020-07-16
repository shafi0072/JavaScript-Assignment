/*feetToMile*/
function feetToMile(Feet) {
    let feet = Feet;
    let Mile = feet * 0.00018939393;
    return Mile;
}
let mileResult = feetToMile(Feet);
console.log(mileResult);


/*woodCalculator*/
function woodCalculator(chair, table, bed){
    let Chair = chair * 1728;
    let Table = table * 1728;
    let Bed = bed * 1728;
    let totalSum = Chair + Table + Bed;
    let totalCubicFeet = totalSum / 1728;
    return totalCubicFeet;
}
let woodCalculatorResult = woodCalculator(chair, table, bed);
console.log(woodCalculatorResult);