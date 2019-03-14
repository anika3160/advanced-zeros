module.exports = function getZerosCount(number, base) {
  // your implementation
    let countZero=0;
    let lastMinMnozh;
    let mnozhFact;
    let eqEl;
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
console.log('number: '+number+'base: '+base);

    lastMinMnozh=mnozhFact[mnozhFact.length - 1];
    eqEl=new Set(mnozhFact);
    console.log('el: '+lastMinMnozh);


    while (number>=(lastMinMnozh**power)) {
        countZero+=Math.floor(number/(lastMinMnozh**power));
        power++;
    }
    if (eqEl.size===1) {
        countZero=Math.floor(countZero/(mnozhFact.length));
    }
console.log('zero: '+countZero);
    return countZero;
}