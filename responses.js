function getBotResponse(input) {
    if (input == "stone") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    } else if (input == "what is your name") {
        return (" my name is superoo");
    } else if (input == "how are you") {
        return ("i am good . How's you");
    } else if (input ==("all good"||"fine"||"great")) {
        return ("chalo badiya hai");
    } else if (input == "hello") {
        return ("hello there!!!");
    } else if (input == "goodbye") {
        return ("talk to you later");
    } else {
        return ("not able to understand try to ask again");
    }
}