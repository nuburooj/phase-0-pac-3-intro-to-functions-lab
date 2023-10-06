function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());;
}

function logWhisper(string) {
    console.log(string.toLowerCase());;
}

function logWhisper(string) {
    console.log(string.toLowerCase());;
}

function sayHiToHeadphonedRoommate(string) {
    
    const dinner = "Let's have dinner together!"
    const deaf = "I can't hear you!"
    const response = "I would love to!"
    const yes = "YES INDEED!"

    if (string == string.toUpperCase()) {
        return(yes)
    } else if (string == dinner) {
        return(response)
    } else {
        return(deaf)
    }
}
