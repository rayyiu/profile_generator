const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite?", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (favouriteFood) => {
          rl.question("What's your favourite sport?", (favouriteSport) => {
            rl.question("Got a superpower? Say it in a few words", (superpower) => {
              console.log(`${name} likes ${activity} while enjoying ${listen}.  Their favourite meal is ${meal} because they can eat ${favouriteFood}. They're a fan of ${favouriteSport}, and they have a little known superpower, ${superpower}.`);


              rl.close();
            });
          });
        });
      });
    });
  });
});