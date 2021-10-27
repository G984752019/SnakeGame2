let nowPlaying = false;
let Timer;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);



function play(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  //位置座標の訂正
  px += xd;
  if(px >= SIZE){
    px = 0;
  }else if(px < 0){
    px = SIZE;
  }
  py += yd;
  if(py >= SIZE){
    py = 0;
  }else if(py < 0){
    py = SIZE;
  }

  snake.push({x:px, y:py});
  for (let i = 0; i<snake.length-1; i++){
    if(i == snake.length-2){
      ctx.beginPath();
      ctx.arc(snake[i].x*SIZE+9, snake[i].y*SIZE+9, 9.5, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
      ctx.fillStyle = "lime";
      ctx.fill();
      ctx.strokeStyle = "gray";
      ctx.stroke();
    }else{
      ctx.fillStyle = "lime";
      ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    }
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }

  }

  while(snake.length > tail){
    snake.shift();
  }

  getApple();
  switch (level) {
    case 1:
      getBadApple();
      break;

    case 2:
      getBadApple();
      getBadApple2();
      getBadApple3();
      break;

    case 3:
      getBadApple();
      getBadApple2();
      getBadApple3();
      getBadApple4();
      getBadApple5();
      break;


  }

  if(score >= MAX){
    score = MAX;
    document.getElementById('score').innerText = score;
    gameclear();
  }
}

function start(){
  if(level == 0){
    alert('Please choose Levels.')
  }else{
    if(!nowPlaying){
      Timer = setInterval(function(){
        play();
      }, 1000/FPS);
      document.getElementById('Max').innerText = MAX;
      document.getElementById('score').innerText = score;
    }
    nowPlaying = true;
  }
}

function stop(){
  clearInterval(Timer);
  nowPlaying = false;
}

function reset(){
  px = py = np;
  xd = yd = nd;
  switch (level) {
    case 1:
      reset1();
      break;
    case 2:
      reset2();
      break;
    case 3:
      reset3();
      break;
  }
  tail = MIN;
  score = 0;
  count = 0;
  document.getElementById('score').innerText = score;
  for(let i = 0; i<tail; i++){
    snake.shift();
  }
  ctx.clearRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
}

function reset1(){
  appleX = appleY = napple;
  apple2X = apple2Y = napple2;
}

function reset2(){
  appleX = appleY = napple;
  apple2X = apple2Y = napple2;
  apple3X = napple2;
  apple3Y = napple;
  apple4X = napple;
  apple4Y = napple3;
}

function reset3(){
  appleX = appleY = napple;
  apple2X = apple2Y = napple2;
  apple3X = napple2;
  apple3Y = napple;
  apple4X = napple;
  apple4Y = napple3;
  apple5X = napple4;
  apple5Y = napple3;
  apple6X = napple;
  apple6Y = napple4;
}

function getApple(){
  if(appleX == px && appleY == py){
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
    score += 100;
    document.getElementById('score').innerText = score;
  }
  ctx.beginPath();
  ctx.arc(appleX*SIZE+10, appleY*SIZE+10, 10.0, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
  ctx.fillStyle = "red";
  ctx.fill();
  //ctx.fillRect(appleX*SIZE, appleY*SIZE, 20, 20);
}

function getBadApple(){
  if(apple2X == px && apple2Y == py){
    tail--;
    apple2X = Math.floor(Math.random()*canv.width/SIZE);
    apple2Y = Math.floor(Math.random()*canv.height/SIZE);
    score -= 20;
    document.getElementById('score').innerText = score;
  }

  ctx.beginPath();
  ctx.arc(apple2X*SIZE+10, apple2Y*SIZE+10, 10.0, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
  ctx.fillStyle = "purple";
  ctx.fill();
  //ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, 20, 20);
  if(score < 0 || tail == 0){
    gameover();
  }
}

function getBadApple2(){
  if(apple3X == px && apple3Y == py){
    tail--;
    apple3X = Math.floor(Math.random()*canv.width/SIZE);
    apple3Y = Math.floor(Math.random()*canv.height/SIZE);
    score -= 20;
    document.getElementById('score').innerText = score;
  }

  ctx.beginPath();
  ctx.arc(apple3X*SIZE+10, apple3Y*SIZE+10, 10.0, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
  ctx.fillStyle = "purple";
  ctx.fill();
  //ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, 20, 20);
  if(score < 0 || tail == 0){
    gameover();
  }
}

function getBadApple3(){
  if(apple4X == px && apple4Y == py){
    tail--;
    apple4X = Math.floor(Math.random()*canv.width/SIZE);
    apple4Y = Math.floor(Math.random()*canv.height/SIZE);
    score -= 20;
    document.getElementById('score').innerText = score;
  }

  ctx.beginPath();
  ctx.arc(apple4X*SIZE+10, apple4Y*SIZE+10, 10.0, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
  ctx.fillStyle = "purple";
  ctx.fill();
  //ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, 20, 20);
  if(score < 0 || tail == 0){
    gameover();
  }
}

function getBadApple4(){
  if(apple5X == px && apple5Y == py){
    tail--;
    apple5X = Math.floor(Math.random()*canv.width/SIZE);
    apple5Y = Math.floor(Math.random()*canv.height/SIZE);
    score -= 20;
    document.getElementById('score').innerText = score;
  }

  ctx.beginPath();
  ctx.arc(apple5X*SIZE+10, apple5Y*SIZE+10, 10.0, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
  ctx.fillStyle = "purple";
  ctx.fill();
  //ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, 20, 20);
  if(score < 0 || tail == 0){
    gameover();
  }
}

function getBadApple5(){
  if(apple6X == px && apple6Y == py){
    tail--;
    apple6X = Math.floor(Math.random()*canv.width/SIZE);
    apple6Y = Math.floor(Math.random()*canv.height/SIZE);
    score -= 20;
    document.getElementById('score').innerText = score;
  }

  ctx.beginPath();
  ctx.arc(apple6X*SIZE+10, apple6Y*SIZE+10, 10.0, 0 * Math.PI / 180, 360 * Math.PI / 180, true);
  ctx.fillStyle = "purple";
  ctx.fill();
  //ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, 20, 20);
  if(score < 0 || tail == 0){
    gameover();
  }
}

function easy(){
  level = 1;
  FPS = 8;
  document.getElementById('level').innerText = "EASY";
}

function normal(){
  level = 2;
  FPS = 15;
  document.getElementById('level').innerText = "NORMAL";
}

function hard(){
  level = 3;
  FPS = 25;
  document.getElementById('level').innerText = "HARD";
}
function gameclear(){
  stop();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.font = '40px sans-serif';
  ctx.textBaseline = 'center';
  ctx.textAlign = 'center';
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  ctx.fillStyle = "orange";
  ctx.fillText("GAME CLEAR!!", x, y);
}

function gameover(){
  stop();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.font = '40px sans-serif';
  ctx.textBaseline = 'center';
  ctx.textAlign = 'center';
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  ctx.fillStyle = "red";
  ctx.fillText("GAME OVER", x, y);
}
