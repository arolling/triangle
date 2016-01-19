describe('triangle', function() {
  it("is not a triangle", function() {
    expect(triangle(2,3,6)).to.equal(false);
  });

  it("is an equilateral triangle", function() {
    expect(triangle(3,3,3)).to.equal("equilateral");
  });

  it("is an isosceles triangle", function() {
    expect(triangle(5,3,3)).to.equal("isosceles");
  });

  it("is a scalene triangle", function() {
    expect(triangle(5,4,3)).to.equal("scalene");
  });





}); //end of describe function
