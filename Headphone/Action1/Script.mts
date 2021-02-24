Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").WaitProperty "innerhtml", 9.3, 10000 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3Very good 92 reviewsGreat")_;_script infofile_;_ZIP::ssf3.xml_;_
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist (20)
currentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("newScore").GetROProperty("innerhtml") )
If  currentScore >=  9.5 Then
Reporter.ReportEvent micPass, "Score OK", "Selection with Best Score"
Else
Reporter.ReportEvent micFail, "Score not OK", "Not a Good Score"
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf4.xml_;_
