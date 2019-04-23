var lunchOptions = [
    "Moe's BBQ",
    "Ted's BBQ",
    "iHop",
    "5 Guys",
    "Cricket's",
    "iHop",
    "Red Robin",
    "Shaggy's",
    "Toy Box Bistro",
    "Wendy's",
    "Chick-fil-A",
    "Bojangle's",
    "Popeye's",
    "Zaxby's",
    "CiCi's",
    "Arby's",
    "Panera",
    "Firehouse",
    "Buffalo Wild Wings",
    "Cricket's",
    "Johnny Gryll's",
    "Asian House",
    "Edo",
    "Four Leaves",
    "Mei Wei",
    "Nothing But Noodles",
    "Panda Express",
    "Nothing But Noodles",
    "Tellini's"
]

var lunchPhrase = [
    "Get your hungry bumpkins over to %%!",
    "Scoot your skiddadles in the direction of %%!",
    "How about %%?",
    "Some %%-arooski sounds good right about now...",
    "Yeah but have you thought about %%?",
    "You are going to %%. I have spoken."
]

function getLunchPlace() {
    var randomLunch = lunchOptions[Math.floor(Math.random()*lunchOptions.length)];
    var randomLunchPhrase = lunchPhrase[Math.floor(Math.random()*lunchOptions.length)];
    var lunchString = randomLunchPhrase.replace("%%", randomLunch);
    document.getElementById("lunchPlace").innerHTML = lunchString;
}
