$(document).ready(
    function ()
    {
        //This first bit before my event listener is so that the rules popup will follow your mouse as your move it.
        var rulestooltip = document.getElementById('rulesPopup');

        window.onmousemove = function (e) {
            var x = e.clientX,
                y = e.clientY;
            rulestooltip.style.top = (y + 20) + 'px';
            rulestooltip.style.left = (x + 20) + 'px';
        };
        //Events
        $("input[name='playerChoice']").change(response)
        //Any time the user clicks one of the five symbols, it detects the change and runs the function below.
        //Functions
        var playerScore = 0
        var sheldonScore = 0
        function response(event){
            event.preventDefault()
            var selectedImage = $("input[name='playerChoice']:checked");
            var selectedSymbol = selectedImage.val();
            //Gets the value of the image clicked by the user
            var computerChoice = Math.floor(Math.random() * 5);
            var computerSymbol;
            $("#sheldon").show();
            //Shows Sheldon (the computer)'s symbol
            switch(computerChoice){
                case 0:
                    computerSymbol = "Rock"
                    $("#compRock").show();
                    $("#compPaper").hide();
                    $("#compScissors").hide();
                    $("#compLizard").hide();
                    $("#compSpock").hide();
                    break;
                case 1:
                    computerSymbol = "Paper"
                    $("#compRock").hide();
                    $("#compPaper").show();
                    $("#compScissors").hide();
                    $("#compLizard").hide();
                    $("#compSpock").hide();
                    break;
                case 2:
                    computerSymbol = "Scissors"
                    $("#compRock").hide();
                    $("#compPaper").hide();
                    $("#compScissors").show();
                    $("#compLizard").hide();
                    $("#compSpock").hide();
                    break;
                case 3:
                    computerSymbol = "Lizard"
                    $("#compRock").hide();
                    $("#compPaper").hide();
                    $("#compScissors").hide();
                    $("#compLizard").show();
                    $("#compSpock").hide();
                    break;
                default:
                    computerSymbol = "Spock"
                    $("#compRock").hide();
                    $("#compPaper").hide();
                    $("#compScissors").hide();
                    $("#compLizard").hide();
                    $("#compSpock").show();
                    break;
            }
            var playerwin
            //Quick check to see if both of the symbols are the same
            if(computerSymbol === selectedSymbol){
                $("#roundOutcome").text("Tie.")
            }
            //Massive switch statement with nested switch statement for each outcome.
            switch(computerSymbol){
                case "Rock":
                    switch(selectedSymbol){
                        case "Scissors":
                            $("#roundOutcome").text("Rock crushes Scissors")
                            playerwin = false;
                            break;
                        case "Paper":
                            $("#roundOutcome").text("Paper covers Rock")
                            playerwin=true;
                            break;
                        case "Lizard":
                            $("#roundOutcome").text("Rock crushes Lizard")
                            playerwin = false;
                            break;
                        case "Spock":
                            $("#roundOutcome").text("Spock vaporizes Rock")
                            playerwin=true;
                            break;
                        default: break;
                    }
                    break;
                case "Scissors":
                    switch(selectedSymbol){
                        case "Rock":
                            $("#roundOutcome").text("Rock crushes Scissors")
                            playerwin=true;
                            break;
                        case "Paper":
                            $("#roundOutcome").text("Scissors cuts Paper")
                            playerwin=false;
                            break;
                        case "Lizard":
                            $("#roundOutcome").text("Scissors decapitates Lizard")
                            playerwin=false;
                            break;
                        case "Spock":
                            $("#roundOutcome").text("Spock smashes Scissors")
                            playerwin=true;
                            break;
                        default: break;
                    }
                    break;
                case "Paper":
                    switch(selectedSymbol){
                        case "Rock":
                            $("#roundOutcome").text("Paper covers Rock")
                            playerwin=false;
                            break;
                        case "Scissors":
                            $("#roundOutcome").text("Scissors cuts Paper")
                            playerwin=true;
                            break;
                        case "Lizard":
                            $("#roundOutcome").text("Lizard eats Paper")
                            playerwin=true;
                            break;
                        case "Spock":
                            $("#roundOutcome").text("Paper disproves Spock")
                            playerwin=false;
                            break;
                        default: break;
                    }
                    break;
                case "Lizard":
                    switch(selectedSymbol){
                        case "Rock":
                            $("#roundOutcome").text("Rock crushes Lizard")
                            playerwin=true;
                            break;
                        case "Paper":
                            $("#roundOutcome").text("Lizard eats Paper")
                            playerwin=false;
                            break;
                        case "Scissors":
                            $("#roundOutcome").text("Scissors decapitates Lizard")
                            playerwin=true;
                            break;
                        case "Spock":
                            $("#roundOutcome").text("Lizard poisons Spock")
                            playerwin=false;
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    switch(selectedSymbol){
                        case "Rock":
                            $("#roundOutcome").text("Spock vaporizes Rock")
                            playerwin=false;
                            break;
                        case "Paper":
                            $("#roundOutcome").text("Paper disproves Spock")
                            playerwin=true;
                            break;
                        case "Scissors":
                            $("#roundOutcome").text("Spock smashes Scissors")
                            playerwin=false
                            break;
                        case "Lizard":
                            $("#roundOutcome").text("Lizard poisons Spock")
                            playerwin=true;
                            break;
                        default: break;
                    }
                    break;
            }
            $("input:radio").prop('checked', false)
            //During the course of the switch statement, determines if the player has won the round, and assigns score accordingly
            if(playerwin){
                playerScore+=1
            }
            if(playerwin === false){
                sheldonScore+=1
            }

            $("#playerScore").text(playerScore)
            $("#sheldonScore").text(sheldonScore)
            //Checks to see if either player has won, and displays an appropriate message, then resets the score to 0-0
            if(sheldonScore === 2){
                $("#roundOutcome").text("Sheldon wins! Better luck next time.")
                sheldonScore=0
                playerScore=0
            }
            if(playerScore===2){
                $("#roundOutcome").text("You win! Better luck next time Sheldon.")
                sheldonScore=0
                playerScore=0
            }
        }

    }
)