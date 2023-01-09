function retrieveDailyStats(){
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  const numberOfFlowers = sheet.getRange(3,1).getValue()  
  const flowers = sheet.getRange(4, 1, numberOfFlowers).getValues()
  const dates = sheet.getRange(1, 6, 1, 35).getDisplayValues()
  for( var flower in flowers){
    var datesCount = 0
    var rowNumber = parseInt(flower) + 4
    for (var row in dates){
      for ( var date in dates[row]){
        if(dates[row][date] !== ''){
          datesCount+=1
          getDailyAndWeeklyHexes(flowers[flower][0], dates[row][date], rowNumber, datesCount)
        }
      }
    }
  }
}
