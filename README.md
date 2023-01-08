1. To use this tool first duplicate the google sheet provided here: https://docs.google.com/spreadsheets/d/1htwe1qgvrkbOnnqEEYnwqLP2-XhXMzIvA-nfZ62fKmU/edit?usp=sharing

2. After you have downloaded the sheet. Fill in your flower name's and information according to the instructions in the sheet. There are comments on the fields that need to be filled out. You will also need to add date for the first Monday of the week you would like to track. Do not edit any values associated with the days of the week or the final numbers towards the end of the sheet. 

3. Get an API Key over at  https://docs.pollenmobile.io in the API section. 

4. Take your API key and edit the getDailyAndWeeklyHexes.gs file by adding your Pollen Api Key.

4. In the google sheets platform. Go to the Extensions Menu, and click on Apps Script. You will need to copy add files to the project and copy/paste the code. 

5. Once you are finished creating the files, go back to the Extensions Menu in the google sheet and go to "Macros" and Import Macro. You should see a list of commands. You want to import the doGet() function. 

6. Once you have imported the Macro, go back to Extensions>Macros>doGet()

7. Enjoy your daily Hex Information!