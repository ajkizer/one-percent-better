const correctness = require("./countingChickens");



test('scores properly when arrays are equal', () => {
    let guesses = ["M", "?", "F"];
    let actual = ["M", "?", "F"];

    expect(correctness(guesses, actual)).toEqual(3)
})

test("If any of the values of the array containing Bob's guesses is not equal to either 'M', '?', or 'F', return 0", () => {
    let guesses = ["1"];
    let actual = ["1"];


    expect(correctness(guesses, actual)).toEqual(0);
})

test("If any of the values of the array containing the pro's guesses is not equal to either 'M', '?', or 'F', return 0", () => {
    let guesses = ["3"];
    let actual = ["3"];


    expect(correctness(guesses, actual)).toEqual(0);
})


test("returns 0 if length of arrays are not the same", () => {
    let guesses = ["M"];
    let actual = ["M", "F", "M"]

    expect(correctness(guesses, actual)).toEqual(0);
})

test("returns 0 if either array has a length of 0", () => {
    let guesses = [];
    let actual = [];

    expect(correctness(guesses, actual)).toEqual(0);
})


test("adds 0.5 points when Bob's guess value is '?' and is not equal to the corresponding value in the pro's guesses", () => {
    let guesses = ["?"];
    let actual = ["M"];


    expect(correctness(guesses, actual)).toEqual(0.5);
})

test("adds 0.5 points when Bob's guess value is not '?' and the pro's guess value is equal to '?'", () => {
    let guesses = ["M", "F"];
    let actual = ["?", "?"];


    expect(correctness(guesses, actual)).toEqual(1);
})

test("adds 1 when the values being compared are equal", () => {
    let guesses = ["?"];
    let actual = ["?"];

    expect(correctness(guesses, actual)).toEqual(1)
})