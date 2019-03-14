module.exports = function getZerosCount(number, base) {
  // your implementation
    let countZero=0;
    let maxMultiplier;
    let multFactorial;
    let power=1;
    let countPower=0;
    function getMultipliers(x) {
       // "x" - Число, которое нам требуется разложить
        let j = 0;
        let i = 2;
        let a = [];
        do {
            if ((x % i) === 0) {
                a[j] = i;
                j++;
                x = Math.floor(x/i);
            } else {
                i++;
            }
        } while (i < x);
        a[j] = i;
        return a;
    }
    multFactorial=getMultipliers(base);
    maxMultiplier=multFactorial[multFactorial.length - 1];

    for (let i=0; i<multFactorial.length; i++) {
        if (maxMultiplier===multFactorial[i]){
            countPower++;
        }
    }
console.log('number: '+number+'base: '+base);


    console.log('el: '+maxMultiplier);


    while (number>=(maxMultiplier**power)) {
        countZero+=Math.floor(number/(maxMultiplier**power));
        power++;
    }

console.log('zero: '+countZero);
    return Math.floor(countZero/countPower);
}