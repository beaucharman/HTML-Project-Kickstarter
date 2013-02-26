/*

	Main Scripts

------------------------------------------------
  Description:
	Version:     1.0
------------------------------------------------ */

/* Remove the .js class from the html tag is javascript is enabled
------------------------------------- */
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
