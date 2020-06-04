//delets all cookies currently
function deleteAllCookies(){

    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++){
        deleteCookie(cookies[i].split("=")[0]);
    }
}

function setCookie(name, value, expirydays) {
    var d = new Date();

    d.setTime(d.getTime() + (expirydays*24*60*60*1000));

    var expires = "expires="+ d.toUTCString();
    
    document.cookie = name + "=" + value + "; " + expires;
}

function deleteCookie(name){
    setCookie(name,"",-1);
}

function sendCookie(){

    deleteAllCookies();

    //array of placeholders for the names of the people

    var cookieNames = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6", "Name7", "Name8", "Name9", "Name10", "Name11", "Name12", "Name13", "Name14", "Name15", "Name16", "Name17", "Name18", "Name19", "Name20"];

    var tourName = document.getElementById("tourneyName").value;
    var participants = document.getElementById("participants").value;

    //make cookie for tournament name
    document.cookie = String("tourneyName=" + tourName);
    
    //make the textbox into an array
    var peopleArray = participants.split("\n");
    
    //length is number of people
    var length = peopleArray.length;

    //make a cookie for the number of participants
    document.cookie = String("NumberofParticipants=" + length)    

    //make all of the names into cookies
    for (i = 0; i < length; i++){
        document.cookie = String(cookieNames[i] + "=" + peopleArray[i]);
    }
}

function readCookie(){

    //split the cookies to display just the tournament name, number of people, and names of people
    var original = document.cookie;         
    var changed = original.split(";")      
    
     //length is the size of the array
    var ogLength = changed[1];
    var fakeLength = ogLength.split("=");
    var holderLength = parseInt(fakeLength[1], 10);
    var length = holderLength + 2;

    //getting name of tournament and names of people
    var fakenameofTourney = changed[0].split("=");
    var nameofTourney = fakenameofTourney[1];

    var fakePeopleParticipating = changed[1].split("=");
    var PeopleParticipating = parseInt(fakePeopleParticipating[1], 10);

    //make standings with the first two elements as the name and number of people
    var standings = [nameofTourney, PeopleParticipating]


    //make the rest of the array with the names of the participants
    for (i = 2; i < length; i++){
        var holder = changed[i].split("=");
        standings[i] = holder[1];
    }

    //show what's in the array
    document.getElementById("originalBracket").innerHTML = standings;
}