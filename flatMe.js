
//A brand new function to flat a multidimensional array

const flatMe = (arrayToFlat,flattenArray) => {
    flattenArray = !flattenArray ? []: flattenArray;
    arrayToFlat.forEach((int)=>{
        Array.isArray(int) ? flattenArray.push(...flatMe(int)) : flattenArray.push(int);
    });
    return flattenArray;
};

const flatMeNoRecursion = function flatten(arr) {
    var result = [];
    var stack = arr;
    var first;
  
    while (stack.length > 0) {
      first = stack[0];
  
      if (Array.isArray(first)) {
        // Replace the nested array with its items
        Array.prototype.splice.apply(stack, [0, 1].concat(first));
      } else {
        result.push(first);
        // Delete the first item
        stack.splice(0, 1);
      }
    }
  
    return result;
  };

module.exports = flatMe;




