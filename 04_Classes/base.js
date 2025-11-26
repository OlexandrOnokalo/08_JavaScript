class Time {
  constructor(hours = 0, minutes = 0, seconds = 0) {
    this.hours = ((hours % 24) + 24) % 24;
    this.minutes = ((minutes % 60) + 60) % 60;
    this.seconds = ((seconds % 60) + 60) % 60;
    this._normalize();
  }
  _pad(n) {
    return String(n).padStart(2, "0");
  }
  _normalize() {
    if (this.seconds >= 60 || this.seconds < 0) {
      const extraMin = Math.floor(this.seconds / 60);
      this.seconds = ((this.seconds % 60) + 60) % 60;
      this.minutes += extraMin;
    }
    if (this.minutes >= 60 || this.minutes < 0) {
      const extraHour = Math.floor(this.minutes / 60);
      this.minutes = ((this.minutes % 60) + 60) % 60;
      this.hours += extraHour;
    }
    if (this.hours >= 24 || this.hours < 0) {
      this.hours = ((this.hours % 24) + 24) % 24;
    }
  }
  display() {
    console.log(`${this._pad(this.hours)}:${this._pad(this.minutes)}:${this._pad(this.seconds)}`);
  }
  addSeconds(sec) {
    this.seconds += Math.trunc(sec);
    this._normalize();
    return `${this._pad(this.hours)}:${this._pad(this.minutes)}:${this._pad(this.seconds)}`;
  }
  addMinutes(min) {
    this.minutes += Math.trunc(min);
    this._normalize();
    return `${this._pad(this.hours)}:${this._pad(this.minutes)}:${this._pad(this.seconds)}`;
  }
  addHours(hr) {
    this.hours += Math.trunc(hr);
    this._normalize();
    return `${this._pad(this.hours)}:${this._pad(this.minutes)}:${this._pad(this.seconds)}`;
  }
}

class Car {
  constructor(manufacturer, model, year, avgSpeed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.avgSpeed = avgSpeed;
  }
  info() {
    console.log("Manufacturer:", this.manufacturer);
    console.log("Model:", this.model);
    console.log("Year:", this.year);
    console.log("Average speed (km/h):", this.avgSpeed);
  }
  travelTime(distanceKm) {
    const drivingHours = distanceKm / this.avgSpeed;
    let breaks = 0;
    if (drivingHours > 4) {
      breaks = Math.floor(drivingHours / 4);
      if (Math.abs(drivingHours % 4) < 1e-9) {
        breaks = Math.max(0, breaks - 1);
      }
    }
    const totalHours = drivingHours + breaks;
    let hoursPart = Math.floor(totalHours);
    let minutesPart = Math.round((totalHours - hoursPart) * 60);
    if (minutesPart === 60) {
      hoursPart += 1;
      minutesPart = 0;
    }
    return { hours: hoursPart, minutes: minutesPart };
  }
}

const t1 = new Time(20, 30, 45);
t1.display();
console.log("add 30 seconds ->", t1.addSeconds(30));
const t2 = new Time(23, 59, 50);
console.log("t2 before add 20s");
t2.display();
console.log("t2 after add 20s ->", t2.addSeconds(20));
const t3 = new Time(0, 0, 10);
console.log("t3 before sub 20s");
t3.display();
console.log("t3 after add -20s ->", t3.addSeconds(-20));
const t4 = new Time(5, 59, 30);
console.log("t4 add 125 minutes ->", t4.addMinutes(125));
const t5 = new Time(22, 15, 0);
console.log("t5 add 5 hours ->", t5.addHours(5));

const car = new Car("Toyota", "Camry", 2018, 100);
car.info();
const dist1 = 600;
const res1 = car.travelTime(dist1);
console.log(`To travel ${dist1} km: ${res1.hours} hours ${res1.minutes} minutes.`);
const dist2 = 800;
const res2 = car.travelTime(dist2);
console.log(`To travel ${dist2} km: ${res2.hours} hours ${res2.minutes} minutes.`);
const dist3 = 350;
const res3 = car.travelTime(dist3);
console.log(`To travel ${dist3} km: ${res3.hours} hours ${res3.minutes} minutes.`);
