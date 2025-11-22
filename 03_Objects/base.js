const timeObj = {
  hours: 10,
  minutes: 59,
  seconds: 59,
  _pad(n) {
    return String(n).padStart(2, "0");
  },
  _parseInput(time) {
    if (!time) {
      return { h: this.hours, m: this.minutes, s: this.seconds };
    }
    if (typeof time === "string") {
      const parts = time.split(":").map(Number);
      return { h: parts[0] || 0, m: parts[1] || 0, s: parts[2] || 0 };
    }
    if (typeof time === "object") {
      return { h: time.hours ?? time.h ?? this.hours, m: time.minutes ?? time.m ?? this.minutes, s: time.seconds ?? time.s ?? this.seconds };
    }
    return { h: this.hours, m: this.minutes, s: this.seconds };
  },
  format(time) {
    const t = this._parseInput(time);
    const hh = this._pad(((t.h % 24) + 24) % 24);
    const mm = this._pad(((t.m % 60) + 60) % 60);
    const ss = this._pad(((t.s % 60) + 60) % 60);
    return `${hh}:${mm}:${ss}`;
  },
  addOneSecond(time) {
    const t = this._parseInput(time);
    let s = t.s + 1;
    let m = t.m;
    let h = t.h;
    if (s >= 60) {
      s -= 60;
      m += 1;
    }
    if (m >= 60) {
      m -= 60;
      h += 1;
    }
    if (h >= 24) {
      h -= 24;
    }
    this.hours = h;
    this.minutes = m;
    this.seconds = s;
    return this.format();
  },
  subOneSecond(time) {
    const t = this._parseInput(time);
    let s = t.s - 1;
    let m = t.m;
    let h = t.h;
    if (s < 0) {
      s += 60;
      m -= 1;
    }
    if (m < 0) {
      m += 60;
      h -= 1;
    }
    if (h < 0) {
      h += 24;
    }
    this.hours = h;
    this.minutes = m;
    this.seconds = s;
    return this.format();
  },
  showCurrentTime() {
    const d = new Date();
    const hh = this._pad(d.getHours());
    const mm = this._pad(d.getMinutes());
    const ss = this._pad(d.getSeconds());
    document.write(`${hh}:${mm}:${ss}`);
  }
};

console.log("Task 1 — initial time:", timeObj.format());
console.log("Task 1 — add one second (object state):", timeObj.addOneSecond());
console.log("Task 1 — add one second to '23:59:59':", timeObj.addOneSecond("23:59:59"));
console.log("Task 1 — subtract one second (object state):", timeObj.subOneSecond());
console.log("Task 1 — subtract one second from '00:00:00':", timeObj.subOneSecond("00:00:00"));
console.log("Task 1 — format '5:3:7':", timeObj.format("5:3:7"));
timeObj.showCurrentTime();

const car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2018,
  avgSpeed: 100
};

function printCarInfo(c) {
  console.log("Car information:");
  console.log("Manufacturer:", c.manufacturer);
  console.log("Model:", c.model);
  console.log("Year:", c.year);
  console.log("Average speed (km/h):", c.avgSpeed);
}

function calculateTravelTime(distanceKm, c) {
  const drivingHours = distanceKm / c.avgSpeed;
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
  return { hours: hoursPart, minutes: minutesPart, totalHours };
}

printCarInfo(car);
const dist1 = 600;
const res1 = calculateTravelTime(dist1, car);
console.log(`To travel ${dist1} km: ${res1.hours} hours ${res1.minutes} minutes (driving+breaks).`);
const dist2 = 800;
const res2 = calculateTravelTime(dist2, car);
console.log(`To travel ${dist2} km: ${res2.hours} hours ${res2.minutes} minutes (driving+breaks).`);
const dist3 = 350;
const res3 = calculateTravelTime(dist3, car);
console.log(`To travel ${dist3} km: ${res3.hours} hours ${res3.minutes} minutes (driving+breaks).`);
