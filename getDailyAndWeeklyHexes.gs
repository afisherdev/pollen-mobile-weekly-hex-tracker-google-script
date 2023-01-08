function getDailyAndWeeklyHexes(flowerName, date, flowerRow, dayNumber) {

  const POLLEN_API_KEY = '44af3382-56b1-4b86-92ff-b6c293cc73fd'
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': POLLEN_API_KEY
    },
  }

  
  const url = 'https://api.pollenmobile.io/explorer/flower?flower='
  const secondURL = 'https://api.pollenmobile.io/explorer/daily-reward-status?date=' + date + '&device=' + flowerName
  const query = url + flowerName
  var response = UrlFetchApp.fetch(secondURL,params)
  var data = JSON.parse(response.getContentText())
  var weeklyHexesFulfilled = 0
  var dailyHexesMapped = 0
  var dailyUptime = 0
    if(data && data.items && data.items[0]){
      if(data.items[0].covered_hexes){
        dailyHexesMapped = Object.values(data.items[0].covered_hexes).length 
      }
    if(data.items[0].rewardable_hexes){
      weeklyHexesFulfilled = Object.values(data.items[0].rewardable_hexes).length
    }
    if(data.items[0].uptime){
      console.log(data.items[0].uptime)
      dailyUptime = 24 * data.items[0].uptime
      console.log(dailyUptime, "UPTIME")
    }
    }
  insertValuesForDates( flowerRow, dayNumber, dailyHexesMapped, weeklyHexesFulfilled, dailyUptime)
  weeklyHexesFulfilled = 0  
  dailyHexesMapped = 0
  dailyUptime = 0
}


