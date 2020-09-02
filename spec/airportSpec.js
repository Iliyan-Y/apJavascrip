describe("Airport", function () {
  var airport;

  beforeEach(function () {
    airport = new Airport();
  });

  describe("Land", function () {
    it("Lands a plane to the airport", function () {
      airport.land("plane");
      expect(airport.hangar).toEqual(["plane"]);
    });

    it("Prevent landing when the airport is full", function () {
      for (i = 1; i <= 20; i++) {
        airport.land(`plane ${i}`);
      }
      expect(function () {
        airport.land("Plane");
      }).toThrow(new Error("Airport is full"));
    });
  });

  describe("take off", function () {
    it("plane takes off from hangar", function () {
      spyOn(Math, "random").and.returnValue(1);
      airport.land("plane");
      airport.take_off("hangar");
      expect(airport.hangar).toEqual([]);
    });

    it("Prevent landing when whether is stormy", function () {
      spyOn(Math, "random").and.returnValue(0);
      airport.land("plane");
      expect(function () {
        airport.take_off("hangar");
      }).toThrow(new Error("Bad weather"));
    });
  });
  describe("default capacity", function () {
    it("override airport capacity", function () {
      airport.override(30);
      expect(airport.capacity).toEqual(30);
    });
  });
});
