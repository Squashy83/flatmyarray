
const flatMe = require('./flatMe');

test('array [[1,2,[3]],4] to be [1,2,3,4]', () => {
    expect(flatMe([[1,2,[3]],4])).toStrictEqual([1,2,3,4]);
  });

test('array [[1,2,[]],4] to be [1,2,4]', () => {
    expect(flatMe([[1,2,[]],4])).toStrictEqual([1,2,4]);
  });

test('array [1, 2, , 4, 5] to be [1,2,4,5]', () => {
    expect(flatMe([1, 2, , 4, 5])).toStrictEqual([1,2,4,5]);
  });

test('array [,,] to be []', () => {
    expect(flatMe([,,])).toStrictEqual([]);
  });

test('input {} to throw an exception', () => {
  try{
    flatMe({});
  } catch (e) {
    expect(e.message).toBe("arrayToFlat.forEach is not a function");
}
  });

test('input "" to throw an exception', () => {
  try{
      flatMe("");
   } catch (e) {
    expect(e.message).toBe("arrayToFlat.forEach is not a function");
  }
  });