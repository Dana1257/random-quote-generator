let myQuotes = [
"I am free to do as I please as long as I don’t break the law or hurt another person.", 
"I have every right to believe what I want to believe and live the way that I want to live, but I have a responsibility to respect those who have different beliefs than me and/or live differently than me.", 
"What’s 100% comfortable for one person can be 100% uncomfortable for someone else.",
"What’s easy breezy for one person, can be brain surgery for someone else.",
"It’s a pleasure to be kind to others.",
"What’s perfectly right for one person can be perfectly wrong for someone else.",
"I don’t criticize people on their disabilities, I look up to them because of their abilities.",
"I respect ideas I don’t agree with.",
"The biggest gift you could ever give someone is to accept them for who they are.",
"It’s important to be stubborn when it comes to your own happiness, but when your stubbornness affects others, it is important to show compassion and consideration and minimize the damage as much as possible.",
"My Strength is your weakness, your strength is my weakness. Nobody’s perfect, so let’s just help each other out.","Who am I to judge other people’s experience.","Imagine a world with no putdowns, judgements, and harsh criticisms. A world where you can be free to be exactly who you are."
]

function randomQuote(){
    let randomNumber = Math.floor(Math.random() * (myQuotes.length));

document.getElementById("quoteDisplay").innerHTML = myQuotes[randomNumber];
}
















