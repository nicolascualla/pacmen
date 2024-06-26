var pos = 0;
const pacArray = [
  ['./PacMan1.png', './PacMan2.png'],
  ['./PacMan3.png', './PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './PacMan1.png';
  newimg.width = 100;

  // Setting the position
  let y = Math.random() * window.innerHeight;
  let x = Math.random() * window.innerWidth;
  newimg.style.top = y;
  newimg.style.left = x;
  position.x = x;
  position.y = y;

  // append child to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if((item.position.x + item.newimg.width) >= window.innerWidth) {
    item.velocity.x = item.velocity.x * -1;
  } else if (item.position.x <= 0) {
    item.velocity.x = item.velocity.x * -1;
  }

  if((item.position.y + item.newimg.height) >= window.innerHeight) {
    item.velocity.y = item.velocity.y * -1;
  } else if (item.position.y <= 0) {
    item.velocity.y = item.velocity.y * -1;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
