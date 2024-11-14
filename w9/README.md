<h1> #1</h1>
<p1>When a user completes the form and clicks "submit," the event listener we set up is activated. However, our e.preventDefault(); prevents the form from submitting and refreshing the page. Instead, we utilize JavaScript to apply our custom logic, which involves calling the "start function" determineHouseholdPts(houseHoldMembers) to calculate points based on the number of household members. The total points are computed, and an object with all the relevant information is added to the cfpData array. This means that each time the form is submitted, the start function processes the current inputs and appends the results to the cfpData array. If the form is submitted multiple times, it will continue to add new objects to cfpData without clearing it. Finally, the renderTbl(cfpData); function is invoked to display the updated data in the table.

FEEDBACK
I really appreciate how you walked us through the code and explained everything. It made it so much easier for me to grasp how the code works and what each line is doing. Thank you!</p1>
<h2>#2</h2>
<p2> would we use const then getElementById and list all the alternative options?
<h3>LocalStorage is similar to the "Recent Tabs" or "Top Sites" feature we see when we open a new tab in Chrome. It keeps track of the websites we’ve visited recently, so even if we close and reopen the browser, that info is still there. This setup is all about making the browsing experience smoother by giving us quick access to sites we might want to revisit. Just like how the new tab page shows the recent sites, LocalStorage saves data for specific web apps, so when we come back, everything is right where we left it.</h3>