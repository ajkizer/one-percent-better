const countByX = require("./countByX");


test('returns array of numbers counting by the value passed into multiple parameter with a length equal to the countLength parameter', () => {
    const multiple = 2;
    const countLength = 5;
    
    expect(countByX(multiple, countLength)).toEqual([2,4,6,8,10])
})


test('returns empty array if multiple is equal to 0', () => {
    const multiple = 0;
    const countLength = 5;
    
    expect(countByX(multiple, countLength)).toEqual([]);
})

test('returns empty array if countLength is less than 1', () => {
    const multiple = 5;
    const countLength = 0.9;

    expect(countByX(multiple, countLength)).toEqual([]);
})