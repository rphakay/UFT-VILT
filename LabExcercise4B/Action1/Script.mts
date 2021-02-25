SystemUtil.CloseProcessByName"RumbaPage.exe"
SystemUtil.Run"c:\Users\Administrator\Desktop\RPA\CICS.rsdm"
TeWindow("TeWindow").TeScreen("Si").TeField("USERID").Set "SYSAD" @@ hightlight id_;_746_;_script infofile_;_ZIP::ssf16.xml_;_
TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetSecure "603800dc797c39cb8cd6b660be2b99fc" @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf17.xml_;_
TeWindow("TeWindow").TeScreen("Si").SendKey TE_ENTER @@ hightlight id_;_7958_;_script infofile_;_ZIP::ssf19.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey "ACCT" @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf20.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey TE_ENTER @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf22.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUEST TYPE").Set "M" @@ hightlight id_;_662_;_script infofile_;_ZIP::ssf24.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("ACCOUNT").Set "10001" @@ hightlight id_;_675_;_script infofile_;_ZIP::ssf25.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").SendKey TE_ENTER @@ hightlight id_;_9864_;_script infofile_;_ZIP::ssf27.xml_;_
MyDate=TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED_2").GetROProperty("text") @@ hightlight id_;_922_;_script infofile_;_ZIP::ssf29.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED_2").Set (MyDate+1)
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").SendKey TE_ENTER @@ hightlight id_;_13614_;_script infofile_;_ZIP::ssf32.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUESTED(protected)").Check CheckPoint("REQUESTED(protected)") @@ hightlight id_;_1842_;_script infofile_;_ZIP::ssf33.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf34.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_2").Click @@ hightlight id_;_11_;_script infofile_;_ZIP::ssf35.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_3").Click @@ hightlight id_;_15_;_script infofile_;_ZIP::ssf36.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_4").Click @@ hightlight id_;_19_;_script infofile_;_ZIP::ssf37.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_5").Click @@ hightlight id_;_34_;_script infofile_;_ZIP::ssf38.xml_;_
