module.exports = function getZerosCount(number, base) {
  // your implementation
    let countZero=0;
    let lastMinMnozh;
    let mnozhFact;
    let power=1;
    function getMnozh(x) {
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
        return a;
    }
    mnozhFact=getMnozh(base);
    lastMinMnozh=mnozhFact[mnozhFact.length - 1];
    let countPower=0;
    for (let i=0; i<mnozhFact.length; i++) {
        if (lastMinMnozh===mnozhFact[i]){
            countPower++;
        }
    }
console.log('number: '+number+'base: '+base);


    console.log('el: '+lastMinMnozh);


    while (number>=(lastMinMnozh**power)) {
        countZero+=Math.floor(number/(lastMinMnozh**power));
        power++;
    }

console.log('zero: '+countZero);
    return Math.floor(countZero/countPower);
}