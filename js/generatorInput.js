function sendCookie(){
    var tourName = document.getElementById("tourneyName").value;
    var participants = document.getElementById("participants").value;
    alert(tourName);
    alert(participants);
    //make cookie for tournament name
    document.cookie = "tourneyName=" + tourName;
    //make the textbox into an array
    var peopleArray = participants.split("\n");
    var cookieNames = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6", "Name7", "Name8", "Name9", "Name10", "Name11", "Name12", "Name13", "Name14", "Name15", "Name16", "Name17", "Name18", "Name19"];
    var length = peopleArray.length;
    //alert(length);
    for (i = 0; i < length; i++){
        document.cookie = "\"" + cookieNames[i] + "=" + peopleArray[i] + "\""
    }

}




//then use that array to make a cookie for each of the names on that list

//read those cookies and output them

//make it so that everytime you reload the bracket.html it deletes all cookies