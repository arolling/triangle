describe('triangle', function() {
  it("is not a triangle", function() {
    expect(triangle(2,3,6)).to.equal(false);
  });
});
