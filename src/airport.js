class Airport {
  constructor() {
    this.hangar = [];
  }

  land(plane) {
    if (this.hangar.length == 20) {
      throw new Error("Airport is full");
    }

    this.hangar.push(plane);
  }

  take_off(plane) {
    this.hangar.pop(plane);
  }
}
