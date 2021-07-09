const change2dArray = require("./change2dArray");


test("Function does not mutate original array", () => {
    const array = [
        [1,  4, -5, -9,  3 ],
        [ 6, 1, -7,  4, -5 ],
        [ 3,  5,  1, -9, -1 ],
        [ 1,  5, -7, 1, -9 ],
        [-3,  2,  1, -5,  1 ]
      ];

    expect(change2dArray(array)).not.toBe(array)
    
});


test("Function produces the correct output", () => {
    const array = [
        [-1,  4, -5, -9,  3 ],
        [ 6, -4, -7,  4, -5 ],
        [ 3,  5,  0, -9, -1 ],
        [ 1,  5, -7, -8, -9 ],
        [-3,  2,  1, -5,  6 ]
    ]

    const expectedOutput = [  
        [ 0,  4, -5, -9,  3 ],
        [ 6,  0, -7,  4, -5 ],
        [ 3,  5,  1, -9, -1 ],
        [ 1,  5, -7,  0, -9 ],
        [-3,  2,  1, -5,  1 ]
    ]

    expect(change2dArray(array)).toEqual(expectedOutput)
})