'SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "https://advantageonlineshopping.com"
For sendFeedback = 1 To 4 Step 1
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("ContactUS").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf1.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs").Select "#" & sendFeedback
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs").Select "#" & sendFeedback
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "mymail@gmail.com" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs")_;_script infofile_;_ZIP::ssf4.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "This is a test. I want those headphones" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs")_;_script infofile_;_ZIP::ssf5.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send btnundefined")_;_script infofile_;_ZIP::ssf6.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for contacting").Check CheckPoint("Thank you for contacting Advantage support.") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for contacting")_;_script infofile_;_ZIP::ssf7.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Click
	Browser("Advantage Shopping").Page("Advantage Shopping").Sync @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping")_;_script infofile_;_ZIP::ssf8.xml_;_
Next
'SystemUtil.CloseProcessByName "iexplore.exe"
Browser("Advantage Shopping").CloseAllTabs @@ hightlight id_;_394730_;_script infofile_;_ZIP::ssf9.xml_;_
