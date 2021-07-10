//create a function with 2 parameters, one being multiple and the other being countLength.  Return an array with a length of countlength that includes the multiple as the first item, with each additional item being incremented by the multiple.  

//EX: countByX(2,3) should return [2,4,6], and countByX(3,3) should return [3,6,9].

//Edge cases: if user enters a count length of less than 1, return an empty array
//If user enters a multiple equal to 0, return an empty array


const countByX = (multiple, countLength) => {


    const array = []
    if(multiple === 0) return array;
    if(countLength <= 1) return array;


    for(let i = multiple; array.length < countLength; i += multiple){
        array.push(i)
    }

    return array;
}


module.exports = countByX