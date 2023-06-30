let tog = 1
let player1suma = 0
let player2suma = 0

function play(player, playersuma, correccion , num) {
    let sum
    if (playersuma == 'p1sum') {

        player1suma = player1suma + num

        if (player1suma > 100) {
            player1suma = player1suma - num
        }
        if (player1suma == 1) {
            player1suma = 21
        }
        if (player1suma == 14) {
            player1suma = 49
        }
        if (player1suma == 24) {
            player1suma = 44
        }
        if (player1suma == 38) {
            player1suma = 80
        }
        if (player1suma == 56) {
            player1suma = 75
        }
        if (player1suma == 70) {
            player1suma = 88
        }
        if (player1suma == 74) {
            player1suma = 86
        }
        if (player1suma == 78) {
            player1suma = 99
        }
        if (player1suma == 25) {
            player1suma = 4
        }
        if (player1suma == 29) {
            player1suma = 10
        }
        if (player1suma == 45) {
            player1suma = 26
        }
        if (player1suma == 41) {
            player1suma = 23
        }
        if (player1suma == 73) {
            player1suma = 46
        }
        if (player1suma == 94) {
            player1suma = 63
        }
        if (player1suma == 91) {
            player1suma = 71
        }

        sum = player1suma
    }

    if (playersuma == 'p2sum') {

        player2suma = player2suma + num

        if (player2suma > 100) {
            player2suma = player2suma - num
        }
        
        if (player2suma == 1) {
            player2suma = 21
        }
        if (player2suma == 14) {
            player2suma = 49
        }
        if (player2suma == 24) {
            player2suma = 44
        }
        if (player2suma == 38) {
            player2suma = 80
        }
        if (player2suma == 56) {
            player2suma = 75
        }
        if (player2suma == 70) {
            player2suma = 88
        }
        if (player2suma == 74) {
            player2suma = 86
        }
        if (player2suma == 78) {
            player2suma = 99
        }
        if (player2suma == 25) {
            player2suma = 4
        }
        if (player2suma == 29) {
            player2suma = 10
        }
        if (player2suma == 45) {
            player2suma = 26
        }
        if (player2suma == 41) {
            player2suma = 23
        }
        if (player2suma == 73) {
            player2suma = 46
        }
        if (player2suma == 94) {
            player2suma = 63
        }
        if (player2suma == 91) {
            player2suma = 71
        }

        sum = player2suma


    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correccion }px`


    }

    else if (sum == 100) {
        
        if (player == 'p1') {
            alert("gana jugador 1 ")
        }
        else if (player == 'p2') {
            alert("gana jugador 2 ")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9)*62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correccion }px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9-(n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correccion }px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0)*62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correccion }px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correccion }px`
            }
        }
    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    
    num = Math.floor(Math.random() * (6 ) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "2 player Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "1 player Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})