const tweet = prompt('Write your tweet')
const twtLen = tweet.length
alert(" You have written " + twtLen + " characters, you have " + (140 - twtLen) + " left ")
alert (tweet.slice(0,140));
