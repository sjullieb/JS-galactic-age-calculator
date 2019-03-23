import Calculator from './../src/Calculator.js';

describe('Calculator', function(){
  let birthday;
  let calc;

  beforeEach(function(){
    birthday = new Date(2000, 8, 29);
    calc = new Calculator(birthday);
  });

  it('tests whether constructor saves the correct birthday', function(){
      expect(calc.birthday).toEqual(birthday);
  });

  it('tests whether the age is calculated correctly when birthday before today', function(){
    calc.birthday = new Date(2000, 1, 1);
    expect(calc.calculateAge()).toEqual(19);
  });

  it('tests whether age is calculated correctly when birthday if after today this year', function(){
    expect(calc.calculateAge()).toEqual(18);
  });

  it('tests whether Mercury age is calculated correctly', function(){
    mercuryAge = calc.calculateAge() * .24;
    expect(calc.calculateMercuryAge()).toEqual(mercuryAge);
  });

  it('tests whether Venus age is calculated correctly', function(){
    venusAge = calc.calculateAge() * .62;
    expect(calc.calculateVenusAge()).toEqua(venusAge);
  });

  it('tests whether Mars age is calculated correctly', function(){
    marsAge = calc.calculateAge() * 1.88;
    expect(calc.calculateMarsAge()).toEqual(marsAge);
  });

  it('tests whether Jupiter age is calculated correctly', function(){
    jupiterAge = calc.calculateAge() * 11.86;
    expect(calc.calculateJupiterAge()).toEqual(jupiterAge);
  });
});
