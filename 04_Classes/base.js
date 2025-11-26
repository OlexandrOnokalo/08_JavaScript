class TimeObj {
    constructor() {
        this.hours = 10;
        this.minutes = 59;
        this.seconds = 59;
    }
    showCurrentTime() {
        const d = new Date();
        const hh = this._pad(d.getHours());
        const mm = this._pad(d.getMinutes());
        const ss = this._pad(d.getSeconds());
        document.write(`${hh}:${mm}:${ss}`);
      }
    _pad(n) {
        return String(n).padStart(2, "0");
    }
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
    }
    format(time) {
        const t = this._parseInput(time);
        const hh = this._pad(((t.h % 24) + 24) % 24);
        const mm = this._pad(((t.m % 60) + 60) % 60);
        const ss = this._pad(((t.s % 60) + 60) % 60);
        return `${hh}:${mm}:${ss}`;
    }
    addTime(time) {
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
      }
}





class Car {

    constructor(model, year, speed) {
        this.model = model;
        this.year = year;
        this.speed = speed;
    }
    print() {
        console.log(`Car : ${this.model}, Year : ${this.year}. Speed : ${this.speed}`)
    }
    calculateTravelTime(distanceKm, c) {
        const drivingHours = distanceKm / this.speed;
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
}