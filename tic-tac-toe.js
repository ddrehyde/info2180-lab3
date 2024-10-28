let x = true;
let win=false;
psbs=[
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
    ["","",""],
]
window.onload=function(){
    document.getElementsByClassName("btn")[0].onclick=function(){
        win=false;
        document.getElementById("status").innerHTML="Move your mouse over a square and click to play an X or an O."
        psbs=[
            ["","",""],
            ["","",""],
            ["","",""],
            ["","",""],
            ["","",""],
            ["","",""],
            ["","",""],
            ["","",""],
        ];
        var square = document.getElementById("board").children;
        for (let y=0; y < square.length; y++){
            square[y].innerHTML="";
            square[y].classList.remove(square[y].classList[1])
            square[y].classList.remove(square[y].classList[2])
            x=true
        }
    }
    var square = document.getElementById("board").children;
    for (let y=0; y < square.length; y++){
        square[y].setAttribute("class","hover");
        square[y].addEventListener("mouseover", function(){
            square[y].classList.add("hover")
        });
        square[y].setAttribute("class","hover");
        square[y].addEventListener("mouseout", function(){
            square[y].classList.remove("hover")
        });
        square[y].setAttribute("class","square");
        square[y].onclick= function(){
            if(!win)
            {
                if(square[y].classList[4]!="clicked" && square[y].innerHTML== ""){
                    if(x==true){
                        square[y].innerHTML = "X";
                        square[y].classList.add("X");
                        x = false;
                        checkwin(y,"x")
                    }
                    else{
                        square[y].innerHTML = "O";
                        square[y].classList.add("O");
                        x = true;
                        checkwin(y,"o")
                    }
                }
                square[y].classList.add("clicked");
            }      
        };
    }
}
function checkwin(y,val){
    function allEqual(arr){
        value=arr.every((val) => val === arr[0]);
        return value;
    }
    if(y==0 || y==1||y==2){
        psbs[0][y]=val;
        allEqual(psbs[0])?win=true:console.log("No win yet, keep playing!")
    }
    if(y==3|| y==4||y==5){
        psbs[1][y-3]=val;
        allEqual(psbs[1])?win=true:console.log("No win yet, keep playing!")
    }
    if(y==6|| y==7||y==8){
        psbs[2][y-6]=val;
        allEqual(psbs[2])?win=true:console.log("not same suh")
    }
    if(y==0|| y==3||y==6){
        if(y==3)psbs[3][1]=val
        if(y==0)psbs[3][0]=val
        if(y==6)psbs[3][2]=val
        allEqual(psbs[3])?win=true:console.log("No win yet, keep playing!")
    }
    if(y==1|| y==4||y==7){
        if(y==1)psbs[4][0]=val
        if(y==4)psbs[4][1]=val
        if(y==7)psbs[4][2]=val
        allEqual(psbs[4])?win=true:console.log("No win yet, keep playing!")
    }
    if(y==2|| y==5||y==8){
        if(y==2)psbs[5][0]=val
        if(y==5)psbs[5][1]=val
        if(y==8)psbs[5][2]=val
        allEqual(psbs[5])?win=true:console.log("No win yet, keep playing!")
    }
    if(y==0|| y==4||y==8){
        if(y==0)psbs[6][0]=val
        if(y==4)psbs[6][1]=val
        if(y==8)psbs[6][2]=val
        allEqual(psbs[6])?win=true:console.log("No win yet, keep playing!")
    }
    if(y==2|| y==4||y==6){
        if(y==2)psbs[7][0]=val
        if(y==4)psbs[7][1]=val
        if(y==6)psbs[7][2]=val
        allEqual(psbs[7])?win=true:console.log("No win yet, keep playing!")
    }
    if(win){
       document.getElementById("status").innerHTML="Congratulations! "+val.toUpperCase()+" is the Winner!"
       document.getElementById("status").classList.add("you-won");
    }
}