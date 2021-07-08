const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const getQuotes = () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quotes.innerText = data.content;
            author.innerText = " By :- " + data.author;
        })
}
getQuotes();