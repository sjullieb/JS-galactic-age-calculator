import Calculator from './../src/Calculator.js';

describe('Calculator', function(){
  let birthday;
  let calc;

  beforeEach(function(){
    birthday = new Date(2000, 8, 29);
    calc = new Calculator(birthday);
    console.log(birthday);
  });

  it('tests whether constructor saves the correct birthday', function(){
      expect(calc.birthday).toEqual(birthday);

  });

});
