const readline = require("readline");

const askQUestion = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let scores = 0;

  function start_game () {
    console.log('Welcome to the quiz game');
    console.log('In this game you only have 10 seconds for each question for you to answer the question');
    rl.question('Type "start game" to begin', answer => {
        if(answer === "start game") {
            first_question()
        }
    })
  }

  start_game()

  function first_question() {

    setTimeout(() => {
        console.log('\nTime out');
        console.log('moving to the next question...')
        second_question();
      }, 5000);

    rl.question("What is the capital city of south africa:", (answer) => {
        
      if (answer !== "cape town") {
        console.log("wrong answer");
        console.log("moving to the next question...");
        console.clear();
        setTimeout(() => {
            second_question();
        }, 3000);
      } else {
        console.log("correct answer");
        scores++;
        console.log("moving to the next question...");
        setTimeout(() => {
          second_question();
        }, 3000);
      };

      
    });
  }

  function second_question() {
    setTimeout(() => {
        console.log('\nTime out');
        console.log('moving to the next question...')
        third_question();
      }, 5000);

    rl.question("Who is the first black president in south africa:", answer => {
        
      if (answer !== "nelson mandela") {
        console.log("wrong answer, the correct answer is nelsom mandela");
        console.log("moving to the next question...");
        console.clear();
        setTimeout(() => {
            third_question();
        }, 3000);
      } else {
        console.log("correct answer");
        scores++;
        console.log("moving to the next question...");
        setTimeout(() => {
            third_question();
        }, 3000);
      };

      
    });
  }

  function third_question() {
    setTimeout(() => {
        console.log('\nTime out');
        console.log('moving to the next question...');
        fourth_question(); 
    }, 5000);

    rl.question("In what year did COVID-19 start to impact globally:", answer => {
        
      if (answer !== "2020") {
        console.log("wrong answer, the correct answer is 2020");
        console.log("moving to the next question...");
        console.clear();
        setTimeout(() => {
            fourth_question();  
        }, 3000);
      } else {
        console.log("correct answer");
        scores++;
        console.log("moving to the next question...");
        setTimeout(() => {
          fourth_question(); 
        }, 3000);
      }
    });
}


  function fourth_question() {
    setTimeout(() => {
        console.log('\nTime out');
        console.log('moving to the next question...')
        fifth_question(); 
    }, 5000);

    rl.question("In USA, they have states, what about south africa:", answer => {
        
      if (answer !== "provinces") {
        console.log("wrong answer, the correct answer is provinces");
        console.log("moving to the next question...");
        console.clear();
        setTimeout(() => {
            fifth_question(); 
        }, 3000);
      } else {
        console.log("correct answer");
        scores++;
        console.log("moving to the next question...");
        setTimeout(() => {
          fifth_question();
        }, 3000);
      };
    });
}


  function fifth_question() {
    setTimeout(() => {
        console.log('\nTime out');
        console.log('End of game');
        rl.close();
        console.log(scores)
      }, 5000);

    rl.question("How many languages do we have in SA?:", answer => {
        
      if (answer !== "11") {
        console.log("wrong answer, the correct answer is provinces");
        console.log("End of game");
        console.clear();
        setTimeout(() => {
            rl.close();
            console.log('Here is are your final scores :' + '  ' + scores);
        }, 3000);
      } else {
        console.log("correct answer");
        scores++;
        console.log("End of game");
        setTimeout(() => {
            rl.close();
            console.log('Here is are your final scores :' + '  ' + scores);
        }, 3000);
      };

    });
  }

  

};

askQUestion();
