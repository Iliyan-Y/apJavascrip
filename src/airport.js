class Airport {
  constructor() {
    this.hangar = [];
  }

  land(plane) {
    this.hangar.push(plane);
  }

  take_off(plane) {
    this.hangar.pop(plane);
  }
}
