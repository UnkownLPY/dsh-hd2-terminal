window.__ModuleLoader__.load({
	id: "dsh-hd2-terminal",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let React = require("react");
		let runtime_client = require("@deepseek-ai/dsh-client-runtime/client");

		const EMBLEM_DATA = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOTYsNDE3bDMsMTItMiw4LDMsMSw3LTZ2LThsLTItNSw4LTEtMS0ySDMwMVptMy0yMC0xLDVoMmwxLTRabTU4LTYyLTEsMmgtM2wxLTNabTQtNy0zLDF2LTRoM3YzWm00LTcsMiw0LTIsM3Y0bDItMSw4LTktMi0yaC03Wm0xLDE3LDMsM3YybC0xMiwxMiwxLDItNCw3LDMsMSw1LTZ2M2wtMSw0LDUtMSwyLTUsOS0yLTQsOCw1LDEsNS00LDQtOCwxNS0xMSwxLTUsNS0yLDMtMS01LTcsMS0yLDIsMSw1LTEsMi0xLTItMmgtOWwyLTMsOS0xLDItMi03LTMtNiwzaC0ybC01LDUtMiw2LDIsMiwxLDItMiwxLTcsNi0zLDEtMyw2LTgtMi0yLDFoLTJ2LTdsLTEtMlptMTYtMXY0bDMtMXYtNFptMjktOCw0LDF2NGgtMmwtMy00Wm0yLTE4LDQsM2g0bC0xLTRoLTZabS05LTEwLTUsMy0xLTEsMy0zLDItMVptMTItMjItMyw0LTEsNC01LDV2M2wyLDIsMy0yaDhsOSwzLDEtNC02LTMsOS01LDMtMSwyLTQtMy0zLTMsMS0xLTItNiw0aC0ybDEtMiw0LTNhMi44MzEsMi44MzEsMCwwLDAtMS0xQzQyNi40LDI3NC43LDQxNiwyNzksNDE2LDI3OVptLTMsMjMsMywzaDlsLTQtNFptMTUsOC0yLDJoNFptMTUsNSwzLTEtMywzdi0yWm0tMTcsMC01LDEzLDIsMyw1LTMtMi01LDItNGg0bDItNGgtOFptOS0xMS00LDRoM2wxLDJoM3YtMWwyLTNabTUtMTMtMSw4LDIsMSwyLTUsNS0yLTEtM1ptLTEtMTktMSw0LDIsMnY3aDVsMS0zLDYtMS02LTloLTdabTEzLDE3LDIsNyw0LTEtMS03aC00Wm0tMiwxMC0xLDMsMywyLDMtMlptMyw5LTYsMS0yLDIsNi0xWm0xMDksNzItMiwxdjZsLTMsNiwxLDloNGwtMi0xMCwyLTV2LTdabTAsMjUtMywyLDIsNywzLDIsNy0xdi0yaC00Wm0tNDMsOTgtMSwyaDJabS0zMSwxNS0zLDIsMiwzLDItM1ptLTQ1LDgwLTQsMiwzLDEsMy0xLTEtMmgtMVptMjUtOXY1bDIsMXYtMmwxLTItMS0yaC0yWm0tMiwxMHY5bDMtMSwyLTR2LTVoLTRabTExMSwyMC01LDRoM2wyLTJ2LTJaTTUxMS41LDIwMEM2NzkuNjcxLDIwMCw4MTYsMzM2LjEwNSw4MTYsNTA0UzY3OS42NzEsODA5LDUxMS41LDgwOSwyMDcsNjcxLjg5NCwyMDcsNTA0LDM0My4zMjksMjAwLDUxMS41LDIwMFpNNDc4LDc4M0MzMjcuNSw3NjYsMjY2LDY0NywyNjYsNjQ3Yy04Ni0xNDkuNS0xMS0yNzQtMTEtMjc0LDIuNDY3LDEuNTMzLDEsNywxLDdsNiw0LDMtMiwyLDEwLDQtNSw2LDQsNSwxMXY1bC01LTUtMiwzLDUsNCwzLDdoMmwxLDEsMy0zLTUtMywxLTgsNS01LDUtMSwxLTktMTItOS0yLTYsMTksMTUsNSwxOSwxMSw2LDYtM3YtNmwtNC00LDcsMiwxLTcsMy01LDE3LTE3cy00LjIyNC42NjYtNy0xYTE1Ljk0NiwxNS45NDYsMCwwLDEtNC00bDMtNiwxMS0zdi01bDUtNCwyLTEwLTEyLDItMSwzLTUtMy02LDUtOSwyLTMtNy05LDVoLTVsMS03LDExLTYsNi0xLDEtNiw1LTYsMTAtMTIsMS0zLDExLTZ2LTJsMTEsNSw1LDYsMiw2LDMsMyw0LTV2Nmw1LDMtNCwzLDUsMyw0LTIsNSwxLDMtNGgtNWwtNS00LDUtNCw0LDEtMi00aDZ2LTRzMS44MS0uOTUyLDMsMGE3LjczMSw3LjczMSwwLDAsMSwyLDNsNS0xLDMtMy02LTItNiwxaC00bC0zLTJoLTN2LTNoNWwyLTQsNi04LDUtMi0xLTItNC0xdi0zaDVsNi04LDQsMSwxNS02LDEtNCwzLDJ2LTNsNSwyLDItNSw0LTYsMSw2LDctOCw0NS0zLDktN2g1bC0xLTMtMTUtNSw3LTMsMywyLDctMi0yLTNINTAwdi02aDdsNS02LTMtNHM1My42LTIsMTAwLDE4Yy00LjgsMi4yLTUsMi01LDJsLTIsNEg1ODlsLTEwLTctMjIsMS01LTIsMSw3aC02bC01LDMtNS00LTEtMy02LTItNiw1LDYsMywyLTEsMyw1LDcsOCwxMiw3LDMtMmg0bDIsNSw1LDNoOGwtNSw3LDYsNywzLDEtMSw4LDEwLDEyLDQtMiw0LDEwLDcsMS03LDYtMi0yLTYsMSwzLDcsNiwxLTIsNi0yLDF2OGw0LDEwLTEzLTEyLTUsM3Y1bC01LTEtMiwzLDMsMyw0LDEsMiwxOSw0LDJoM2wtMywxMCw2LDNoNWwtNiw1LDEsM2gtM3Y1bDMsMiw3LDMsNS0yLDQsMS00LDMsNSw1LDEsMTAtNSwxdi04bC0zLTQtOC00LTEyLTEwLTIsMywzLDcsNyw2LDYsMnY0bC0xNSwydjRsMywxdjVsLTUsMS0yLDUtNC0yLTgsMTYtNC0yLDEtNC0yLTItMywzLDYsOS0xLDQtMy0yLTMsNiwyLDMtMSwzLTgtMSw0LDYtNCwxLTQtNS0yLTQtNi03LDksMiw3LTR2LTVsLTEzLTUtNS0xaC05bDMtNC0zLTEtOSwydjRsLTUtMS04LDh2NGgtM2wtNSw4LTMsNC0xLDYtOCw2LTEyLDYtMSwxNXY2bDMsMiwxMS03LDMsOHY2bDIsMywxLDYsMiwxLDItMyw0LTEsMy0xMyw1LTMtNS0xdi0zbDYsMiwxLTQtNS0zdi05bDQtNyw1LTIsMS0ydi02bDEtM2g1bDQsMXYzbC04LDExLTEsNSwxLDksNCwyLDE0LTUsNCw0LTMsNC04LDEtNSwyLDEsMywzLDF2NWwtMywyLTMtMy0zLDR2MTNsLTcsMi00LTMtMTAsNS02LTMtNiwxLTQtNCwzLTctMS02LTUsNHY4bDIsNi00LDItNC0yLTYsMi05LDloLTVsLTQsNS02LDMtNC01LTEsNUg0MjRsOCw3djVsMiwzLTYsMTItMjMtOS01LDEtMSw3LTQsMTAtNCwyLDEsNXY1bDMsM2g0bDMsN2g3bDgsMywxMi03di01bDE2LTksMS01LDQtMiwxMCw1LDktNSw2LDIsMyw2LDcsOWg1djRoNGw0LDd2NWw1LTMtMy00LDMtMyw0LDJ2LTNsLTEwLTUsMS0zLTYtMi0zLTYtNi02di01bDYtMiwxLDQsMiwyLDEtMyw3LDEwLDUsMiw4LDgsMSw4LDEwLDE1LDUsMSw0LTctNy04di00aDRsMy0zaDZsMiwyLDEwLTUtNS03LDMtOCwyLTksOS04LDIsMmg0bC0yLDQsNCwxLDIsMyw3LTYtNi00LDEyLTEwLDIsMy0zLDQsMiwxLTMsNCwyMCw4LDEsNCwxLDItNSw2aC01bC0xMSwyLTctMi0xMyw4LTYsMS0xLDItNSw0LTYsMS0yLDIsMywyLDEsMy0yLDEsNSw2LDksMyw1LTRoNmwzLDIsMTEtNiw0LDF2OGwtNCwxOS04LDMtNy0xLTksNS0yMC0yaC03bC0zLTMtOCwxLTUsNCwyLDctNywyLTE3LTctMS01LTEzLTItMTAtOCw2LTYtNS01LDItMy01LTItNSwyLTI1LTQtMjMsMy0xMi02di0zaC00bC03LDdoLTdsLTYsNnY3bC0xNSwzLTMtMy00LDVoLTVsLTUsNi0xMCw3djhsLTMsMTEtNSw1LDIsMTAsMSw1LDE3LDI1LDE5LDE4LDMyLDloMThsMTgsNiw2LDdoMTVsNiw2LTYsMTAsMTYsMTBaTTc3OCw2MDRoLTJsLTE3LTEwLTExLTE2LTEsNS0yLDUtNywyLDItNi0zLDEtNiwzaC05bC0xOSwxNy0xNCwxMC0xLTRoLTZsLTYsOC0xMiwzLTgtNS01LTEtNyw2LDYsN2g1czQuNiw0LjYwNiw1LDUsNC00LDQtNGw1LDYsOS00LDYtMTUsNCw2LDE2LTItNiwxNCwyLDUtOCwxMHY0bC0xMiwxMSwxLDMtMzgsMzEtNy0xMi0yMi0xMnYtNGwtNC02LTctMXYtM2wtMTQtMTAsMS04LTQsMy0xLDYtOC02LTIsMSwxMiwxNiw3LDUsMiw1LDcsNCw0LDExLDYsMSw4LDksMTcsMnY1aDEwbDI5LTIwLDEsNy02LDEzLTEzLDE4LTQwLDM2LDUsNFM3MzEuMiw3MjMuNiw3NzgsNjA0Wm00LTE0VjU3NWwtNC01di01bDUtMTUsMi0yNi0xLTMtMS0zLDQtOFY0OTlsMTEtMnMyLDU0LjAwNi0xNSw5NE02MjksMjM4bC0zLDQtMTItMS0xOC0yaC03bC01LDEsMiwyaDEzbDEsM2gtM2wyLDQsMTksMyw0LDQsMSwzLDUsMiw5LDExLDUsMiwxMSw0LDEzLDhoM2wtMS0yLDEtMmgybDEtMi03LTUsNS01LDEyLDEtMi0zLTItMS0zLTEtNSwyaC04bC0yLTIsOS00UzY1NS44LDI0OS4yLDYyOSwyMzhabS01LDI5NS05LDE5LDgsMTAsMTEsNC0yLDgsNywxMCwxNi02LTgtMTMsNi03LTYtNWgtNWwtMSwxLTMsMS0xMC03LTEtMiw3LTYtMS04Wk00NDEsNDkzbC01LDh2MmwtMiwxLDEsMmgydjNsLTMsMyw1LDEtMSwzLDEsMXYzbC0xLDJoLTV2M2wtMSwyaC0zdjJsNiwxdjJsLTUsMS01LDJ2MWgzbDEsMSwyLTFoNWwxLDEsMS0xLDMsMWgybDIsMWgydi00bDQtM3YtMmwtMS0xaC00bDItMy0yLTIsMi0yLTMtNC0xLTctMy0ydi0yaDNsNC01LTEtMWgtNXYtMmwzLTMtMS0yaC0zWm0tMTUsMTQtNCw0LTEtMWgtMmwtMiw0LDIsMXYyaC0ybC00LDMsMSwyLDEsMWgxMGwyLTN2LTVsNC0xdi00Wm0tOS03MSw1LTEtMSw0LDUsMWgzdjJoNnY1bDEsMXYzbC05LDEtNy0xLTQtNS0yLTJoMmwyLTdabS0zMi01NS00LDYtNiw1LTQsNy01LDVoLTJ2OGwyLDEtMiwzLDEsNSwxLDIsOS03aDlsOS01aDJsMSw0LDIsMSwxNi00LDQsMyw4LDMsNC0zdi00bDUtMywxLDYsMy0xdi01aDJsMi0ydi00aDR2LTNsNiwxLDQtN3YtNWw2LTEtMS0zLDYtNSwxLTRoM2wxLDIsMy0yLDUtMS0xLTQtNywxLDItMy00LTMsNS0yLTEtNCwzLDF2LTNsLTktNi01LDEtMS02LTEzLTUtMiwyLTQtMS0yLTNoLTRsLTIsNi0zLTQtNSw0LDIsMywxLDMtMiwzLTksOS0zLDJoLTNsLTYsNCwyLDMtMSwyLTQsM3YtNWgtMmwtNCwydjJoM3YzbC01LDEtMy0yWm00OS02MWEyMi44OTEsMjIuODkxLDAsMCwwLTMsNiwxMC4xODMsMTAuMTgzLDAsMCwwLDAsNWg1bDQsMyw1LTMsNSw2LDExLDUsNC03LTYtMiwyLTMtMi02LTQsMSwxLDUsMSwyaC0ybC01LTQsMS0zLDYtNi0xLTMtOCwxLTQsM3YybDUsMnYyaC00bC0yLTItNSwyLTEtMiwyLTFabTc0LDE4OC0yLDQsMy0xWk01MTgsNjFWMTg3YTE3Mi43MTMsMTcyLjcxMywwLDAsMSwyMSwxVjEyNWw4LTQtNi01MVptNDEsNTZ2NzRjMTQuNjg1LDIuMTc1LDI3LDUsMjcsNWwtOC03MlpNNTA1LDYxVjE4N2ExNzIuNzEzLDE3Mi43MTMsMCwwLDAtMjEsMVYxMjVsLTgtNCw2LTUxWm0tNDEsNTZ2NzRjLTE0LjY4NSwyLjE3NS0yNyw1LTI3LDVsOC03MlpNODQzLDQ1MmwtMTMtNXM0MSwxNzMuMS0xMTIsMzAyYy04NS4zNSw3MC43NS0xNzksNzMtMTc5LDczLTcyLjI1LTIuMjUtMTEzLDE3LTExMywxNy02OSwyNC05OSw4Mi05OSw4MmwxMiw0YzM2LjktNTEuMyw4NS02NSw4NS02NSw0Ny0xNy40LDg4LTEzLDg4LTEzczExOC4wNTksNi4yODUsMjIyLTg3Qzg4My4xMDcsNjI0Ljg4Miw4NDMsNDUyLDg0Myw0NTJaTTY1My4xMDcsODcwLjczOUM2ODIuNiw4OTUuMDksNjk2LDkyMSw2OTYsOTIxbC0xMiw0YTE4Ny4yLDE4Ny4yLDAsMCwwLTQ5LjMxNS00Ny4zNjJNNDQ5LjU1LDgxNy40OTRDNDE0LjU4Nyw4MTAuNTc0LDM1OC4xODIsNzkzLjA4NSwzMDUsNzQ5LDE1Miw2MjAuMSwxOTMsNDQ3LDE5Myw0NDdsLTEzLDVTMTM5Ljg5Myw2MjQuODgyLDI4OSw3NjBjNDEuNSwzNy4yNDgsODQuNTQ5LDYxLjA2NCwxMjIuODQ4LDcwLjg1OUM0MzMuNCw4MjEuMDE4LDQzNC4yLDgyMS42OCw0NDkuNTUsODE3LjQ5NFpNODg0LDUwM2wtMTEtNGMtMC41LDE0Mi4yNS04MywyMzEtODMsMjMxUzY4OS4wODMsODYyLjUsNTEyLDg2MGMtNTEuMjUtMy4yNS04NiwxNC04NiwxNCwzMi4yNSw5LDg2LDEwLDg2LDEwLDE5MC43NS0uMjUsMjkzLTE0NiwyOTMtMTQ2Qzg5Myw2MzAuNzUsODg0LDUwMyw4ODQsNTAzWk0zOTEuMiw4NDAuMjI1QzI4Ny45NDEsODAzLjk1MSwyMzMsNzMwLDIzMyw3MzBzLTgyLjUtODguNzUtODMtMjMxbC0xMSw0cy05LDEyNy43NSw3OSwyMzVjMCwwLDUyLjA3LDc0LjIyMiwxNTEuMjEyLDExNi44MjVDMzc5LjQyOSw4NDcuNDk0LDM4Mi4yMTYsODQ0Ljc4NSwzOTEuMiw4NDAuMjI1Wk01MTEuOTYsOTI0LjgzNGMxMC40NDQsMjIuMDMyLjA3NSwwLjA2OCwxMC4zNTEsMjIuMSwyMy4wNTYsMi4yNi0uMTY3LTAuMDQ5LDIzLjE0MywyLjI5NS0xNS45MjMsMTcuNC0uMTU0LjA0Ni0xNS45MjUsMTcuMzYzLDMuMTA5LDIxLjk5LS4wNTkuMTg3LDMuMTY5LDIyLjAyNS0yMC43MjktMTAuMjY5LS4wMi4wMjItMjAuNjY0LTEwLjMzMS0yMC43MzgsMTAuMzUzLDAsLjA2Mi0yMC43MzgsMTAuMzMxLDMuMTQzLTIxLjgzOC4wMjYtLjAxOCwzLjE2OS0yMi4wMjUtMTUuODU2LTE3LjQzNS4wMTUsMC4wNzItMTUuOTI1LTE3LjM2MywyMi41MjQtMi4zOTMuMDExLDAuMDUyLDIyLjYyNi0yLjM2OUM1MTIuMDQzLDkyNC43OTIsNTAxLjE2Nyw5NDYuODE2LDUxMS45Niw5MjQuODM0Wm0tODguODM4LDUuMzgyYzkuMTE5LDE5LjIzNi4wNjYsMC4wNTksOS4wMzcsMTkuMjk1LDIwLjEzLDEuOTczLS4xNDYtMC4wNDQsMjAuMjA2LDItMTMuOSwxNS4xOTMtLjEzNC4wNDEtMTMuOSwxNS4xNiwyLjcxNSwxOS4yLS4wNTEuMTYzLDIuNzY3LDE5LjIyOS0xOC4xLTguOTY1LS4wMTcuMDItMTguMDQxLTkuMDE5LTE4LjEwNyw5LjAzOSwwLC4wNTQtMTguMTA3LDkuMDE5LDIuNzQ1LTE5LjA2Ni4wMjMtLjAxNSwyLjc2Ny0xOS4yMjktMTMuODQzLTE1LjIyMy4wMTQsMC4wNjMtMTMuOS0xNS4xNiwxOS42NjYtMi4wOS4wMSwwLjA0NSwxOS43NTQtMi4wNjhDNDIzLjE5NCw5MzAuMTgsNDEzLjcsOTQ5LjQwOSw0MjMuMTIyLDkzMC4yMTZabTE3Ny4wOTIsMGM5LjExOSwxOS4yMzYuMDY2LDAuMDU5LDkuMDM3LDE5LjI5NSwyMC4xMywxLjk3My0uMTQ2LTAuMDQ0LDIwLjIwNiwyLTEzLjksMTUuMTkzLS4xMzQuMDQxLTEzLjksMTUuMTYsMi43MTUsMTkuMi0uMDUxLjE2MywyLjc2NywxOS4yMjktMTguMS04Ljk2NS0uMDE3LjAyLTE4LjA0MS05LjAxOS0xOC4xMDcsOS4wMzksMCwuMDU0LTE4LjEwNyw5LjAxOSwyLjc0NS0xOS4wNjYuMDIzLS4wMTUsMi43NjctMTkuMjI5LTEzLjg0My0xNS4yMjMuMDE0LDAuMDYzLTEzLjktMTUuMTYsMTkuNjY2LTIuMDkuMDEsMC4wNDUsMTkuNzU0LTIuMDY4QzYwMC4yODcsOTMwLjE4LDU5MC43OSw5NDkuNDA5LDYwMC4yMTQsOTMwLjIxNlptLTI1My40ODgsNS45MzljNywxNC43NjUuMDUsMC4wNDUsNi45MzcsMTQuODEsMTUuNDUxLDEuNTE1LS4xMTItMC4wMzMsMTUuNTEsMS41MzgtMTAuNjcyLDExLjY2Mi0uMS4wMzEtMTAuNjczLDExLjYzNiwyLjA4NCwxNC43MzctLjAzOS4xMjYsMi4xMjQsMTQuNzYtMTMuODkyLTYuODgxLS4wMTMuMDE1LTEzLjg0OC02LjkyMy0xMy45LDYuOTM4LDAsLjA0Mi0xMy45LDYuOTIzLDIuMTA2LTE0LjYzNC4wMTctLjAxMSwyLjEyMy0xNC43Ni0xMC42MjYtMTEuNjg0LjAxMSwwLjA0OS0xMC42NzItMTEuNjM2LDE1LjA5NS0xLjYuMDA3LDAuMDM1LDE1LjE2My0xLjU4OEMzNDYuNzgyLDkzNi4xMjcsMzM5LjQ5Miw5NTAuODg3LDM0Ni43MjYsOTM2LjE1NVptLTY3LjUxOCwzLjczYzUuOTU0LDEyLjU1OS4wNDMsMC4wMzksNS45LDEyLjYsMTMuMTQzLDEuMjg4LS4wOTUtMC4wMjksMTMuMTkyLDEuMzA4LTkuMDc3LDkuOTE5LS4wODcuMDI2LTkuMDc4LDkuOSwxLjc3MywxMi41MzUtLjAzMy4xMDcsMS44MDcsMTIuNTU1LTExLjgxNi01Ljg1My0uMDExLjAxMy0xMS43NzktNS44ODktMTEuODIyLDUuOSwwLC4wMzYtMTEuODIyLDUuODg5LDEuNzkyLTEyLjQ0OC4wMTUtLjAxLDEuODA3LTEyLjU1NS05LjAzOS05LjkzOS4wMDgsMC4wNDEtOS4wNzgtOS45LDEyLjgzOS0xLjM2NS4wMDYsMC4wMjksMTIuOS0xLjM1MUMyNzkuMjU2LDkzOS44NjEsMjczLjA1Niw5NTIuNDE2LDI3OS4yMDgsOTM5Ljg4NVptNDAzLjkzMy0zLjczYzcsMTQuNzY1LjA1MSwwLjA0NSw2LjkzNywxNC44MSwxNS40NTIsMS41MTUtLjExMi0wLjAzMywxNS41MSwxLjUzOC0xMC42NzEsMTEuNjYyLS4xLjAzMS0xMC42NzIsMTEuNjM2LDIuMDg0LDE0LjczNy0uMDQuMTI2LDIuMTI0LDE0Ljc2LTEzLjg5Mi02Ljg4MS0uMDE0LjAxNS0xMy44NDktNi45MjMtMTMuOSw2LjkzOCwwLC4wNDItMTMuOSw2LjkyMywyLjEwNy0xNC42MzQuMDE4LS4wMTEsMi4xMjQtMTQuNzYtMTAuNjI2LTExLjY4NC4wMSwwLjA0OS0xMC42NzMtMTEuNjM2LDE1LjEtMS42LjAwOCwwLjAzNSwxNS4xNjQtMS41ODhDNjgzLjIsOTM2LjEyNyw2NzUuOTA4LDk1MC44ODcsNjgzLjE0MSw5MzYuMTU1Wm02MS42LDMuNzNjNS45NTMsMTIuNTU5LjA0MywwLjAzOSw1LjksMTIuNiwxMy4xNDMsMS4yODgtLjEtMC4wMjksMTMuMTkzLDEuMzA4LTkuMDc3LDkuOTE5LS4wODguMDI2LTkuMDc4LDkuOSwxLjc3MiwxMi41MzUtLjAzNC4xMDcsMS44MDYsMTIuNTU1LTExLjgxNi01Ljg1My0uMDExLjAxMy0xMS43NzktNS44ODktMTEuODIyLDUuOSwwLC4wMzYtMTEuODIyLDUuODg5LDEuNzkyLTEyLjQ0OC4wMTUtLjAxLDEuODA3LTEyLjU1NS05LjAzOS05LjkzOS4wMDksMC4wNDEtOS4wNzgtOS45LDEyLjg0LTEuMzY1LjAwNiwwLjAyOSwxMi45LTEuMzUxQzc0NC43ODksOTM5Ljg2MSw3MzguNTg5LDk1Mi40MTYsNzQ0Ljc0Miw5MzkuODg1WiIvPgo8L3N2Zz4K"
		const HELLDIVER_DATA = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIiPgogIDxkZXNjPlRyYWNlZCBieSBEb2dvMzE0PC9kZXNjPgogIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmUiIGQ9Ik0yNzAgMzUzM2gyNTZ2MjU2SDI3MHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzAgLTM1MzMpIi8+CiAgPHBhdGggZD0ibTI1NiAwIDIwMCA2Ny0xNCAxOTggNjIgNjQtODMgOTktNTUtMjItMjMgODEtODcgMjUtODctMjUtMjMtODEtNTUgMjItODMtOTkgNjItNjRMNTYgNjd6TTE0OCAyNDhjLTI4LjE0OCAwLTUxIDIyLjg1Mi01MSA1MXMyMi44NTIgNTEgNTEgNTEgNTEtMjIuODUyIDUxLTUxLTIyLjg1Mi01MS01MS01MW0xMDggMTAyLTMzIDUwIDE1LjkwNCAxNS45MDRMMjU2IDM5MGwxNy4wOTYgMjUuOTA0TDI4OSA0MDB6bTEwOC0xMDJjLTI4LjE0OCAwLTUxIDIyLjg1Mi01MSA1MXMyMi44NTIgNTEgNTEgNTEgNTEtMjIuODUyIDUxLTUxLTIyLjg1Mi01MS01MS01MSIgc3R5bGU9ImZpbGw6I2ZmZTgwMCIgdHJhbnNmb3JtPSJzY2FsZSguNSkiLz4KPC9zdmc+Cg=="

		const ICON_RECON = 'PHN2ZyB2aWV3Qm94PSIwIDAgMTY2IDE2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIiPjxkZXNjPlRyYWNlZCBieSBEb2dvMzE0PC9kZXNjPjxnIHRyYW5zZm9ybT0ic2NhbGUoLjE1MzcpIj48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNMCAwaDEwODB2MTA4MEgweiIvPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZD0iTTAgMGgxMDgwdjEwODBIMHoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTQzNCA0NGM0Ni4zNjEgMCA4NCAzNy42MzkgODQgODRzLTM3LjYzOSA4NC04NCA4NC04NC0zNy42MzktODQtODQgMzcuNjM5LTg0IDg0LTg0bTAgNTUuNjYzLTYuMDcyIDMuMDM2LS4wMDguMDA0Yy0uMjY2LTguOTg1LTcuNjQzLTE2LjE5Ny0xNi42OTEtMTYuMTk3LTkuMjE2IDAtMTYuNjk5IDcuNDgzLTE2LjY5OSAxNi42OTkgMCAzLjY3MiAxLjE4OCA3LjA2OCAzLjE5OSA5LjgyNi01Ljg3NSAxLjMwMS0xMS45MTYgOC4zNDQtMTMuMzE5IDEzLjk1Ny0xLjU1MyA2LjIxLTQuMDQ5IDE3LjIwNS00LjA0OSAyMS4yNTMgMCAxMi4yODggOS45NzcgMjIuMjY1IDIyLjI2NiAyMi4yNjUgMTAuNzUgMCAxOS43MzItNy42MzYgMjEuODExLTE3Ljc3Ni4yOTctMS40NSAzLjQ5LTE2LjYzNCAzLjQ5LTE2LjYzNGw2LjA3Mi0yLjAyNCA2LjA3MiAyLjAyNHMzLjE5MyAxNS4xODQgMy40OSAxNi42MzRjMi4wNzkgMTAuMTQgMTEuMDYxIDE3Ljc3NiAyMS44MTEgMTcuNzc2IDEyLjI4OSAwIDIyLjI2Ni05Ljk3NyAyMi4yNjYtMjIuMjY1IDAtNC4wNDgtMi40OTYtMTUuMDQzLTQuMDQ5LTIxLjI1My0xLjQwMy01LjYxMy03LjQ0NC0xMi42NTYtMTMuMzE5LTEzLjk1N2ExNi42MiAxNi42MiAwIDAgMCAzLjE5OS05LjgyNmMwLTkuMjE2LTcuNDgzLTE2LjY5OS0xNi42OTktMTYuNjk5LTkuMDQ4IDAtMTYuNDI1IDcuMjEyLTE2LjY5MSAxNi4xOTdsLS4wMDgtLjAwNHptMzEuMzczIDM0LjQwOWM3LjgyIDAgMTQuMTY5IDYuMzQ5IDE0LjE2OSAxNC4xNjlzLTYuMzQ5IDE0LjE2OS0xNC4xNjkgMTQuMTY5Yy03LjgxOSAwLTE0LjE2OC02LjM0OS0xNC4xNjgtMTQuMTY5czYuMzQ5LTE0LjE2OSAxNC4xNjgtMTQuMTY5bS02Mi43NDYgMGM3LjgxOSAwIDE0LjE2OCA2LjM0OSAxNC4xNjggMTQuMTY5cy02LjM0OSAxNC4xNjktMTQuMTY4IDE0LjE2OWMtNy44MiAwLTE0LjE2OS02LjM0OS0xNC4xNjktMTQuMTY5czYuMzQ5LTE0LjE2OSAxNC4xNjktMTQuMTY5IiBzdHlsZT0iZmlsbDojZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI1MCAtMjgyLjg1NylzY2FsZSg2LjQyODU3KSIvPjwvZz48L2c+PC9zdmc+'
		const ICON_LIBERATION = 'PHN2ZyB2aWV3Qm94PSIwIDAgMTY2IDE2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIiPjxkZXNjPlRyYWNlZCBieSBEb2dvMzE0PC9kZXNjPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmUiIGQ9Ik0wIDBoMTA4MHYxMDgwSDB6IiB0cmFuc2Zvcm09InNjYWxlKC4xNTM3KSIvPjxwYXRoIGQ9Ik00MzQgNDRjNDYuMzYxIDAgODQgMzcuNjM5IDg0IDg0cy0zNy42MzkgODQtODQgODQtODQtMzcuNjM5LTg0LTg0IDM3LjYzOS04NCA4NC04NG0wIDI1LjMwMWMtMzIuMzk3IDAtNTguNjk5IDI2LjMwMi01OC42OTkgNTguNjk5czI2LjMwMiA1OC42OTkgNTguNjk5IDU4LjY5OSA1OC42OTktMjYuMzAyIDU4LjY5OS01OC42OTlTNDY2LjM5NyA2OS4zMDEgNDM0IDY5LjMwMW0tMzYuMzA5IDYxLjczNWgtMTEuMjU3di02LjA3MmgxMS4yNTdjMS40NjItMTcuNjg5IDE1LjU4NC0zMS44MTEgMzMuMjczLTMzLjI3M1Y4MC40MzRoNi4wNzJ2MTEuMjU3YzE3LjY4OSAxLjQ2MiAzMS44MTEgMTUuNTg0IDMzLjI3MyAzMy4yNzNoMTEuMjU3djYuMDcyaC0xMS4yNTdjLTEuNDYyIDE3LjY4OS0xNS41ODQgMzEuODExLTMzLjI3MyAzMy4yNzN2MTEuMjU3aC02LjA3MnYtMTEuMjU3Yy0xNy42ODktMS40NjItMzEuODExLTE1LjU4NC0zMy4yNzMtMzMuMjczTTQzNCA5Ny42MzljLTE2Ljc1NyAwLTMwLjM2MSAxMy42MDQtMzAuMzYxIDMwLjM2MXMxMy42MDQgMzAuMzYxIDMwLjM2MSAzMC4zNjEgMzAuMzYxLTEzLjYwNCAzMC4zNjEtMzAuMzYxUzQ1MC43NTcgOTcuNjM5IDQzNCA5Ny42MzltMCAyMi4yNjVhOC4xIDguMSAwIDAgMSA4LjA5NiA4LjA5NiA4LjEgOC4xIDAgMCAxLTguMDk2IDguMDk2IDguMSA4LjEgMCAwIDEtOC4wOTYtOC4wOTYgOC4xIDguMSAwIDAgMSA4LjA5Ni04LjA5NiIgc3R5bGU9ImZpbGw6I2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0NS44MjUgLTQzLjQ3NSlzY2FsZSguOTg4MDcpIi8+PC9zdmc+'
		const ICON_URGENT = 'PHN2ZyB2aWV3Qm94PSIwIDAgMTY2IDE2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIiPjxkZXNjPlRyYWNlZCBieSBEb2dvMzE0PC9kZXNjPjxnIHRyYW5zZm9ybT0ic2NhbGUoLjE1MzcpIj48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNMCAwaDEwODB2MTA4MEgweiIvPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZD0iTTAgMGgxMDgwdjEwODBIMHoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTQzNCA0NGM0Ni4zNjEgMCA4NCAzNy42MzkgODQgODRzLTM3LjYzOSA4NC04NCA4NC04NC0zNy42MzktODQtODQgMzcuNjM5LTg0IDg0LTg0bTAgMzAuMzYxLTQ3LjU2NiA5LjEwOXY3Ny45MjhMNDM0IDE4OS43MzVsNDcuNTY2LTI4LjMzN1Y4My40N3ptMCAxMS4xMzNMNDcyLjQ1OCA5MXY2NS4yMjJMNDM0IDE3OS4xMzNsLTM4LjQ1OC0yMi45MTFWOTF6bS01LjUyOSA4NC40NTUgNS41MjkgMy4yOTQgMzMuMzk4LTE5Ljg5N1Y5NS4xODNMNDM0IDkwLjY0NmwtMzMuMzk4IDQuNTM3djU4LjE2M2wyMC4wMzggMTEuOTM4LTEwLjkyOS01Ni4yMjggNi42NzEtMS4yOTd6bS03Ljc1OC02MS4xMjVjMi40Mi0xLjE5OCA2Ljc5Mi0zLjA4OSAxMC4yNTEtMy4wODkgNS4wNiAwIDcuMDg0IDIuMDI0IDEyLjE0NCAyLjAyNHMxMC4xMjEtMy4wMzYgMTAuMTIxLTMuMDM2bDMuMDM2IDIxLjI1M3MtNC4wNDggMy4wMzYtMTAuMTIgMy4wMzZjLTYuMDczIDAtNi4wNzMtMi4wMjQtMTIuMTQ1LTIuMDI0LTMuNzk5IDAtNy4yMDIgMS41ODQtOS4yMTcgMi43NzF6IiBzdHlsZT0iZmlsbDojZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI1MCAtMjgyLjg1NylzY2FsZSg2LjQyODU3KSIvPjwvZz48L2c+PC9zdmc+'
		const ICON_REINFORCE = 'PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIiPjxkZXNjPlRyYWNlZCBieSBEb2dvMzE0PC9kZXNjPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmUiIGQ9Ik0yOS02MDFoMjYxdjI2MUgyOXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOC40NDQgNTg5LjQ4NylzY2FsZSguOTgwODQpIi8+PHBhdGggZD0iTTE1MjYgMTAxaDh2MzJsLTQwIDMyLTQwLTMydi0zMmg4YzAtMTcuNjYxIDE0LjMzOS0zMiAzMi0zMnMzMiAxNC4zMzkgMzIgMzJtLTU2IDI0aDEybDQtOGgxNmw0IDhoMTJ2LTI0aC00OHptOTAtNTAuMDI4aC0yNy45NzJ2LTEySDE1NjBWMzVoMTJ2MjcuOTcyaDI3Ljk3MnYxMkgxNTcydjI3Ljk3M2gtMTJ6TTE1NDYgMTg5aC0xMDRsLTE2LTE2di0xNmgzMmwxNiAxNmg0MGwxNi0xNmgzMnYxNnoiIHN0eWxlPSJmaWxsOiMwYTBjMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzgxLjk5NSAxNS4wMDIpIi8+PHBhdGggZD0iTTUwOCAyMzJoLTMybDMyLTMyem0tMjA4IDB2LTMybDMyIDMyek01MDggMjR2MzJsLTMyLTMyem0tMjA4IDBoMzJsLTMyIDMyeiIgc3R5bGU9ImZpbGw6I2M5YjI2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3NS45OTggLjAwMikiLz48L3N2Zz4='

		let runtimeCtx = null

		const TOKENS = {
			'--dsw-alias-bg-base': { light: '#F1EDDF', dark: 'rgba(8, 11, 16, 0.90)' },
			'--dsw-alias-bg-layer-1': { light: '#FBF8ED', dark: '#0E131C' },
			'--dsw-alias-bg-layer-2': { light: '#FFFFFF', dark: '#141A26' },
			'--dsw-alias-bg-overlay': { light: '#FBF8ED', dark: '#0B1017' },
			'--dsw-alias-border-l1': { light: '#DDD5BF', dark: '#232C3A' },
			'--dsw-alias-border-l2': { light: '#B5AC91', dark: '#3A4657' },
			'--dsw-alias-brand-primary': { light: '#1F4E8C', dark: '#FFE710' },
			'--dsw-alias-label-primary': { light: '#1C2430', dark: '#E9EBEE' },
			'--dsw-alias-label-secondary': { light: '#5A6472', dark: '#9AA5B5' },
			'--dsw-alias-state-error-primary': { light: '#C92A2A', dark: '#FF4E45' },
			'--dsw-alias-state-success-primary': { light: '#178A4C', dark: '#57E389' },
			'--dsw-alias-state-warn-primary': { light: '#B45309', dark: '#FFB224' },
			'--dsw-specific-sidebar-fill': { light: '#EAE4D1', dark: 'rgba(10, 13, 19, 0.92)' },
		}

		const PROPAGANDA = [
			'FREEDOM IS NOT FREE — EARN IT',
			'REPORT SUSPICIOUS ACTIVITY TO YOUR DEMOCRACY OFFICER',
			'MANAGED DEMOCRACY IS THE ONLY TRUE DEMOCRACY',
			'A CUP OF LIBER-TEA BREWS FREEDOM',
			'REMEMBER SUPER EARTH. REMEMBER YOUR DUTY',
			'SWEET LIBERTY — SERVE IT HOT',
			'TREASON IS TEMPORARY. LIBERTY IS ETERNAL',
			'EVERY BULLET FIRED IS A VOTE FOR FREEDOM',
			'THE MINISTRY OF TRUTH APPROVES THIS MESSAGE',
			'FOR SUPER EARTH — 为了超级地球',
		]

		const TICKER_ITEMS = [
			'SUPER EARTH COMMAND // UPLINK STABLE',
			'DEMOCRACY OFFICER ON DUTY — REPORT ALL TREASON',
			'LIBERTY DAY DRILL: EVERY DAY',
			'THE TERMINID MENACE REMAINS AT LARGE',
			'AUTOMATONS CANNOT VOTE. YOU CAN',
			'MINISTRY OF TRUTH: DOUBT IS THE FIRST STEP TO TREASON',
			'SUPER CITIZENS ENJOY SUPER OPPORTUNITIES',
			'WAR BONDS FUND FREEDOM',
			'IF YOU SEE SOMETHING, REPORT SOMETHING',
			'FREEDOM REQUIRES SACRIFICE — AND TAXES',
		]

		function tickerText() {
			return TICKER_ITEMS.map(function (t) { return '★ ' + t + ' ' }).join('  ')
		}

		let briefingOpen = false
		const briefingListeners = new Set()
		function subscribeBriefing(fn) { briefingListeners.add(fn); return () => { briefingListeners.delete(fn) } }
		function getBriefingOpen() { return briefingOpen }
		function toggleBriefing() {
			briefingOpen = !briefingOpen
			briefingListeners.forEach((fn) => { try { fn() } catch (_e) {} })
		}
		function useBriefingOpen() {
			const [open, setOpen] = React.useState(getBriefingOpen())
			React.useEffect(() => subscribeBriefing(() => setOpen(getBriefingOpen())), [])
			return open
		}

		function pad2(n) { return String(n).padStart(2, '0') }

		function SestClock() {
			const [now, setNow] = React.useState(() => new Date())
			React.useEffect(() => {
				if (runtimeCtx === null) return undefined
				return runtimeCtx.interval(() => setNow(new Date()), 1000)
			}, [])
			const shifted = new Date(now.getTime() + 2 * 3600 * 1000)
			const h = shifted.getUTCHours()
			const isDay = h >= 6 && h < 18
			const time = pad2(h) + ':' + pad2(shifted.getUTCMinutes()) + ':' + pad2(shifted.getUTCSeconds())
			const sestYear = now.getFullYear() + 160
			const date = pad2(shifted.getUTCDate()) + '/' + pad2(shifted.getUTCMonth() + 1) + '/' + sestYear
			const glyph = isDay
				? React.createElement('svg', { className: 'hd2-sest-icon', viewBox: '0 0 256 256', width: 9, height: 9, 'aria-label': 'day' },
						React.createElement('path', { d: 'M0,0V256H256V0ZM197,45l14,14L182,88,168,74ZM118,21h20V61H118ZM59,45,88,74,74,88,45,59ZM21,118H61v20H21Zm38,93L45,197l28-28,14,14Zm79,24H118V195h20Zm-10-63a44,44,0,1,1,44-44A44,44,0,0,1,128,172Zm69,39-28-28,14-14,28,28Zm38-73H195V118h40Z', fill: 'currentcolor' }))
				: React.createElement('span', { className: 'hd2-sest-moon', 'aria-label': 'night' }, '☾')
			return React.createElement('span', { className: 'hd2-sest' },
				React.createElement('span', { className: 'hd2-sest-label' }, 'SEST'),
				time,
				glyph,
				React.createElement('span', { className: 'hd2-sest-date' }, date),
			)
		}

		function Propaganda() {
			const [i, setI] = React.useState(0)
			React.useEffect(() => {
				if (runtimeCtx === null) return undefined
				return runtimeCtx.interval(() => setI((v) => (v + 1) % PROPAGANDA.length), 4200)
			}, [])
			return React.createElement('span', { className: 'hd2-propaganda', key: i }, PROPAGANDA[i])
		}

		function Watermark() {
			return React.createElement('div', { className: 'hd2-watermark' },
				React.createElement('div', { className: 'hd2-flag-badge' },
					React.createElement('img', { src: EMBLEM_DATA, alt: '', draggable: false }),
				),
			)
		}

		function InfoPanel() {
			const stats = [
				['LIBERTY', '100%'],
				['TREASON', '0.0001%'],
				['WAR BONDS', '∞'],
				['MANAGED DEMOCRACY', 'ONLINE'],
				['FREEDOM PROTOCOL', 'ACTIVE'],
			]
			return React.createElement('div', { className: 'hd2-panel', role: 'dialog' },
				React.createElement('div', { className: 'hd2-panel-head' },
					React.createElement('span', { className: 'hd2-panel-title' }, 'CITIZEN BRIEFING'),
					React.createElement('button', { className: 'hd2-panel-close', onClick: toggleBriefing }, 'DISMISS'),
				),
				React.createElement('div', { className: 'hd2-panel-body' },
					React.createElement('img', { src: HELLDIVER_DATA, alt: 'Helldiver', className: 'hd2-panel-emblem', draggable: false }),
					React.createElement('div', { className: 'hd2-panel-stats' },
						stats.map((s) => React.createElement('div', { className: 'hd2-stat', key: s[0] },
							React.createElement('span', { className: 'hd2-stat-name' }, s[0]),
							React.createElement('span', { className: 'hd2-stat-val' }, s[1]),
						)),
					),
					React.createElement('div', { className: 'hd2-quote' }, '“A CITIZEN WHO DOES NOT DIVE IS A CITIZEN WHO DOES NOT SERVE.”'),
					React.createElement('div', { className: 'hd2-quote' }, '“DEMOCRACY MUST BE SPREAD. BY FORCE IF NECESSARY.”'),
					React.createElement('div', { className: 'hd2-footnote' }, 'MINISTRY OF TRUTH'),
					React.createElement('div', { className: 'hd2-footnote' }, 'SUPER EARTH FEDERATION 2184'),
				),
			)
		}

		function TerminalChrome() {
			const open = useBriefingOpen()
			return React.createElement('div', { className: 'hd2-frame' },
				React.createElement('div', { className: 'hd2-topbar' },
					React.createElement('div', { className: 'hd2-topbar-left' },
						React.createElement('img', { src: EMBLEM_DATA, alt: 'Super Earth', className: 'hd2-emblem', draggable: false }),
						React.createElement('div', { className: 'hd2-titles' },
							React.createElement('div', { className: 'hd2-title' }, 'SUPER EARTH'),
							React.createElement('div', { className: 'hd2-subtitle' }, 'DEMOCRACY TACTICAL TERMINAL'),
						),
					),
					React.createElement('div', { className: 'hd2-topbar-center' },
						React.createElement(Propaganda),
					),
					React.createElement('div', { className: 'hd2-topbar-right' },
						React.createElement('span', { className: 'hd2-secure' }, 'UPLINK SECURE'),
						React.createElement(SestClock),
						React.createElement('button', { className: 'hd2-infobtn', title: 'Citizen briefing', onClick: toggleBriefing }, 'ⓘ'),
					),
				),
				React.createElement('div', { className: 'hd2-ticker' },
					React.createElement('div', { className: 'hd2-ticker-track' },
						React.createElement('span', { className: 'hd2-ticker-seg' }, tickerText()),
						React.createElement('span', { className: 'hd2-ticker-seg', 'aria-hidden': 'true' }, tickerText()),
					),
				),
				React.createElement(Watermark),
				React.createElement('div', { className: 'hd2-scanlines' }),
				React.createElement('div', { className: 'hd2-vignette' }),
				React.createElement('div', { className: 'hd2-corner hd2-corner-tl' }),
				React.createElement('div', { className: 'hd2-corner hd2-corner-tr' }),
				React.createElement('div', { className: 'hd2-corner hd2-corner-bl' }),
				React.createElement('div', { className: 'hd2-corner hd2-corner-br' }),
				open ? React.createElement(InfoPanel) : null,
			)
		}

		function ReconReadout(props) {
			let rounds = 0
			try {
				if (props && typeof props.useProjection === 'function') {
					const stats = props.useProjection('sessionStats')
					if (stats && typeof stats === 'object' && typeof stats.turns === 'number') rounds = stats.turns
				}
			} catch (_e) {}
			return React.createElement('div', { className: 'hd2-recon' },
				React.createElement('span', { className: 'hd2-recon-title' }, 'RECON'),
				React.createElement('span', { className: 'hd2-recon-value' }, 'ROUNDS ' + rounds),
			)
		}

		function formatDuration(ms) {
			const s = ms / 1e3
			if (s < 60) return String(Math.round(s * 10) / 10) + 's'
			const whole = Math.round(s)
			return Math.floor(whole / 60) + 'm' + (whole % 60) + 's'
		}
		function formatTokensPerSecond(tps) {
			const clamped = Math.max(0, tps)
			return clamped >= 10 ? String(Math.round(clamped)) : String(Math.round(clamped * 10) / 10)
		}
		function formatTokens(n) {
			const scaled = (v) => (v >= 100 ? String(Math.round(v)) : String(Math.round(v * 10) / 10))
			if (n < 1e3) return String(n)
			if (n < 1e6) return scaled(n / 1e3) + 'K'
			return scaled(n / 1e6) + 'M'
		}

		function ComposerStats(props) {
			let stats = null
			let usage = null
			try {
				if (props && typeof props.useProjection === 'function') {
					stats = props.useProjection('sessionStats')
					usage = props.useProjection('tokenUsage')
				}
			} catch (_e) {}
			const parts = []
			if (stats && typeof stats === 'object' && stats.steps > 0) {
				parts.push('ROUNDS ' + stats.turns + ' · STEPS ' + stats.steps)
				const dur = []
				if (stats.llmMs > 0) dur.push('LLM ' + formatDuration(stats.llmMs))
				if (stats.toolMs > 0) dur.push('TOOLS ' + formatDuration(stats.toolMs))
				if (dur.length > 0) parts.push(dur.join(' · '))
				const spd = []
				if (stats.ttftSteps > 0) spd.push('TTFT ' + formatDuration(stats.ttftMs / stats.ttftSteps))
				if (stats.decodeMs > 0) spd.push(formatTokensPerSecond(stats.decodeTokens / (stats.decodeMs / 1e3)) + ' TOK/S')
				if (spd.length > 0) parts.push(spd.join(' · '))
			}
			if (usage && typeof usage === 'object') {
				const billed = (usage.uncachedInputTokens || 0) + (usage.cacheReadTokens || 0) + (usage.cacheWriteTokens || 0)
				const out = usage.outputTokens || 0
				if (billed > 0 || out > 0) {
					if (billed > 0) parts.push('CACHE ' + Math.round((usage.cacheReadTokens || 0) / billed * 100) + '%')
					parts.push('IN ' + formatTokens(billed) + ' · OUT ' + formatTokens(out))
				}
			}
			const body = parts.join(' | ')
			return React.createElement('div', { className: 'hd2-stats', title: body },
				React.createElement('span', { className: 'hd2-stats-tag' }, '◤ UPLINK ◢'),
				body !== '' ? React.createElement('span', { className: 'hd2-stats-text' }, body) : null,
				React.createElement('span', { className: 'hd2-stats-right' },
					React.createElement('span', { className: 'hd2-uplink-bars' }, '▂▄▆█'),
					React.createElement('span', { className: 'hd2-stats-sig' }, 'SIGNAL 98%'),
				),
			)
		}

		function SuperEarthAction(props) {
			const open = useBriefingOpen()
			const wide = !!(props && props.wide)
			return React.createElement('button', {
				className: 'hd2-se-action' + (open ? ' hd2-se-action-on' : ''),
				title: 'Super Earth citizen briefing',
				onClick: toggleBriefing,
			},
				React.createElement('span', { className: 'hd2-se-action-star' }, '★'),
				wide ? React.createElement('span', null, 'SUPER EARTH') : null,
			)
		}

		/* ---- settings toggle row ---- */
		const SETTINGS_NS = "settings.hd2-terminal"
		const zh = {
			"hd2set.title": "超级地球终端",
			"hd2set.hint": "Helldivers 2 民主战术终端主题（粉丝作品）",
			"hd2set.on": "开启",
			"hd2set.off": "关闭",
		}
		const en = {
			"hd2set.title": "Helldivers Terminal",
			"hd2set.hint": "Helldivers 2 Democracy Tactical Terminal fan theme",
			"hd2set.on": "ON",
			"hd2set.off": "OFF",
		}

		function createToggleStore() {
			return runtime_client.defineStore({
				init: () => ({ enabled: true, revision: -1 }),
				actions: { sync: (d, enabled, revision) => {
					if (revision <= d.revision) return
					d.enabled = enabled
					d.revision = revision
				} },
			})
		}

		function ToggleRow({ t, useStore, setEnabled }) {
			const enabled = useStore((s) => s.enabled)
			return React.createElement('div', { className: 'hd2set-group' },
				React.createElement('div', { className: 'hd2set-title' }, t("hd2set.title")),
				React.createElement('div', { className: 'hd2set-row' },
					React.createElement('button', {
						type: 'button',
						className: 'hd2set-toggle' + (enabled ? ' hd2set-on' : ''),
						'aria-pressed': enabled,
						onClick: () => setEnabled(!enabled),
					}, enabled ? t("hd2set.on") : t("hd2set.off")),
					React.createElement('span', { className: 'hd2set-hint' }, t("hd2set.hint")),
				),
			)
		}

		function insertStyle(tagId, css) {
			if (typeof document === "undefined") return () => {}
			const tag = document.createElement("style")
			tag.dataset.plugin = "dsh-hd2-terminal"
			tag.dataset.pluginCss = tagId
			tag.textContent = css
			document.head.appendChild(tag)
			return () => { tag.remove() }
		}

		const GLOBAL_CSS = [
			"@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chakra+Petch:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');",
			":root {",
			"  --dsw-font-family: 'Chakra Petch', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;",
			"  --ds-font-family-code: 'Share Tech Mono', ui-monospace, monospace;",
			"  --dsw-font-mono: 'Share Tech Mono', ui-monospace, monospace;",
			"  --dsh-font-mono: 'Share Tech Mono', ui-monospace, monospace;",
			"  --hd2-yellow: #FFE710;",
			"  --hd2-yellow-dim: #C9B418;",
			"  --hd2-ink: #0A0C10;",
			"}",
			"body { font-family: var(--dsw-font-family); letter-spacing: 0.015em; }",
			".pI_x6G_frame textarea, .pI_x6G_frame input, .pI_x6G_frame [contenteditable],",
			".pI_x6G_frame [data-input-backdrop], .pI_x6G_frame [data-input-mirror] {",
			"  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif !important;",
			"  letter-spacing: normal !important;",
			"}",
			".pI_x6G_frame [data-input-backdrop] *, .pI_x6G_frame [data-input-mirror] * {",
			"  font-family: inherit !important;",
			"  letter-spacing: inherit !important;",
			"  font-size: inherit !important;",
			"  line-height: inherit !important;",
			"}",
			"html { background: #03050A; }",
			"html:has(body:not([data-ds-dark-theme])) { background: #EFE9D8; }",
			"body[data-ds-dark-theme] {",
			"  --dsw-alias-interactive-bg-hover: rgba(255, 231, 16, 0.07);",
			"  --dsw-alias-interactive-bg-hover-solid: rgba(255, 231, 16, 0.12);",
			"  --dsw-alias-interactive-bg-active: rgba(255, 231, 16, 0.16);",
			"  --dsw-alias-interactive-bg-hover-accent: rgba(255, 231, 16, 0.10);",
			"  --dsw-specific-sidebar-nav-item-hover: rgba(255, 231, 16, 0.07);",
			"  --dsw-specific-sidebar-nav-item-active: rgba(255, 231, 16, 0.13);",
			"  --dsw-specific-sidebar-nav-item-active-accent: rgba(255, 231, 16, 0.85);",
			"  --dsw-specific-bubble: #0D1219;",
			"  --dsw-specific-bubble-highlight: #161C28;",
			"  --dsw-specific-input-major: #0B1017;",
			"  --dsw-alias-bg-layer-3: #161C28;",
			"  --dsw-alias-scrollbar-bg-l2: #2B3646;",
			"  --dsw-alias-scrollbar-hover-l2: var(--hd2-yellow);",
			"  --dsw-alias-state-business-primary: var(--hd2-yellow);",
			"}",
			"body:not([data-ds-dark-theme]) {",
			"  --dsw-alias-interactive-bg-hover: rgba(31, 78, 140, 0.07);",
			"  --dsw-alias-interactive-bg-hover-solid: rgba(31, 78, 140, 0.10);",
			"  --dsw-alias-interactive-bg-active: rgba(31, 78, 140, 0.16);",
			"  --dsw-alias-interactive-bg-hover-accent: rgba(31, 78, 140, 0.10);",
			"  --dsw-specific-sidebar-nav-item-hover: rgba(31, 78, 140, 0.07);",
			"  --dsw-specific-sidebar-nav-item-active: rgba(31, 78, 140, 0.12);",
			"  --dsw-specific-sidebar-nav-item-active-accent: rgba(31, 78, 140, 0.85);",
			"  --dsw-alias-bg-layer-3: #FFFFFF;",
			"  --dsw-alias-scrollbar-bg-l2: #B5AC91;",
			"  --dsw-alias-scrollbar-hover-l2: #8F6B00;",
			"  --dsw-alias-state-business-primary: #1F4E8C;",
			"}",
			".pI_x6G_frame { padding: 30px 0 20px; box-sizing: border-box; }",
			".pI_x6G_detailsCol { background: var(--dsw-alias-bg-layer-1); }",
			"h1,h2,h3,h4,h5,h6 { font-family: 'Black Ops One', var(--dsw-font-family); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 400; }",
			"code, pre, kbd, samp { font-family: 'Share Tech Mono', monospace; }",
			"::selection { background: var(--hd2-yellow); color: var(--hd2-ink); }",
			"*::-webkit-scrollbar { width: 10px; height: 10px; }",
			"*::-webkit-scrollbar-track { background: transparent; }",
			"*::-webkit-scrollbar-thumb { background: var(--dsw-alias-scrollbar-bg-l2); border: 2px solid transparent; background-clip: padding-box; border-radius: 0; }",
			"*::-webkit-scrollbar-thumb:hover { background: var(--dsw-alias-scrollbar-hover-l2); }",
			"* { scrollbar-width: thin; scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) transparent; }",
			".pI_x6G_frame button { border-radius: 2px !important; letter-spacing: 0.05em; }",
			"body[data-ds-dark-theme] .pI_x6G_frame button:not([class*=hd2-]) { border: 1px solid transparent; }",
			"body[data-ds-dark-theme] .pI_x6G_frame button:not([class*=hd2-]):hover:not(:disabled) { border-color: rgba(255, 231, 16, 0.45); }",
			".hHd-Xa_logoRow { border-bottom: 1px solid rgba(255,231,16,0.22); }",
			".hHd-Xa_footerActions { flex-direction: column; align-items: stretch; }",
			".hHd-Xa_collapsed .hHd-Xa_footerActions { align-items: center; }",
			".hHd-Xa_regionArea { overflow: visible; }",
			".hHd-Xa_newSession {",
			"  background: var(--hd2-yellow) !important;",
			"  border: 1px solid var(--hd2-yellow) !important;",
			"  color: #0A0C10 !important;",
			"  font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;",
			"  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);",
			"}",
			".hHd-Xa_newSession svg { display: none !important; }",
			".hHd-Xa_newSession:before {",
			"  content: ''; width: 19px; height: 19px; flex: none;",
			"  background: url(\"data:image/svg+xml;base64," + ICON_REINFORCE + "\") center / contain no-repeat;",
			"  margin-right: 4px;",
			"}",
			".hHd-Xa_newSession:hover { background-color: #FFF3A6 !important; }",
			".hHd-Xa_collapsed .hHd-Xa_newSession:before { margin-right: 0; }",
			".qDHVXG_sectionHeader {",
			"  background: #181818 !important;",
			"  background-image: repeating-linear-gradient(135deg, rgba(38,38,38,1) 0 3px, rgba(24,24,24,1) 3px 12px) !important;",
			"  border: none;",
			"  border-radius: 2px !important;",
			"  margin-left: -12px !important;",
			"  margin-right: -12px !important;",
			"  padding-left: 12px !important;",
			"  padding-right: 12px !important;",
			"}",
			".qDHVXG_root.qDHVXG_rail .qDHVXG_sectionHeader {",
			"  margin-left: 0 !important;",
			"  margin-right: 0 !important;",
			"  padding-left: 0 !important;",
			"  padding-right: 0 !important;",
			"}",
			"body:not([data-ds-dark-theme]) .qDHVXG_sectionHeader {",
			"  background: #EDEDED !important;",
			"  background-image: repeating-linear-gradient(135deg, rgba(208,208,208,1) 0 3px, rgba(237,237,237,1) 3px 12px) !important;",
			"}",
			".qDHVXG_sectionHeader .qDHVXG_sectionLabel {",
			"  text-transform: uppercase;",
			"  letter-spacing: 0.1em;",
			"  font-size: 13px;",
			"  font-weight: 800;",
			"  color: #E8EAED !important;",
			"  -webkit-text-stroke: 6px rgba(17,17,17,0.95);",
			"  paint-order: stroke fill;",
			"  padding-left: 6px;",
			"}",
			"body:not([data-ds-dark-theme]) .qDHVXG_sectionHeader .qDHVXG_sectionLabel {",
			"  color: #3A3A3A !important;",
			"  -webkit-text-stroke: 5px rgba(245,245,245,0.9);",
			"}",
			".qDHVXG_searchButton svg, .qDHVXG_headerActions .qDHVXG_iconButton svg { display: none !important; }",
			".qDHVXG_searchButton, .qDHVXG_headerActions .qDHVXG_iconButton {",
			"  background-repeat: no-repeat !important;",
			"  background-position: center !important;",
			"  background-size: 24px 24px !important;",
			"}",
			".qDHVXG_searchButton { background-image: url(\"data:image/svg+xml;base64," + ICON_RECON + "\") !important; }",
			".qDHVXG_headerActions .qDHVXG_iconButton.qDHVXG_wide { background-image: url(\"data:image/svg+xml;base64," + ICON_LIBERATION + "\") !important; }",
			".qDHVXG_headerActions .qDHVXG_iconButton:not(.qDHVXG_wide) { background-image: url(\"data:image/svg+xml;base64," + ICON_URGENT + "\") !important; }",
			"body:not([data-ds-dark-theme]) .qDHVXG_searchButton,",
			"body:not([data-ds-dark-theme]) .qDHVXG_headerActions .qDHVXG_iconButton { filter: invert(1); }",
			".qDHVXG_rail .qDHVXG_searchButton, .qDHVXG_rail .qDHVXG_headerActions .qDHVXG_iconButton { background-size: 26px 26px !important; }",
			".YDXeBa_projectRow, .YDXeBa_sessionRow {",
			"  background: var(--hd2-yellow) !important;",
			"  border: 1px solid var(--hd2-yellow);",
			"  color: #0A0C10 !important;",
			"  font-weight: 600;",
			"  letter-spacing: 0.04em;",
			"  border-radius: 0 !important;",
			"  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);",
			"}",
			".YDXeBa_projectRow:hover, .YDXeBa_projectRow.YDXeBa_menuOpen,",
			".YDXeBa_sessionRow:hover, .YDXeBa_sessionRow.YDXeBa_menuOpen {",
			"  background: #FFF3A6 !important;",
			"}",
			".YDXeBa_sessionRow.YDXeBa_selected {",
			"  background: var(--hd2-yellow) !important;",
			"  box-shadow: inset 3px 0 0 #0A0C10;",
			"}",
			"body:not([data-ds-dark-theme]) .YDXeBa_sessionRow.YDXeBa_selected { box-shadow: none; }",
			".YDXeBa_projectRow .YDXeBa_title, .YDXeBa_sessionRow .YDXeBa_title {",
			"  color: #0A0C10 !important;",
			"}",
			".YDXeBa_projectRow .YDXeBa_meta, .YDXeBa_sessionRow .YDXeBa_time,",
			".YDXeBa_projectRow .YDXeBa_chevron, .YDXeBa_sessionRow .YDXeBa_slot {",
			"  color: rgba(10, 12, 16, 0.62) !important;",
			"}",
			".YDXeBa_projectRow .YDXeBa_iconButton, .YDXeBa_sessionRow .YDXeBa_iconButton {",
			"  color: #0A0C10 !important;",
			"}",
			"[role=menu]._list_19372_8, [role=menu]._submenu_19372_9 {",
			"  border-radius: 2px !important;",
			"  border: 1px solid rgba(255,231,16,0.4) !important;",
			"  background: var(--dsw-alias-bg-base) !important;",
			"  padding: 6px !important;",
			"}",
			"._label_19372_123 {",
			"  text-transform: uppercase !important;",
			"  letter-spacing: 0.14em !important;",
			"  font-size: 10px !important;",
			"  color: var(--dsw-alias-label-secondary) !important;",
			"  padding: 6px 8px 4px !important;",
			"  border-bottom: 1px solid rgba(255,231,16,0.18);",
			"  margin-bottom: 2px;",
			"}",
			"._separator_19372_81 { background: rgba(255,231,16,0.25) !important; }",
			"._item_19372_91 {",
			"  position: relative;",
			"  border-radius: 2px !important;",
			"  border: 1px solid rgba(255,231,16,0.5);",
			"  box-shadow: inset 2px 0 0 rgba(255,231,16,0.5);",
			"  text-transform: uppercase;",
			"  letter-spacing: 0.06em;",
			"  font-size: 12px;",
			"  margin-bottom: 2px;",
			"  clip-path: polygon(0 0, 100% 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);",
			"}",
			"._item_19372_91:after {",
			"  content: ''; position: absolute; right: 0; top: 50%; width: 26px; height: 1px;",
			"  background: rgba(255,231,16,0.8);",
			"  transform-origin: right center;",
			"  transform: rotate(-45deg);",
			"  pointer-events: none;",
			"}",
			"._item_19372_91:hover:not(:disabled) {",
			"  border-color: var(--hd2-yellow);",
			"  box-shadow: inset 4px 0 0 var(--hd2-yellow);",
			"  background: var(--dsw-alias-interactive-bg-hover);",
			"}",
			".wSkVaW_header { z-index: 10; }",
			".wSkVaW_header:after {",
			"  height: 6px !important;",
			"  bottom: -3px !important;",
			"  z-index: 0 !important;",
			"  background: repeating-linear-gradient(135deg, rgba(38,38,38,0.9) 0 4px, rgba(24,24,24,0.55) 4px 8px) !important;",
			"  transform: none !important;",
			"}",
			"body:not([data-ds-dark-theme]) .wSkVaW_header:after {",
			"  background: repeating-linear-gradient(135deg, rgba(208,208,208,0.9) 0 4px, rgba(237,237,237,0.7) 4px 8px) !important;",
			"}",
			".wSkVaW_tabs { z-index: 5; }",
			".wSkVaW_tabActive:after { bottom: 6px !important; }",
			".hd2-recon {",
			"  display: inline-flex; align-items: center; gap: 10px; height: 20px;",
			"  padding: 0 12px;",
			"  background: #41639C;",
			"  border: 2px solid var(--hd2-yellow);",
			"  transform: skewX(-12deg);",
			"  font-family: 'Share Tech Mono'; font-size: 10px; letter-spacing: 0.12em;",
			"}",
			".hd2-recon > * { transform: skewX(12deg); }",
			".hd2-recon-title { color: #FFFFFF; font-weight: 700; }",
			".hd2-recon-value { color: var(--hd2-yellow); }",
			".Nqubda_badge { border: 1px solid var(--dsw-alias-border-l2); }",
			".Nqubda_badge:hover { border-color: var(--dsw-alias-brand-primary); }",
			".Nqubda_badgeLabel { text-transform: uppercase; letter-spacing: 0.08em; font-size: 12px; }",
			".Nqubda_panel { border: 1px solid rgba(255,231,16,0.4); background: var(--dsw-alias-bg-base); box-shadow: 0 18px 50px rgba(0,0,0,0.6); }",
			".Nqubda_header { border-bottom: 1px solid rgba(255,231,16,0.25); }",
			".Nqubda_title { font-family: 'Black Ops One'; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 400; }",
			".Nqubda_row { border-radius: 2px !important; }",
			".CY-8Ka_terminal { --dsl-terminal-font: 'Share Tech Mono', monospace; }",
			".CY-8Ka_ioCard { border-radius: 2px !important; }",
			".oRe1gG_bubble { border-radius: 2px !important; border: 1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-1); }",
			".Mbwy4a_card, .Mbwy4a_option { border-radius: 2px !important; }",
			".pbvGtq_tab, ._8HJdBW_themeCube { text-transform: uppercase; letter-spacing: 0.06em; }",
			".hd2-frame { position: absolute; inset: 0; pointer-events: none; z-index: 0; }",
			".hd2-topbar {",
			"  position: absolute; top: 0; left: 0; right: 0; height: 30px;",
			"  display: flex; align-items: center; gap: 12px; padding: 0 12px;",
			"  background: linear-gradient(180deg, rgba(17,21,28,0.97), rgba(10,13,18,0.93));",
			"  border-bottom: 1px solid rgba(255,231,16,0.4); color: #E8EAED; font-size: 11px; overflow: hidden;",
			"}",
			".hd2-topbar-left { display: flex; align-items: center; gap: 8px; min-width: 0; }",
			".hd2-emblem { width: 24px; height: 24px; object-fit: contain; filter: drop-shadow(0 0 6px rgba(255,231,16,0.35)); }",
			".hd2-title { font-family: 'Black Ops One'; font-size: 13px; color: var(--hd2-yellow); letter-spacing: 0.16em; line-height: 1.1; text-shadow: 0 0 12px rgba(255,231,16,0.35); }",
			".hd2-subtitle { font-family: 'Share Tech Mono'; font-size: 8.5px; color: #9AA5B5; letter-spacing: 0.24em; }",
			".hd2-topbar-center { flex: 1; text-align: center; min-width: 0; overflow: hidden; }",
			".hd2-propaganda { font-family: 'Share Tech Mono'; font-size: 10px; color: #C6CCD6; letter-spacing: 0.18em; white-space: nowrap; animation: hd2-fade 0.5s ease-out; }",
			".hd2-topbar-right { display: flex; align-items: center; gap: 12px; }",
			".hd2-secure { color: var(--dsw-alias-state-success-primary); font-family: 'Share Tech Mono'; font-size: 9.5px; letter-spacing: 0.14em; display: inline-flex; align-items: center; gap: 6px; }",
			".hd2-secure:before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--dsw-alias-state-success-primary); box-shadow: 0 0 8px currentColor; animation: hd2-blink 1.6s infinite; }",
			".hd2-sest { font-family: 'Share Tech Mono'; font-size: 10px; color: #E8EAED; letter-spacing: 0.06em; display: inline-flex; align-items: center; gap: 6px; font-variant-numeric: tabular-nums; }",
			".hd2-sest-label { color: #9AA5B5; }",
			".hd2-sest-icon { color: var(--hd2-yellow); display: inline-flex; }",
			".hd2-sest-moon { color: #9AA5B5; }",
			".hd2-sest-date { color: #B6B5B3; }",
			".hd2-infobtn { pointer-events: auto; cursor: pointer; background: transparent; border: 1px solid rgba(255,231,16,0.55) !important; color: var(--hd2-yellow); width: 18px; height: 18px; font-size: 10px; line-height: 1; padding: 0; border-radius: 2px; }",
			".hd2-infobtn:hover { background: var(--hd2-yellow); color: var(--hd2-ink); }",
			".hd2-ticker { position: absolute; bottom: 0; left: 0; right: 0; height: 20px; background: rgba(10,13,18,0.96); border-top: 1px solid rgba(255,231,16,0.4); overflow: hidden; display: flex; align-items: center; }",
			".hd2-ticker-track { display: flex; white-space: nowrap; animation: hd2-ticker 70s linear infinite; will-change: transform; }",
			".hd2-ticker-seg { padding-right: 60px; font-family: 'Share Tech Mono'; font-size: 10px; letter-spacing: 0.2em; color: #A9B2C0; }",
			".hd2-watermark { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0.10; }",
			"body[data-ds-dark-theme] .hd2-watermark { opacity: 0.16; }",
			".hd2-flag-badge {",
			"  width: 240px; height: 240px; border-radius: 50%;",
			"  background: radial-gradient(circle at 50% 40%, #2A5CA8, #12315F 72%);",
			"  display: flex; align-items: center; justify-content: center;",
			"  box-shadow: 0 0 0 6px rgba(31, 78, 140, 0.5), 0 0 0 9px rgba(255, 231, 16, 0.22), 0 0 100px rgba(31, 78, 140, 0.4);",
			"}",
			".hd2-flag-badge img { width: 60%; height: 60%; object-fit: contain; filter: drop-shadow(0 0 14px rgba(255,255,255,0.25)); }",
			".hd2-scanlines { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.028) 0 1px, transparent 1px 3px); mix-blend-mode: overlay; animation: hd2-flicker 8s infinite; }",
			"body:not([data-ds-dark-theme]) .hd2-scanlines { opacity: 0.5; }",
			".hd2-vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 55%, rgba(2,4,8,0.5) 100%); }",
			"body:not([data-ds-dark-theme]) .hd2-vignette { background: radial-gradient(ellipse at center, transparent 70%, rgba(31,78,140,0.06) 100%); }",
			".hd2-corner { position: absolute; width: 22px; height: 22px; border: 0 solid rgba(255,231,16,0.7); }",
			".hd2-corner-tl { top: 33px; left: 3px; border-top-width: 2px; border-left-width: 2px; }",
			".hd2-corner-tr { top: 33px; right: 3px; border-top-width: 2px; border-right-width: 2px; }",
			".hd2-corner-bl { bottom: 23px; left: 3px; border-bottom-width: 2px; border-left-width: 2px; }",
			".hd2-corner-br { bottom: 23px; right: 3px; border-bottom-width: 2px; border-right-width: 2px; }",
			".hd2-panel {",
			"  pointer-events: auto; position: absolute; right: 16px; top: 44px; width: 300px;",
			"  background: linear-gradient(180deg, rgba(14,18,26,0.98), rgba(9,12,18,0.98));",
			"  border: 1px solid rgba(255,231,16,0.45); box-shadow: 0 18px 50px rgba(0,0,0,0.55);",
			"  color: #E8EAED; animation: hd2-panel-in 0.18s ease-out;",
			"}",
			".hd2-panel:before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px); pointer-events: none; }",
			".hd2-panel-head { position: relative; display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-bottom: 1px solid rgba(255,231,16,0.3); background: rgba(255,231,16,0.06); }",
			".hd2-panel-title { font-family: 'Black Ops One'; color: var(--hd2-yellow); font-size: 13px; letter-spacing: 0.12em; }",
			".hd2-panel-close { pointer-events: auto; cursor: pointer; background: transparent; color: #9AA5B5; border: 1px solid rgba(255,231,16,0.4) !important; font-family: 'Share Tech Mono'; font-size: 10px; padding: 2px 8px; border-radius: 2px; letter-spacing: 0.1em; }",
			".hd2-panel-close:hover { background: var(--hd2-yellow); color: var(--hd2-ink); }",
			".hd2-panel-body { position: relative; padding: 12px; display: flex; flex-direction: column; gap: 10px; }",
			".hd2-panel-emblem { width: 84px; height: 84px; align-self: center; object-fit: contain; filter: drop-shadow(0 0 12px rgba(255,231,16,0.3)); }",
			".hd2-panel-stats { display: flex; flex-direction: column; gap: 6px; font-family: 'Share Tech Mono'; font-size: 11px; letter-spacing: 0.08em; }",
			".hd2-stat { display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(255,255,255,0.12); padding-bottom: 4px; }",
			".hd2-stat-name { color: #9AA5B5; }",
			".hd2-stat-val { color: var(--hd2-yellow); }",
			".hd2-quote { font-family: 'Share Tech Mono'; font-size: 10px; color: #A9B2C0; line-height: 1.6; letter-spacing: 0.06em; border-left: 2px solid rgba(255,231,16,0.5); padding-left: 8px; }",
			".hd2-footnote { font-family: 'Share Tech Mono'; font-size: 8.5px; color: #6C7684; letter-spacing: 0.2em; text-align: center; }",
			".hd2-stats {",
			"  box-sizing: border-box; display: flex; align-items: center; gap: 10px; width: 100%;",
			"  font-family: 'Share Tech Mono'; font-size: 10px; letter-spacing: 0.12em; color: var(--dsw-alias-label-secondary);",
			"  padding: 3px 10px; border: 1px solid rgba(255,231,16,0.16); background: rgba(255,231,16,0.04);",
			"  overflow: hidden; white-space: nowrap;",
			"}",
			"body:not([data-ds-dark-theme]) .hd2-stats { background: rgba(31,78,140,0.05); border-color: rgba(31,78,140,0.28); }",
			".hd2-stats-tag { color: var(--dsw-alias-brand-primary); flex: none; }",
			".hd2-stats-text { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; }",
			".hd2-stats-right { flex: none; display: inline-flex; align-items: center; gap: 8px; }",
			".hd2-stats-sig, .hd2-uplink-bars { color: var(--dsw-alias-state-success-primary); }",
			".hd2-uplink-bars { animation: hd2-blink 2.4s infinite; }",
			".hd2-proposal {",
			"  border: 1px solid rgba(255,231,16,0.45);",
			"  background: linear-gradient(180deg, rgba(14,18,26,0.98), rgba(9,12,18,0.98));",
			"  color: #E8EAED; overflow: hidden; box-shadow: 0 18px 50px rgba(0,0,0,0.55);",
			"}",
			".hd2-proposal-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 12px; border-bottom: 1px solid rgba(255,231,16,0.3); background: rgba(255,231,16,0.06); }",
			".hd2-proposal-title { font-family: 'Black Ops One'; color: var(--hd2-yellow); font-size: 12px; letter-spacing: 0.12em; }",
			".hd2-proposal-status { font-family: 'Share Tech Mono'; font-size: 9px; color: var(--dsw-alias-state-warn-primary); letter-spacing: 0.12em; animation: hd2-blink 2s infinite; }",
			".hd2-proposal-body { display: flex; flex-direction: column; gap: 8px; padding: 12px; }",
			".hd2-proposal-figure { display: flex; align-items: center; justify-content: center; padding: 6px; }",
			".hd2-proposal-img {",
			"  width: 112px; height: 112px; object-fit: contain;",
			"  background: repeating-conic-gradient(#1A1F28 0 25%, #10141B 0 50%) 0 0 / 16px 16px;",
			"  border: 1px solid rgba(255,231,16,0.25); display: flex; align-items: center; justify-content: center;",
			"}",
			".hd2-proposal-loading { font-family: 'Share Tech Mono'; font-size: 9px; color: #9AA5B5; letter-spacing: 0.12em; }",
			".hd2-proposal-link { font-family: 'Share Tech Mono'; font-size: 9px; color: var(--hd2-yellow-dim); word-break: break-all; text-align: center; }",
			".hd2-proposal-note { font-family: 'Share Tech Mono'; font-size: 9px; color: #9AA5B5; letter-spacing: 0.08em; text-align: center; }",
			".hd2-proposal-fail { font-family: 'Share Tech Mono'; font-size: 9px; color: var(--dsw-alias-state-error-primary); letter-spacing: 0.08em; text-align: center; }",
			".hd2-proposal-foot { padding: 8px 12px; border-top: 1px solid rgba(255,231,16,0.25); display: flex; flex-direction: column; gap: 8px; }",
			".hd2-proposal-actions { display: flex; gap: 8px; }",
			".hd2-proposal-yes, .hd2-proposal-no, .hd2-proposal-submit {",
			"  cursor: pointer; font-family: 'Share Tech Mono'; font-size: 10px; letter-spacing: 0.12em;",
			"  padding: 4px 12px; border-radius: 2px; border: 1px solid rgba(255,231,16,0.5);",
			"  background: transparent; color: var(--hd2-yellow);",
			"}",
			".hd2-proposal-yes:hover, .hd2-proposal-submit:hover { background: var(--hd2-yellow); color: var(--hd2-ink); }",
			".hd2-proposal-no { border-color: rgba(255,78,69,0.5); color: var(--dsw-alias-state-error-primary); }",
			".hd2-proposal-no:hover { background: rgba(255,78,69,0.15); }",
			".hd2-proposal-replace { display: flex; gap: 8px; align-items: center; }",
			".hd2-proposal-input {",
			"  flex: 1; min-width: 0; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,231,16,0.35);",
			"  color: #E8EAED; font-family: 'Share Tech Mono'; font-size: 10px; letter-spacing: 0.04em;",
			"  padding: 4px 8px; border-radius: 2px; outline: none;",
			"}",
			".hd2-proposal-done { font-family: 'Share Tech Mono'; font-size: 9px; color: var(--dsw-alias-state-success-primary); letter-spacing: 0.14em; }",
			".hd2-proposal-dismiss-row { display: flex; justify-content: flex-end; }",
			".hd2-proposal-close {",
			"  cursor: pointer; background: transparent; border: 1px solid rgba(255,231,16,0.45) !important;",
			"  color: var(--hd2-yellow); font-family: 'Share Tech Mono'; font-size: 10px; letter-spacing: 0.12em;",
			"  padding: 4px 12px; border-radius: 2px;",
			"}",
			".hd2-proposal-close:hover { background: var(--hd2-yellow); color: var(--hd2-ink); }",
			".hd2-se-action {",
			"  cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px;",
			"  background: transparent; border: 1px solid rgba(255,231,16,0.4) !important; color: var(--hd2-yellow-dim);",
			"  font-family: 'Share Tech Mono'; font-size: 10px; letter-spacing: 0.14em;",
			"  padding: 4px 8px; border-radius: 2px; margin: 2px 0; width: 100%; box-sizing: border-box;",
			"}",
			".hHd-Xa_collapsed .hd2-se-action { width: auto; }",
			".hd2-se-action:hover, .hd2-se-action-on { background: var(--hd2-yellow); color: var(--hd2-ink); }",
			".hd2set-group { flex-direction: column; gap: 6px; display: flex; }",
			".hd2set-title { color: var(--dsw-alias-label-primary); font-size: 14px; font-weight: 600; line-height: 22px; }",
			".hd2set-row { align-items: center; gap: 10px; display: flex; }",
			".hd2set-toggle {",
			"  cursor: pointer; min-width: 64px; height: 26px;",
			"  font-family: 'Share Tech Mono'; font-size: 11px; letter-spacing: 0.1em;",
			"  background: transparent; color: var(--dsw-alias-label-secondary);",
			"  border: 1px solid var(--dsw-alias-border-l2) !important; border-radius: 2px; padding: 0 10px;",
			"}",
			".hd2set-toggle.hd2set-on { background: var(--hd2-yellow); border-color: var(--hd2-yellow) !important; color: var(--hd2-ink); font-weight: 700; }",
			".hd2set-hint { color: var(--dsw-alias-label-tertiary); font-size: 12px; line-height: 18px; }",
			"@keyframes hd2-fade { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: none; } }",
			"@keyframes hd2-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }",
			"@keyframes hd2-flicker { 0%, 91%, 94%, 97%, 100% { opacity: 1; } 92% { opacity: 0.85; } 95% { opacity: 0.92; } }",
			"@keyframes hd2-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }",
			"@keyframes hd2-panel-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }",
			"@media (prefers-reduced-motion: reduce) {",
			"  .hd2-ticker-track, .hd2-scanlines, .hd2-secure:before, .hd2-propaganda, .hd2-uplink-bars, .hd2-proposal-status { animation: none; }",
			"}",
		].join('\n')

		const inject = ["slots", "locale", "connection", "remote", "settingsScope", "timer"]

		function apply(ctx) {
			runtimeCtx = ctx
			const scope = ctx.settingsScope.bind({ namespace: "hd2-terminal" })
			const slots = ctx.get("slots")
			const theme = ctx.get("theme")
			let mounted = false
			const disposers = []
			const injectDisposers = []

			function mount() {
				if (mounted) return
				mounted = true
				if (theme !== undefined) {
					disposers.push(ctx.effect(() => theme.overrideTokens("hd2-terminal", TOKENS), "hd2-terminal: tokens"))
				}
				disposers.push(ctx.effect(() => insertStyle("hd2-terminal-css", GLOBAL_CSS), "hd2-terminal: css"))
				if (slots !== undefined) {
					injectDisposers.push(slots.inject("shell.overlay", () => slots.register(
						{ name: "shell.overlay", id: "hd2-terminal-chrome", order: -500 },
						() => React.createElement(TerminalChrome),
					)))
					injectDisposers.push(slots.inject("conversation.session.header.utilities", () => slots.register(
						{ name: "conversation.session.header.utilities", id: "hd2-recon", order: 10 },
						(props) => React.createElement(ReconReadout, props),
					)))
					injectDisposers.push(slots.inject("conversation.composer.dock", () => slots.register(
						{ name: "conversation.composer.dock", id: "stats", priority: -1, order: 0 },
						(props) => React.createElement(ComposerStats, props),
					)))
					injectDisposers.push(slots.inject("sidebar.footer.action", () => slots.register(
						{ name: "sidebar.footer.action", id: "hd2-superearth", order: 30, label: () => "SUPER EARTH" },
						(props) => React.createElement(SuperEarthAction, props),
					)))
				}
			}

			function unmount() {
				if (!mounted) return
				mounted = false
				injectDisposers.forEach((d) => { try { d() } catch (_e) {} })
				injectDisposers.length = 0
				disposers.forEach((d) => { try { d() } catch (_e) {} })
				disposers.length = 0
			}

			ctx.locale.register(SETTINGS_NS, { zh, en })
			const store = createToggleStore()
			let bound = null
			const injected = (actions) => {
				bound = actions
				return { setEnabled: (v) => {
					scope.set("enabled", v).catch(() => {})
				} }
			}
			if (slots !== undefined) {
				slots.inject("settings.general.item", () => slots.register({
					name: "settings.general.item",
					id: "hd2-terminal",
					order: 20,
					store,
					locale: SETTINGS_NS,
					inject: injected,
				}, ToggleRow))
			}

			const syncRow = () => {
				const snap = scope.getSnapshot()
				const section = snap && snap.section
				let on
				if (section === undefined) {
					on = typeof window !== "undefined" && window.__HD2_TERMINAL_ENABLED__ !== false
				} else {
					on = section.enabled !== false
				}
				if (bound !== null) bound.sync(on, snap.revision)
				if (on) mount()
				else unmount()
			}
			const off = scope.subscribe(syncRow)
			syncRow()
			ctx.effect(() => {
				return () => {
					off()
					unmount()
				}
			}, "hd2-terminal: cleanup")
		}

		exports.apply = apply
		exports.inject = inject
		return module.exports
	}
});
