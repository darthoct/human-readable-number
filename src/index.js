module.exports = function toReadable (number) {
  if(number>= -20 && number <= 20){
      if(number===1) return 'one';
      else if (number===2) return 'two';
      else if (number===3) return 'three';
      else if (number===4) return 'four';
      else if (number===5) return 'five';
      else if (number===6) return 'six';
      else if (number===7) return 'seven';
      else if (number===8) return 'eight';
      else if (number===9) return 'nine';
      else if (number===10) return 'ten';
      else if (number===11) return 'eleven';
      else if (number===12) return 'twelve';
      else if (number===13) return 'thirteen';
      else if (number===14) return 'fourteen';
      else if (number===15) return 'fifteen';
      else if (number===16) return 'sixteen';
      else if (number===17) return 'seventeen';
      else if (number===18) return 'eighteen';
      else if (number===19) return 'nineteen';
      else if (number===20) return 'twenty;
  }
    let word = '';
    if (number===0)
    word = 'zero';
    else {
        if(number%10===1)
            word.padStart(3, 'one');
        if(number%10===2)
            word.padStart(3, 'two');
        if(number%10===3)
            word.padStart(5, 'three');
        if(number%10===4)
            word.padStart(4, 'four');
        if(number%10===5)
            word.padStart(4, 'five');
        if(number%10===6)
            word = 'six';
        if(number%10===7)
            word = 'seven';
        if(number%10===8)
            word = 'eight';
        if(number%10===9)
            word = 'nine';
        if(number%100===10)
            word='ten';
        if(number%100===11)
            word='eleven';
        if(number%100===12)
            word='twelve';
        if(number%100===13)
            word='thirteen';
        if(number%100===14)
            word='fourteen';
        if(number%100===15)
            word='fifteen';
        if(number%100===16)
            word='sixteen';
        if(number%100===17)
            word='seventeen';
        if(number%100===18)
            word='eighteen';
        if(number%100===19)
            word='nineteen';
        if(number/10%10===2)
            word.padStart(7, 'twenty ');
        if(number/10%10===3)
            word.padStart(7, 'thirty ');
        if(number/10%10===4)
            word.padStart(7, 'fourty ');
        if(number/10%10===5)
            word.padStart(6, 'fifty ');
        if(number/10%10===6)
            word.padStart(6, 'sixty ');
        if(number/10%10===7)
            word.padStart(8, 'seventy ');
        if(number/10%10===8)
            word.padStart(7, 'eighty ');
        if(number/10%10===9)
            word.padStart(7, 'ninety ');
        if(number/100%10===)
            word.padStart(12, 'one hundred ');
    }
}
