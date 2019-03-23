export function multiplyAndRound (factor1, factor2){
  return Math.floor(factor1 * factor2).toFixed(0);
}

export class Calculator{
  constructor (birthday)
  {
    this.birthday = birthday;
  }

  calculateAge(){
    let today = new Date();
    let age = today.getYear() - this.birthday.getYear();

    if (((today.getMonth() == this.birthday.getMonth()) && (today.getDay() < this.birthday.getDay())) || (today.getMonth() < this.birthday.getMonth())){
      age --;
    }
    return age;
  }

  calculateMercuryAge(){ // A Mercury year is .24 Earth year
    return multiplyAndRound(this.calculateAge(this.birthday), 0.24);//Math.floor(this.calculateAge(this.birthday) * 0.24).toFixed(0);
  }

  calculateVenusAge(){ // A Venus year is .62 Earth year
    return multiplyAndRound(this.calculateAge(this.birthday), 0.62);
  }

  calculateMarsAge(){ // A Mars year is 1.88 Earth years
    return multiplyAndRound(this.calculateAge(this.birthday), 1.88);
  }

  calculateJupiterAge(){ // A Jupiter year is 11.86 Earth years.
    return multiplyAndRound(this.calculateAge(this.birthday), 11.86);
  }
}
