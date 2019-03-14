module.exports = function getZerosCount(number, base) {
  // your implementation
    let countZero=0;
    let lastMinMnozh;
    let fact;
    let promezhArr =[];
    let mnozhFact =[1];
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
    function doArrFact(number) {
        let arr= [];
        for (let i=0; i<number; i++) {
            arr[i]=i+1;
        }
        return arr;
    }
    function getArrMnozhitelei (x) {
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

    lastMinMnozh=getLastEl(base);
    fact=doArrFact(number);

let dopArr=[];
    for (let i=0; i<fact.length; i++) {
        promezhArr=[];
        promezhArr=getArrMnozhitelei(fact[i]);
        dopArr=mnozhFact.concat(promezhArr);
        mnozhFact=dopArr;
    }
    console.log('el: '+lastMinMnozh);
    console.log('arr fact min mnozh');
    console.log(mnozhFact);

    for (let i=0; i<mnozhFact.length; i++) {
        if (lastMinMnozh===mnozhFact[i]) {
            countZero++;
        }
    }
    console.log(countZero);

 return countZero;
}