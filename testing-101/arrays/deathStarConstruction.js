const deathStarConstruction = (week) => {  
    const currentNeed = {
      iron: 100,
      steel: 75,
      chromium: 50
    }
    
    const itemsArr = Object.keys(currentNeed);
    
    for(let i = 0; i < week[7]; i++){
      itemsArr.map((item,idx) => {
        currentNeed[item] -= week[i][idx]
        if(currentNeed[item] < 0) {
          currentNeed[item] = 0
        }  
      })
    }
    
    const {iron, steel, chromium} = currentNeed;
    const destroyed = `The station is destroyed! It needed ${iron} iron, ${steel} steel and ${chromium} chromium for completion.`
    const safe = "The station is completed!";
    
    
    if(iron > 0 || steel > 0 || chromium > 0){
      return destroyed
    } else {
      return safe
    }
    
  }

  module.exports = deathStarConstruction