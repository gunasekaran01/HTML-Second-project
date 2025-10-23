var box1 = document.getElementById("num1")
var box2 = document.getElementById("num2")
var result = document.getElementById("num3")
function out() {
    var a = Number(box1.value)
    var b = Number(box2.value)

    var c = a + b
    result.textContent = ("Total of two number =" + c)
}

var userno = document.getElementById("userno")
var btn = document.getElementById("check")
var para = document.getElementById("para")
var score = document.getElementById("score")
var Totalscore = 10
var sysno = Math.floor(Math.random() * 10) + 1
function checkthis() {
    var a = userno.value
    if (a == sysno) {
        para.textContent = "You are right"
        alert("YOU WON THE GAME")
    }
    else {
        Totalscore = Totalscore - 1
        score.textContent = "Score:" + Totalscore
        para.textContent = "You are Wrong"
        if (Totalscore == 5) {
            alert("You leads to loss")
        }
        if (Totalscore == 0) {
            alert("YOU LOSS THE GAME")
            para.textContent = "You are totally Wrong"
        }
    }

}


var a = document.getElementById("in")
var score = document.getElementById("score")
var para = document.getElementById("result")
var coscore = document.getElementById("coscore")
var result = 0
var coresult=0
var round=0
var attempt =3
function setup(event) {
    if (round>=attempt){
        if(result<coresult){
            alert("You lost the match")
        }
        else if(result>coresult){
            alert("you win the match")
        }
        else{
            alert("The match is tie")
        }
        return
    }
    var array = ["rock", "paper", "scissor"]
    var x = array[Math.floor(Math.random() * array.length)]
    var user = event.target.textContent
    if (user == x) {
        document.getElementById("out").innerHTML = ("The computer choose:" + x)
        para.textContent = "Round:"+(round+1)+"The Match is Tie"
        result=result
        score.textContent = "Your Score:" + result
        coresult=coresult
        coscore.textContent = "computer Score:" + coresult
    }
    else if ((user == "scissor" && x == "paper") || (user == "paper" && x == "rock") || (user == "rock" && x == "scissor")) {
        document.getElementById("out").innerHTML = ("The computer choose:" + x)
        para.textContent = "Round:"+(round+1)+"You Win the Match"
        result=result+1
        score.textContent = "Your Score:" + result
        coresult=coresult
        coscore.textContent = "computer Score:" + coresult
    }
    else {
        document.getElementById("out").innerHTML = ("The computer choose:" + x)
        para.textContent = "Round:"+(round+1)+"You lose the Match"
        result=result
        score.textContent = "Your Score:" + result
        coresult=coresult+1
        coscore.textContent = "computer Score:" + coresult
    }
    round++

}
function reset(){
    result=0
    coresult=0
    round=0
    document.getElementById("out").innerHTML = "The computer may choose:(Rock,Paper,Scissor)"
    coscore.textContent = "computer Score:" + coresult
    score.textContent = "Your Score:" + result
     para.textContent = "The Match Begin"

}