const planetConvertion = {
  'Earth' : 1,
  'Mercury' : .24,
  'Venus' : .62,
  'Mars' : 1.88,
  'Jupiter': 11.86
};

export function multiplyAndRound (factor1, factor2){
  return Math.floor(factor1 * factor2).toFixed(0);
}

export class Calculator{
  constructor (birthday, gender, health, lifestyle)
  {
    this.birthday = birthday;
    this.gender = gender;
    this.health = health;
    this.lifestyle = lifestyle;
  }

  getAge(){
    let today = new Date();
    let age = today.getYear() - this.birthday.getYear();

    if (((today.getMonth() == this.birthday.getMonth()) && (today.getDay() < this.birthday.getDay())) || (today.getMonth() < this.birthday.getMonth())){
      age --;
    }
    return age;
  }

  getAgeOnPlanet(planet){
    let earthAge = this.getAge(this.birthday);
    return this.getYearsOnPlanet(earthAge, planet);
  }

  getYearsOnPlanet(years, planet){
    return multiplyAndRound(years, planetConvertion[planet]);
  }

  getEarthLifeExpectancy(){
    let baseExp = 90;
    if (this.gender == "M"){
      baseExp = 85;
    }
    baseExp += this.health - 5 + this.lifestyle - 5;
    return baseExp;
  }

  getAdditionalLifeExpectancyOnPlanet(planet){
    let earthAge = this.getAge(this.birthday);
    let earthLifeExp = this.getEarthLifeExpectancy();
    let additionalLifeExp = this.getYearsOnPlanet(earthLifeExp - earthAge, planet);
    return additionalLifeExp;
  }
}
