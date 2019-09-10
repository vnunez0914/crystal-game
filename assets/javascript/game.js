///4 clickable buttons that generate a random number between 1-12
///Win/loss count var that goes up +1
//button should hold value until a win or loss happens
// new comp number is generated and gems numbers are randomized again
//will need a reset funtion for wins and game over?
//

$(document).ready(function () {
    var ranNum1 = Math.floor(Math.random() * 12) + 1;
    var ranNum2 = Math.floor(Math.random() * 12) + 1;
    var ranNum3 = Math.floor(Math.random() * 12) + 1;
    var ranNum4 = Math.floor(Math.random() * 12) + 1;
    var win = 0;
    var loss = 0;
    var compNum = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    var userTotal;



    function resetGame() {
        compNum = Math.floor(Math.random() * (120 - 19) + 1) + 19;
        userTotal = 0;
        //console.log(compNum)
        $("#winCount").text(win)
        $("#lossCount").text(loss)
        $("#compNum").text(compNum)
        $('#userScore').text(userTotal)
        renderCrystals();

    };

    function renderCrystals() {
        var crystalImages = [
            "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/17/Soul_Stone_VFX.png/revision/latest?cb=20190427012633",
            "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702",
            " https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f0/Time_Stone_VFX.png/revision/latest?cb=20190427012724",
            "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Power_Stone_VFX.png/revision/latest?cb=20190427012543"
        ];

        $('.crystal-container').empty();

        for (var i = 0; i < crystalImages.length; i++) {
            var crystalButton = $("<div>");
            crystalButton.attr("class", "crystal");
            crystalButton.attr('class', 'col-md-3');
            crystalButton.attr('id', "crystal-" + i);
            var image = $('<img>');
            image.attr('src', crystalImages[i]);
            crystalButton.append(image);
            var value = Math.floor(Math.random() * 12) + 1
            crystalButton.attr('data-value', value);
            $('.crystal-container').append(crystalButton)
            console.log("Crystal: " + i + " Value: " + value)
        }
    };

    $(document).on('click', '.crystal', function () {
        var value = $(this).attr('data-value');
        console.log(value);
        userTotal += parseInt(value);
        $('#userScore').text(userTotal)
        if (userTotal === compNum) {
            win++;
            resetGame();
        } else if (userTotal > compNum) {
            loss++;
            resetGame();
        }

    })


    // $("#button1").on("click", function(){
    //     ranNum1;
    //     console.log(ranNum1);
    // })

    // $("#button2").on("click", function(){
    //     ranNum2;
    //     console.log(ranNum2);
    // })

    // $("#button3").on("click", function(){
    //     ranNum3;
    //     console.log(ranNum3);
    // })

    // $("#button4").on("click", function(){
    //     ranNum4;
    //     console.log(ranNum4);
    // })
    resetGame();
}) 