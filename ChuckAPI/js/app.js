const btn = document.querySelector('.btn')
const jokelist = document.querySelector('.jokes')

btn.addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;

    let url= `https://api.icndb.com/jokes/random/${number}`;

    fetch(url)
    .then(response => {
        return response.json();
    }).then(data =>{
        
        let output = '';

        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
        });

        jokelist.innerHTML = output 
    });

    e.preventDefault();
}