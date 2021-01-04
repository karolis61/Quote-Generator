
const quoteContent = document.getElementById('quote');
const author = document.getElementById('author');

// Show New Quote
function newQuote() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    if(quote.author === '') {
        author.innerText = "Unknown";
    } else {
        author.innerText = quote.author;
    }
    if(quote.text.length > 50) {
        quoteContent.classList.add('long-quote');
    } else {
        quoteContent.classList.remove('long-quote');
    }
    quoteContent.innerText = quote.text;
   
    
    

}

document.getElementById('new-quote').addEventListener('click', newQuote);


// On Load
