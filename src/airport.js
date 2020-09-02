class Airport {
  constructor() {
    this.hangar = [];
    this.capacity = 20;
    this.weather = ["stormy", "Sunny", "cloudy", "clear"];
  }

  land(plane) {
    if (this.hangar.length == this.capacity) {
      throw new Error("Airport is full");
    }

    this.hangar.push(plane);
  }

  take_off(plane) {
    if (this.weather[Math.floor(Math.random() * 3)] == "stormy") {
      throw new Error("Bad weather");
    }

    this.hangar.pop(plane);
  }

  override(number) {
    this.capacity = number;
  }
}
