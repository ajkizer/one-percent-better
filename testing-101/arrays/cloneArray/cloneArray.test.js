const cloneArray = require("./cloneArray");


test('properly clones an array', () => {
    const array = [1,2,3];
    expect(cloneArray(array)).toEqual(array);
});

test('does not return the same array', () => {
    const array = [1,2,3];
    expect(cloneArray(array)).not.toBe(array)
});