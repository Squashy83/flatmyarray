
//A brand new function to flat a multidimensional array

const flatMe = arrayToFlat => {
    let flattenArray = [];
    arrayToFlat.forEach((int)=>{
        Array.isArray(int) ? flattenArray.push(...flatMe(int)) : flattenArray.push(int);
    });
    return flattenArray;
};

module.exports = flatMe;




