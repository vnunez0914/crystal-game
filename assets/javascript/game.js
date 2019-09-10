///4 clickable buttons that generate a random number between 1-12
///Win/loss count var that goes up +1
//button should hold value until a win or loss happens
// new comp number is generated and gems numbers are randomized again
//will need a reset funtion for wins and game over?
//
    
$(document).ready(function(){
    var ranNum1 = Math.floor(Math.random() * 12) + 1;
    var ranNum2 = Math.floor(Math.random() * 12) + 1;
    var ranNum3 = Math.floor(Math.random() * 12) + 1;
    var ranNum4 = Math.floor(Math.random() * 12) + 1;
    var win = 0;
    var loss = 0;
    var compNum = Math.floor(Math.random() * (120-19) + 1) + 19;
    //console.log(compNum)
    $("#winCount").text(win)
    $("#lossCount").text(loss)
    $("#compNum").text(compNum)


    $("#button1").on("click", function(){
        ranNum1;
        console.log(ranNum1);
    })
    
    $("#button2").on("click", function(){
        ranNum2;
        console.log(ranNum2);
    })
    
    $("#button3").on("click", function(){
        ranNum3;
        console.log(ranNum3);
    })
    
    $("#button4").on("click", function(){
        ranNum4;
        console.log(ranNum4);
    })
})