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
  });
  describe("take off", function() {
    it ("plane takes off from hangar", function() {
      airport.land("plane");
      airport.take_off("hangar");
      expect(airport.hangar).toEqual([]);
    });
  });
});
