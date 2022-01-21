score = 0;

function increaseScore()
{
    score = score+1;
    document.getElementById("UpdateScore").innerHTML="Score:" + score;
}

function saveScore()
{
    localStorage.setItem("Score",score);
}

function movepage()
{
    window.location="activity2.html";
}