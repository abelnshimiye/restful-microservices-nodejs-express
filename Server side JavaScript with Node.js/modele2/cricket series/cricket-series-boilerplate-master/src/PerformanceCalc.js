
const PerformanceCalculator = (runs, balls) => {
      // Write the Logic here

      // Write the Logic here
      let battingAvg = runs / balls
      if (runs > 100 && balls < 50) {
            // additional 20% batting average
            return battingAvg + battingAvg * 0.2
      }
      if (runs > 50 && balls < 20) {
            // additional 20% batting average
            return battingAvg + battingAvg * 0.1
      }
      if (runs > 30 && balls < 15) {
            // additional 20% batting average
            return battingAvg + battingAvg * 0.01
      }
      if (runs < 30) {
            return battingAvg
      }
}

module.exports = { PerformanceCalculator }
