export  default class Calculator{
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
    return this.birthday;
  }

  calculateVenusAge(){ // A Venus year is .62 Earth year
    return this.birthday;
  }

  calculateMarsAge(){ // A Mars year is 1.88 Earth years
    return this.birthday;
  }

  calculateJupiterAge(){ // A Jupiter year is 11.86 Earth years.
    return this.birthday;
  }
}
