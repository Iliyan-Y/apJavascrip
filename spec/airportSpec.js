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
});
