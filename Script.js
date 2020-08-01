var quotes=[
    '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." – Martin Fowler',
'“First, solve the problem. Then, write the code.” – John Johnson',
'“Experience is the name everyone gives to their mistakes.” – Oscar Wilde',
'“ In order to be irreplaceable, one must always be different” – Coco Chanel',
'“Java is to JavaScript what car is to Carpet.” – Chris Heilmann',
'“Knowledge is power.” – Francis Bacon',
'“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon',
'“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery',
'“ Code is like humor. When you have to explain it, it’s bad.” – Cory House',
'“Fix the cause, not the symptom.” – Steve Maguire'
]
function newQuote(){
    var randomNum=Math.floor(Math.random()*(quotes.length));
    document.getElementById('Qdisplay').innerHTML=quotes[randomNum];
}