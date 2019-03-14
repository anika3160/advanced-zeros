module.exports = function getZerosCount(number, base) {
  // your implementation
    let countZero=0;
    let lastMinMnozh;
    let fact;
    let promezhArr =[];
    let mnozhFact =[];
    function getLastEl(x) {
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
        a.sort();
        return a[a.length - 1];
    }
console.log('number: '+number+'base: '+base);

    lastMinMnozh=getLastEl(base);
    console.log('el: '+lastMinMnozh);
   let power=1;

    while (number>(lastMinMnozh**power)) {
        countZero+=Math.floor(number/(lastMinMnozh**power));
        power++;
    }
console.log('zero: '+countZero);
    return countZero;
}