
//Что не так в нижеприведённом тесте функции pow?
it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

describe("Возводит x в степень n", function(){
  it("Возводит x в степень 1" , ()=>{
    assert.equal(pow(5, 1), 5);
  })
  it("Возводит x в степень 2" , ()=>{
    assert.equal(pow(5, 2), 25);
  })
  it("Возводит x в степень 3" , ()=>{
    assert.equal(pow(5, 3), 125);
  })
})