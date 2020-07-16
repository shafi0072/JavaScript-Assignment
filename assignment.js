/*feetToMile*/
function feetToMile(Feet) {
    let feet = Feet;
    let Mile = feet * 0.00018939393;
    return Mile;
}
let mileResult = feetToMile(200);
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
let woodCalculatorResult = woodCalculator(1, 4, 2);
console.log(woodCalculatorResult);


/*brickCalculator*/
function brickCalculator(Floor){
    let brick = 1000; 
    if(Floor<=10){
        let brickEqual =  brick * 15;
        return brickEqual
    }
    else if(Floor <= 100){
        let brickEqual = brick * 17;
        return brickEqual
    }
    else{
        let brickEqual = brick * 10;
    }
}
let brickCalculatorResult = brickCalculator(20);
console.log(brickCalculatorResult);