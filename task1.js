const numbersLessThan20 = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const levelsInTens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

export function number2words(n){
    //checks if input is a number for conversion
    if(typeof n=='number'){
        if(n<20){
            return numbersLessThan20[n]
        }
        if(n<100){
            const unitRemainder = n%10
            return levelsInTens[Math.floor(n/10) - 2] + (unitRemainder !=0 ?  ("-" + numbersLessThan20[unitRemainder]) : "")
        }
        if(n<1000){
            const tenthRemaider = n%100
            return numbersLessThan20[Math.floor(n/100)] + " hundred" + (tenthRemaider!==0 ? " and " + number2words(tenthRemaider) : "")
        }
        if(n<100000){
            const thousandRemainder = n%1000
            return number2words(Math.floor(n/1000)) + ' thousand' + (thousandRemainder ? " ," + number2words(thousandRemainder) : "")
        }
        if(n<1000000){
            const hThousandRemainder = n%1000
            return number2words(Math.floor(n/1000)) + " thousand" + ((hThousandRemainder && hThousandRemainder < 100) ? ', and ' + number2words(hThousandRemainder) : hThousandRemainder ? ', ' + number2words(hThousandRemainder) : "")
        }
        if(n<100000000){
            const millionRemainder = n%1000000
            return Math.floor(n/1000000) + ' million, ' + (millionRemainder ? number2words(millionRemainder) : "")
        }
    }else{
        //input must be a word for conversion
        return 'not a number'
    }
}


// const result = 
// number2words(300)

// console.log(result)
