/*Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the experts choices to generate a correctness score.

Scoring Rules
When they agree, he gets 1 point.
When they disagree but one has said '?', he gets 0.5 points.
When they disagree completely, he gets 0 points.
*/



//Ex: correctness(['M', '?', 'M'], ['M', 'F', '?']) => 2 pts (first item is correct, 2nd item disagreement but "?", third item disagreement but "?".  1 + 0.5 + 0.5 = 2)



const correctNess = (guesses, expected) => {
    let points = 0;
    const guessOptions = ["M", "F", "?"]
    
    if(guesses.length !== expected.length) return points;
    if(guesses.length === 0 || expected.length === 0) return points;


    for(let i = 0; i < guesses.length; i++){

        if(!guessOptions.includes(guesses[i]) || !guessOptions.includes(expected[i])){
            points = 0;
            break
        }


        if(guesses[i] === expected[i]){
            points++
        } else {
            points += 0.5
        } 
    }

    return points

}


module.exports = correctNess;