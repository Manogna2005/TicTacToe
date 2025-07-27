var x = 1;
var arr = [["", "", ""], ["", "", ""], ["", "", ""]]
var gameover=false;
for (var i = 1; i <= 9; i++) {
    document.querySelectorAll(".cell")[i - 1].addEventListener("click", function () {
        if(gameover==true){
            return;
        }
        logic(x, this);     
        var b=check();
        if(b==false && x==9){
            document.querySelector(".result").innerHTML="It's a Draw";
            gameover=true;
        }
        x++;
    });
}
function logic(x, y) {
    var a = y.classList[1];
    var m = parseInt(a.slice(1, 2));
    var n = parseInt(a.slice(3));
    if (x % 2 != 0) {
        if (arr[m-1][n-1] == "") {
            y.innerHTML = "O";
            arr[m-1][n-1]="O";
            document.querySelector(".result").innerHTML="X's Turn";
            var x1=new Audio("audio/button-click.mp3");
            x1.play();
        }
    } else {
        if (arr[m-1][n-1] == "") {
            y.innerHTML = "X";
            arr[m-1][n-1]="X";
            document.querySelector(".result").innerHTML="O's Turn";
            var x1=new Audio("audio/button-click.mp3");
            x1.play();
        }
    }
}
function check(){
    var a = false;
    for (var i = 0; i < 3; i++) {
        if (arr[i][0] != '' && arr[i][1] != '' && arr[i][2] != '') {
            if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
                a = true;
                break;
            }
        }
    }
    if (a != true) {
        for (var i = 0; i < 3; i++) {
            if (arr[0][i] != '' && arr[1][i] != '' && arr[2][i] != '') {
                if (arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
                    a = true;
                    break;
                }
            }
        }
    }
    if (a != true) {
        if (arr[0][0] != '' && arr[1][1] != '' && arr[2][2] != '') {
            if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
                a = true;
            }
        }
    }
    if (a != true) {
        if (arr[0][2] != '' && arr[1][1] != '' && arr[2][0] != '') {
            if (arr[0][2] == arr[1][1] && arr[2][0] == arr[1][1]) {
                a = true;
            }
        }
    }
    if(a==true){
       showres();
       gameover=true;
       var x=new Audio("audio/win-sound.mp3");
       x.play();
    }
       return a;
}
function showres() {
    if (x % 2 != 0) {
        document.querySelector(".result").innerHTML = "O Wins 🏆";
    } else {
        document.querySelector(".result").innerHTML = "X Wins 🏆";
    }
    return;
}

document.querySelector("button").addEventListener("click",function(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            arr[i][j]="";
        }
    }
    
    for (var i = 1; i <= 9; i++) {
        document.querySelectorAll(".cell")[i - 1].innerHTML="";
    }
    document.querySelector(".result").innerHTML="O, Start the Game!";
    gameover=false;
    x=1;    
});