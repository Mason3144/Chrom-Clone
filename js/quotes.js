const quotes =[
    {
        quote: "What doesn't kill you, makes you stronger -  ",
        author: "German philosopher Friedrich Nietzsche"
    },
    {
        quote: "No excuse for a purpose -  ",
        author: "Mason Lee"
    },
    {
        quote: "You only pass through this life once, you don’t come back for an encore -  ",
        author: "Elvis Presley"
    },
    {
        quote: "The minute that you’re not learning I believe you’re dead -  ",
        author: "Jack Nicholson"
    },
    {
        quote: "Don’t be afraid to fail. It’s not the end of the world, and in many ways, it’s the first step toward learning something and getting better at it -  ",
        author: "Jon Hamm"
    },
    {
        quote: "Life’s tough, but it’s tougher when you’re stupid -  ",
        author: "John Wayne"
    },
    {
        quote: "Today, you have 100% of your life left -  ",
        author: "Tom Landry"
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up -  ",
        author: "Thomas A. Edison"
    },
    {
        quote: "Only Thing We Have to Fear Is Fear Itself -  ",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "There is nothing we can't do. Just we don't do -  ",
        author: "Mason Lee"
    }

];


const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
