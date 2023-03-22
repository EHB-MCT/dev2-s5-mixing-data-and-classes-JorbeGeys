"use strict";

import Joke from "./Joke.js";

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10&type=twopart')
            .then(function (response){
                return response.json();
            })
            .then(function (json){
                json.jokes.forEach(function(jokeData){
                    const joke = new Joke(jokeData.category , jokeData.setup , jokeData.delivery);
                    app.items.push(joke);
                    app.render(joke);
                });
            });
            
    },
    onSearch() {
    },
    render(message) {
        console.log(app.items);
        document.querySelector('#list').insertAdjacentHTML('beforeend',message.htmlString);
    }

};

app.init();