class Airport {
  constructor() {
    this.hangar = [];
    this.capacity = 20
  }

  land(plane) {
    if (this.hangar.length == this.capacity) {
      throw new Error("Airport is full");
    }

    this.hangar.push(plane);
  }

  take_off(plane) {
    this.hangar.pop(plane);
  }

  override(number) {
  this.capacity = number
  }

}
