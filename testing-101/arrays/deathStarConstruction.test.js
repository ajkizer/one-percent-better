const deathStarConstruction = require("./deathStarConstruction");



test("returns the correct statement when station is destroyed", () => {
    let array = [[100,75,49],[20,15,20],[10,15,10],[50,50,20],[20,15,10],[20,15,10],[20,15,10],1];
    expect(deathStarConstruction(array)).toEqual('The station is destroyed! It needed 0 iron, 0 steel and 1 chromium for completion.')

    array = [[20,15,10],[20,15,0],[10,15,10],[0,50,2],[20,15,10],[20,15,10],[20,15,10],6]

    expect(deathStarConstruction(array)).toEqual('The station is destroyed! It needed 10 iron, 0 steel and 8 chromium for completion.')
})

test("returns the correct statement when station is completed", () => {
    let array = [[20,15,10],[20,15,20],[10,15,10],[50,50,20],[20,15,10],[20,15,10],[20,15,10],5];

    expect(deathStarConstruction(array)).toEqual("The station is completed!")

    array = [[20,15,10],[20,15,0],[10,15,10],[0,50,2],[20,15,10],[10,0,8],[20,15,10],7]

    expect(deathStarConstruction(array)).toEqual("The station is completed!")
})