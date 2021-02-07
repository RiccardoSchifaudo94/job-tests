var max = 1000000;
var random_num_to_guess = (Math.ceil(Math.random()*max)).toFixed(0);
var attempt = 0;

//console.log("the random number generated to guess is : "+random_num_to_guess);

function verify(guess_number){
    
    attempt++;
    
    if(attempt<50){    
                    console.log("This is your attempt number = "+attempt+" GOOD LUCK!");
                    console.log("You have other "+ (50 - attempt)+ " lefts remains to guess the number");
    
                    if(typeof guess_number==='number' && (guess_number%1)===0) {
                        // guess_number is an integer
                        console.log("It's an integer number");
                        
                        if(guess_number<0)
                            guess_number = - guess_number;

                        if(guess_number>1&&guess_number<max){
                            console.log("number is on the range between 1 and "+max);
                            if(guess_number>random_num_to_guess){
                                console.log("Number too big, try again");
                                return 1;
                            }else if(guess_number<random_num_to_guess){
                                console.log("Number too low, put it higher");
                                return -1;
                            }
                            else{
                                console.log("You have just found the guess number and it is equal to " + guess_number + " = " + random_num_to_guess);
                                return 0;
                            }
                        }
                        else if(guess_number<0)
                                console.log("guess number is negative = "+guess_number);
                        else if(guess_number>0)
                                console.log("guess number is out of range, it must be below of "+max);
                                
                    }
                    else{
                        console.log("It's NOT an integer number");
                    }
    }
    else{
        console.log("You finished attemps, sorry! You lost the game :(");
    }



}//close function verify

