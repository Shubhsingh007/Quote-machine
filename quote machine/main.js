var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
 
function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.message);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}
 
function displayQuote(quote) {
  var quoteText = document.querySelector('.quote-text');//'.' is used be need to call only the class function
  quoteText.textContent = quote;
 
}
 
var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);//click will enabe the click function and the the getQuote function is used above and just called here
 
getQuote();