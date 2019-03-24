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
    gender = 'M';
    lifestyle = 10;
    health = 10;
    calc = new Calculator(birthday, gender, lifestyle, health);
  });

  it('tests whether constructor saves the correct birthday', function(){
      expect(calc.birthday).toEqual(birthday);
  });

  it('tests whether the age is calculated correctly when birthday before today', function(){
    calc.birthday = new Date(2000, 1, 1);
    expect(calc.getAge()).toEqual(19);
  });

  it('tests whether age is calculated correctly when birthday if after today this year', function(){
    expect(calc.getAge()).toEqual(18);
  });

  it('tests whether years on planet are calculated correctly', function(){
    let planet = 'Mercury';
    let earthYears = 10;
    let mercuryYears = multiplyAndRound(earthYears, .24);
    expect(calc.getYearsOnPlanet(earthYears, planet)).toEqual(mercuryYears);
  });

  it('tests whether age on the is calculated correctly', function(){
    let planet = 'Mercury';
    let earthAge = calc.getAge();
    let mercuryAge = multiplyAndRound(earthAge, .24);
    expect(calc.getAgeOnPlanet(planet)).toEqual(mercuryAge);
  });

  it('tests whether life expectancy calculates correctly for M', function(){
    expect(calc.getEarthLifeExpectancy()).toEqual(95);
  });

  it('tests whether life expectancy is calculated correctly for F', function(){
    calc.gender = "F";
    expect(calc.getEarthLifeExpectancy()).toEqual(100);
  });

  it('tests whether additional life expectancy is calculated correctly for different planets', function(){
    let planet = 'Mercury';
    let earthAge = calc.getAge();
    let mercuryAge = multiplyAndRound(earthAge, .24);
    let earthLifeExp = calc.getEarthLifeExpectancy();
    let mercuryLifeExp = multiplyAndRound((earthLifeExp - earthAge), .24);
    expect(calc.getAdditionalLifeExpectancyOnPlanet(planet)).toEqual(mercuryLifeExp);
  });

  // it('tests whether additional life expectancy is calculated correctly for different planets : negative number', function(){
  //   calc.birthday = new Date(1900, 8, 29);
  //   let planet = 'Earth';
  //   let earthAge = calc.getAge();
  //   let newEarthAge = multiplyAndRound(earthAge, 1);
  //   let earthLifeExp = calc.getEarthLifeExpectancy();
  //   let newEarthLifeExp = multiplyAndRound((earthLifeExp - earthAge), 1);
  //   console.log(newEarthLifeExp);
  //   expect(calc.getAdditionalLifeExpectancyOnPlanet(planet)).toEqual(newEarthLifeExp);
  // });
});
