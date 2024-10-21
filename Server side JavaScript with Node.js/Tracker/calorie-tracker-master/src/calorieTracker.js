const calculateWeightLostInAMonth = (cycling, running, swimming, extraCalorieInTake) => {
   let weightLostInAMonth = 0;

   // write logic here
   if (running == 0 || swimming == 0 || cycling == 0) {
      return (weightLostInAMonth = -1)
   }

   const totalBurnt = (cycling + running + swimming) * 4 * 2
   const netBurnt = totalBurnt - extraCalorieInTake * 30
   weightLostInAMonth = +parseFloat(netBurnt / 1000).toFixed(1)
   return weightLostInAMonth

}

module.exports = calculateWeightLostInAMonth

