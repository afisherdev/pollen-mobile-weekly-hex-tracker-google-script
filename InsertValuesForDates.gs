function insertValuesForDates(flowerRow, dayNumber, dailyHexesMapped, weeklyHexesFulfilled, dailyUptime) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var col = sheet.getRange("day_" + dayNumber).getColumn()
  console.log(flowerRow, "FLOWER ROW")
  if (col != -1) {
    sheet.getRange(flowerRow, col + 2).setValue(dailyHexesMapped)
    sheet.getRange(flowerRow, col + 3).setValue(weeklyHexesFulfilled)
    sheet.getRange(flowerRow, col).setValue(dailyUptime)
  }
}
