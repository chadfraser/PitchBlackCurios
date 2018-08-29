function viewTable(locationClass, clickedElement) {
 	var i, tableContent, selectedTab;
 	
 	if (clickedElement.id === "selected") {
 		return;
 	}	
 	
 	selectedTab = document.getElementById("selected");
 	selectedTab.removeAttribute("id");
	clickedElement.setAttribute("id", "selected");
	 	
 	tableContent = document.getElementsByClassName("table");
 	for (i = 0; i < tableContent.length; i++) {
 		tableContent[i].style.display = "none";
 		tableContent[i].setAttribute("class", "table");
   }

   document.getElementById(locationClass).style.display = "block";
}