let myQuotes = [
"I am free to do as I please as long as I don’t break the law or hurt another person.", 
"I have every right to believe what I want to believe and live the way that I want to live, but I have a responsibility to respect those who have different beliefs than me and/or live differently than me.", 
"What’s 100% comfortable for one person can be 100% uncomfortable for someone else.",
"What’s easy breezy for one person, can be brain surgery for someone else.",
"It’s a pleasure to be kind to others.",
"What’s perfectly right for one person can be perfectly wrong for someone else.",
"I don’t criticize people on their disabilities, I look up to them because of their abilities.",
"I respect ideas I don’t agree with."
]

function randomQuote(){
    let randomNumber = Math.floor(Math.random() * (myQuotes.length));

document.getElementById("quoteDisplay").innerHTML = myQuotes[randomNumber];
}











