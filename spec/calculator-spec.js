import { Calculator, multiplyAndRound } from './../src/Calculator.js';

describe('multiplyAndRound', function(){
    it('tests whether function returns correct value', function(){
      let factor1 = 30;
      let factor2 = 0.62;
      expect(multiplyAndRound(factor1, factor2)).toEqual('18');
    });
});

describe('Calculator', function(){
  let birthday;
  let calc;
  let gender;
  let lifestyle;
  let health;

  beforeEach(function(){
    birthday = new Date(2000, 8, 29);
    calc = new Calculator(birthday);
    gender = 'male';
    lifestyle = 5;
    health = 5;
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

  it('tests whether age on the planet is calculated correctly', function(){
    let planet = 'Mercury';
    let mercuryAge = multiplyAndRound(calc.calculateAge(), .24);
    expect(calc.calculateAgeOnPlanet(planet)).toEqual(mercuryAge);
  });

  // it('tests whether Mercury age is calculated correctly', function(){
  //   let mercuryAge = multiplyAndRound(calc.calculateAge(), .24);
  //   expect(calc.calculateMercuryAge()).toEqual(mercuryAge);
  // });
  //
  // it('tests whether Venus age is calculated correctly', function(){
  //   let venusAge = multiplyAndRound(calc.calculateAge(), .62);
  //   expect(calc.calculateVenusAge()).toEqual(venusAge);
  // });
  //
  // it('tests whether Mars age is calculated correctly', function(){
  //   let marsAge = multiplyAndRound(calc.calculateAge(), 1.88);
  //   expect(calc.calculateMarsAge()).toEqual(marsAge);
  // });
  //
  // it('tests whether Jupiter age is calculated correctly', function(){
  //   let jupiterAge = multiplyAndRound(calc.calculateAge(), 11.86);
  //   expect(calc.calculateJupiterAge()).toEqual(jupiterAge);
  // });

  it('tests whether life expectancy calculates correctly', function(){
    calculateLifeExpectancy(gender, health, lifestyle);
  });
});
