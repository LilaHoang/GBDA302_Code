let gameState = "start"; //DEBUG SET TO start

let lightPointUp;
let lightPointDown;
let lightPointRight;
let lightPointLeft;
let lightNod; //nod
let shadowPointUp;
let shadowPointDown;
let shadowPointRight;
let shadowPointLeft;
let shadowNod; //nod

let initialLightX, initialLightY, initialShadowX, initialShadowY; //for level2
let lightChar, shadowChar;
let lightCharImg, shadowCharImg;
let lightPointing = false,
  shadowPointing = false,
  lightNodding = false,
  shadowNodding = false;
let lightX = 60,
  lightY = 540;
let shadowX = 520,
  shadowY = 540;
let lightswitch1 = true; //DEBUG SET TO TRUE
let lightswitch2 = true; //level2
let lightswitch3 = true;

let lightSpeed = 20; // Speed for Light character's movement
let shadowSpeed = 20; // Speed for Shadow character's movement

let charWidth = 50; // Assuming character image width
let charHeight = 50; // Assuming character image height

let lightDir = "";
let shadowDir = "";
let gameOver = false;
let tutTO = false;

let openingImg,
  gameLore,
  scene1Img,
  scene2Img,
  scene3Img,
  scene4Img,
  scene5Img,
  tutorialImg,
  controls1,
  controls2,
  level1popImg,
  level1Img,
  level1AltImg,
  level2Img,
  level22Img,
  level222Img,
  finalImg;

let ratioX = 800 / 1440;
let ratioY = 600 / 1024;

function setup() {
  createCanvas(800, 600);
  openingImg = loadImage("Menu.png");
  gameLore = loadImage("Storyline 1.png");
  scene1Img = loadImage("Storyline 2.png");
  scene2Img = loadImage("Storyline 3.png");
  scene3Img = loadImage("Storyline 4.png");
  scene4Img = loadImage("Storyline 5.png");
  scene5Img = loadImage("Storyline 6.png");
  tutorialImg = loadImage("Gesture Tutorial.png");
  scene6Img = loadImage("Storyline 7.png");
  controls1 = loadImage("Control Light.png");
  controls2 = loadImage("Control Dark.png");
  level1popImg = loadImage("Level1pop.png");
  level1Img = loadImage("Level1.png");
  level1AltImg = loadImage("Level1alt.png");
  finalImg = loadImage("Final.png");
  level2Img = loadImage("Level 2.1.png"); //重新上传
  level22Img = loadImage("Level 2.2.png");
  level222Img = loadImage("Level 2.3.png");

  //Character pointing images
  lightPointUp = loadImage("upL.png");
  lightPointDown = loadImage("downL.png");
  lightPointRight = loadImage("rightL.png");
  lightPointLeft = loadImage("leftL.png");
  lightNod = loadImage("Light nod.png"); //nod
  shadowPointUp = loadImage("upD.png");
  shadowPointDown = loadImage("downD.png");
  shadowPointRight = loadImage("rightD.png");
  shadowPointLeft = loadImage("leftD.png");
  shadowNod = loadImage("Shadow nod.png"); //nod

  lightCharImg = loadImage("light.png");
  shadowCharImg = loadImage("dark.png");
}

function draw() {
  background(220);
  if (gameOver) {
    fill(0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    setTimeout(resetGame, 1000); // Wait 1 second before resetting
    return;
  } else if (gameState == "start") {
    image(openingImg, 0, 0, width, height);
  } else if (gameState == "gameLore") {
    image(gameLore, 0, 0, width, height);
  } else if (gameState == "scene1") {
    image(scene1Img, 0, 0, width, height);
  } else if (gameState == "scene2") {
    image(scene2Img, 0, 0, width, height);
  } else if (gameState == "scene3") {
    image(scene3Img, 0, 0, width, height);
  } else if (gameState == "scene4") { //walking light
    image(scene4Img, 0, 0, width, height);
  } else if (gameState == "scene5") { //walking dark
    image(scene5Img, 0, 0, width, height);
  } else if (gameState == "tutorial") {
    image(tutorialImg, 0, 0, width, height); //head nodding
    drawCharacters();
    if (!tutTO){
      tutTO = true;
      setTimeout(() => {
        gameState = "scene6"; // Move to the next level after 10 seconds
      }, 10000);
    }
  } else if (gameState == "scene6") {
    image(scene6Img, 0, 0, width, height);
  } else if (gameState == "controls1") {
    image(level1Img, 0, 0, width, height);
    image(controls1, 0, 0, width, height);
  } else if (gameState == "controls2") {
    image(level1Img, 0, 0, width, height);
    image(controls2, 0, 0, width, height);
  } else if (gameState == "level1pop") {
    image(level1popImg, 0, 0, width, height);
  } else if (gameState == "level1") {
    if (lightswitch1 == true) {
      image(level1Img, 0, 0, width, height);
      drawCircle();
      drawCharacters();
      displayHUD();
      if (
        shadowX >= 280 &&
        shadowX <= 320 &&
        shadowY <= 40 &&
        lightX >= 280 &&
        lightX <= 320 &&
        lightY <= 40
      ) {
        // Store initial positions for level2
        lightX = 45;
        lightY = 540;
        shadowX = 700;
        shadowY = 540;
        gameState = "level2"; //move to next level
      }
    } else {
      image(level1AltImg, 0, 0, width, height);
      drawCircle();
      drawCharacters();
      displayHUD();
    }
  } else if (gameState == "level2") {
    if (lightswitch2 == true) {
      image(level22Img, 0, 0, width, height);
      drawButton();
      drawCharacters();
      displayHUD();

      if (
        //level2 part
        shadowX >= 280 &&
        shadowX <= 320 &&
        shadowY <= 40 &&
        lightX >= 280 &&
        lightX <= 320 &&
        lightY <= 40
      ) {
        //lightX = 45;
        //lightY = 540;
        //shadowX = 700;
        //shadowY = 540;
        gameState = "level2"; //set to level2 later
      } else {
        image(level2Img, 0, 0, width, height); ////这里！
        drawButton();
        drawCharacters();
        displayHUD();
      }
    } else if (gameState == "level22") {
      if (lightswitch2 == true) {
        image(level22Img, 0, 0, width, height);
        drawButton();
        drawCharacters();
        displayHUD();

        if (
          //level22 part
          shadowX >= 280 &&
          shadowX <= 320 &&
          shadowY <= 40 &&
          lightX >= 280 &&
          lightX <= 320 &&
          lightY <= 40
        ) {
          lightX = 45;
          lightY = 540;
          shadowX = 700;
          shadowY = 540;
          gameState = "level22"; //set to level2 later
        } else {
          image(level22Img, 0, 0, width, height);
          drawButton();
          drawCharacters();
          displayHUD();
        }
      } else if (gameState == "level222") {
        if (lightswitch3 == true) {
          image(level222Img, 0, 0, width, height);
          drawButton();
          drawCharacters();
          displayHUD();
        }
        if (
          //level222 part
          shadowX >= 280 &&
          shadowX <= 320 &&
          shadowY <= 40 &&
          lightX >= 280 &&
          lightX <= 320 &&
          lightY <= 40
        ) {
          lightX = 45;
          lightY = 540;
          shadowX = 700;
          shadowY = 540;
          gameState = "level222";
        } else {
          image(level222Img, 0, 0, width, height);
          drawButton();
          drawCharacters();
          displayHUD();
        }
      } else if (gameState == "level3") {
      } else if (gameState == "end") {
        image(finalImg, 0, 0, width, height);
      }
      // text(shadowX + " " + shadowY, 10, 10); //DEBUG CODE DELETE LATER PLSSS
    }
  }
}

function resetGame() {
  // scene = 5; // Reset to Level 1
  if (gameState == "level1") {
    lightX = 60;
    lightY = 540;
    shadowX = 520;
    shadowY = 540;
    lightswitch1 = true;

    gameOver = false;
    textAlign(LEFT, TOP);
  } else if (gameState == "level2") {
    lightX = 45;
    lightY = 540;
    shadowX = 700;
    shadowY = 540;
    lightswitch1 = true;

    gameOver = false;
    textAlign(LEFT, TOP);
  }
}

function mousePressed() {
  if (gameState == "start") {
    if (
      mouseX > 533 * ratioX &&
      mouseX < (533 + 386) * ratioX &&
      mouseY > 640 * ratioY &&
      mouseY < (640 + 126) * ratioY
    ) {
      gameState = "gameLore";
    }
  } else if (gameState == "gameLore") {
    gameState = "scene1";
  } else if (gameState == "scene1") {
    gameState = "scene2";
  } else if (gameState == "scene2") {
    gameState = "scene3";
  } else if (gameState == "scene3") {
    gameState = "scene4";
  } else if (gameState == "scene4") {
    gameState = "scene5";
  } else if (gameState == "scene5") {
    lightY = 400;
    shadowY = 400;
    gameState = "tutorial";
  //} else if (gameState == "tutorial") {
  //gameState = "scene6";
  } else if (gameState == "scene6") {
    lightX = 60;
    lightY = 540;
    shadowX = 520;
    shadowY = 540;
    gameState = "controls1";
  } else if (gameState == "controls1") {
    gameState = "controls2";
  } else if (gameState == "controls2") {
    gameState = "level1pop";
  } else if (gameState == "level1pop") {
    gameState = "level1";
  } else if (gameState == "level1Alt") {
    gameState = "level2";
  } else if (gameState == "end") {
  }
}

function drawCharacters() {
  if (gameState == "tutorial") {
  // Draw Light Character
    let w = 150;
    let h = 150;
    
    if ((lightDir == "" || !lightPointing) && !lightNodding) {
      image(lightCharImg, lightX, lightY, w, h);
    }
    else if (lightNodding) {
      image(lightNod, lightX, lightY, w, h); //nod
    }
    else if (lightPointing && lightDir == "up") {
      image(lightPointUp, lightX, lightY, w, h); //change lightCharImg to the proper dir based on lightDir, need to add if statement for each dir, only "up" "down" "left" right is coded for so far
    }
    else if (lightPointing && lightDir == "down") {
      image(lightPointDown, lightX, lightY, w, h);
    }
    else if (lightPointing && lightDir == "right") {
      image(lightPointRight, lightX, lightY, w, h);
    }
    else if (lightPointing && lightDir == "left") {
      image(lightPointLeft, lightX, lightY, w, h);
    }
    
  
    // Draw Shadow Character
    if ((shadowDir == "" || !shadowPointing) && !shadowNodding) {
      image(shadowCharImg, shadowX, shadowY, w, h);
    }
    else if (shadowNodding) {
      image(shadowNod, shadowX, shadowY, w, h); //nod
    }
    else if (shadowPointing && shadowDir == "up") {
      image(shadowPointUp, shadowX, shadowY, w, h);
    }
    else if (shadowPointing && shadowDir == "down") {
      image(shadowPointDown, shadowX, shadowY, w, h);
    }
    else if (shadowPointing && shadowDir == "left") {
      image(shadowPointLeft, shadowX, shadowY, w, h);
    }
    else if (shadowPointing && shadowDir == "right") {
      image(shadowPointRight, shadowX, shadowY, w, h);
    }
     
  } 
  else {
    // Draw Light Character
    let w = 50;
    let h = 50;
    
    if ((lightDir == "" || !lightPointing) && !lightNodding) {
      image(lightCharImg, lightX, lightY, w, h);
    }
    else if (lightNodding) {
      image(lightNod, lightX, lightY, w, h); //nod
    }
    else if (lightPointing && lightDir == "up") {
      image(lightPointUp, lightX, lightY, w, h); //change lightCharImg to the proper dir based on lightDir, need to add if statement for each dir, only "up" "down" "left" right is coded for so far
    }
    else if (lightPointing && lightDir == "down") {
      image(lightPointDown, lightX, lightY, w, h);
    }
    else if (lightPointing && lightDir == "right") {
      image(lightPointRight, lightX, lightY, w, h);
    }
    else if (lightPointing && lightDir == "left") {
      image(lightPointLeft, lightX, lightY, w, h);
    }
    
  
    // Draw Shadow Character
    if ((shadowDir == "" || !shadowPointing) && !shadowNodding) {
      image(shadowCharImg, shadowX, shadowY, w, h);
    }
    else if (shadowNodding) {
      image(shadowNod, shadowX, shadowY, w, h); //nod
    }
    else if (shadowPointing && shadowDir == "up") {
      image(shadowPointUp, shadowX, shadowY, w, h);
    }
    else if (shadowPointing && shadowDir == "down") {
      image(shadowPointDown, shadowX, shadowY, w, h);
    }
    else if (shadowPointing && shadowDir == "left") {
      image(shadowPointLeft, shadowX, shadowY, w, h);
    }
    else if (shadowPointing && shadowDir == "right") {
      image(shadowPointRight, shadowX, shadowY, w, h);
    }
  }
 }

// function drawKeys() {
//   for (let key of currentLevelKeys) {
//     if (!key.collected) {
//       image(keyImg, key.x - 10, key.y - 10, 30, 30); // Draw key image
//       checkKeyCollection(key);
//     }
//   }
// }

// function checkKeyCollection(key) {
//   // If either character touches a key, collect it immediately
//   if (
//     (dist(lightX, lightY, key.x, key.y) < 30 ||
//       dist(shadowX, shadowY, key.x, key.y) < 30) &&
//     !key.collected
//   ) {
//     key.collected = true;
//     keysCollected++;
//     console.log("Key collected!");
//   }
// }

function displayHUD() {
  fill(66, 46, 27);
  noStroke();
  rect(50, 0, 15, 50);
  rect(150, 0, 15, 50);
  rect(10, 50, 200, 70);

  fill(248, 247, 239);
  textSize(20);
  textStyle(BOLD);
  textFont("Verdana");

  textAlign(LEFT, TOP);
  if (gameState == "level1") {
    text(`Level: 1`, 18, 65);
  } else if (gameState == "level2") {
    text(`Level: 2`, 18, 65);
  }
  // text(`Keys Collected: ${keysCollected}/${totalKeys}`, 18, 95);
}

function drawCircle() {
  fill(128, 126, 117); // button
  rect(321, 510, 20, 20); // Circle on level 1 & alt
}
function drawButton() {
  fill(128, 126, 117); // button for level2
  rect(165, 320, 20, 20);
  rect(165, 170, 20, 20);
  rect(470, 510, 20, 20);
  rect(700, 170, 20, 20);
}

function keyPressed() {
  if (key === "Q" || key === "q") {
    lightNodding = false;
    lightPointing = !lightPointing;
  }
  // Light Character Movement (WASD) with smooth speed
  if (lightPointing) {
    if (key === "W" || key === "w") lightDir = "up";
    if (key === "A" || key === "a") lightDir = "left";
    if (key === "S" || key === "s") lightDir = "down";
    if (key === "D" || key === "d") lightDir = "right";
  } else {
    lightDir = "";
    if (key === "W" || key === "w") {
      if (gameState == "level1") {
        if (lightX >= 40 && lightX <= 80 && lightY <= 260) {
          gameOver = true;
        } else if (
          lightX >= 100 &&
          lightX <= 400 &&
          lightY >= 360 &&
          lightY <= 460
        ) {
          gameOver = true;
        } else {
          lightY = max(lightY - lightSpeed, 40);
        }
      } else if (gameState == "level2") {
        //level2 move
        if (lightX >= 20 && lightX <= 80 && lightY <= 350) {
          gameOver = true;
        } else if (
          lightX >= 100 &&
          lightX <= 340 &&
          lightY >= 220 &&
          lightY <= 140
        ) {
          gameOver = true;
        } else {
          lightY = max(lightY - lightSpeed, 40);
        }
      }
    }
    if (key === "A" || key === "a") {
      if (gameState == "level1") {
        if (lightX <= 280 && lightX > 200 && lightY <= 240) {
          gameOver = true;
        } else if (lightX <= 40 && lightY >= 260) {
          gameOver = true;
        } else {
          lightX = max(lightX - lightSpeed, 0);
        }
      } else if (gameState == "level2") {
        if (lightX <= 20 && lightY >= 350) {
          gameOver = true;
        } else if (lightY <= 350 && lightX <= 120 && lightY >= 180) {
          gameOver = true;
        } else if (lightY <= 130 && lightX <= 340) {
          gameOver = true;
        } else {
          lightX = max(lightX - lightSpeed, 0);
        }
      }
    }
    if (key === "S" || key === "s") {
      if (gameState == "level1") {
        if (lightX >= 100 && lightX <= 400 && lightY >= 500) {
          gameOver = true;
        } else if (
          lightX >= 100 &&
          lightX <= 320 &&
          lightY >= 300 &&
          lightY < 400
        ) {
          gameOver = true;
        } else {
          lightY = min(lightY + lightSpeed, height - 40);
        }
      } else if (gameState == "level2") {
        if (lightX >= 100 && lightX <= 400 && lightY >= 500) {
          gameOver = true;
        } else if (
          lightX >= 100 &&
          lightX <= 320 &&
          lightY >= 300 &&
          lightY < 400
        ) {
          gameOver = true;
        } else {
          lightY = min(lightY + lightSpeed, height - 40);
        }
      }
    }
    if (key === "D" || key === "d") {
      if (gameState == "level1") {
        if (lightY >= 520 && lightX >= 80) {
          gameOver = true;
        } else if (lightY >= 460 && lightX >= 380) {
          gameOver = true;
        } else if (
          lightswitch1 == false &&
          lightY >= 260 &&
          lightY <= 300 &&
          lightX >= 260
        ) {
          gameOver = true;
        } else if (lightY >= 320 && lightX >= 80 && lightY < 460) {
          gameOver = true;
        } else if (lightY >= 40 && lightX >= 320) {
          gameOver = true;
        } else {
          lightX = min(lightX + lightSpeed, width - 40);
        }
      } else if (gameState == "level2") {
        if (lightY >= 480 && lightX >= 60) {
          gameOver = true;
        } else if (lightY >= 220 && lightX >= 165) {
          gameOver = true;
        } else if (lightY >= 120 && lightX >= 400) {
          gameOver = true;
        } else {
          lightX = min(lightX + lightSpeed, width - 40);
        }
      }
    }
  }

  // Shadow Character Controls with smooth speed
  if (key === "P" || key === "p") {
    shadowNodding = false;
    shadowPointing = !shadowPointing;
  }
  if (shadowPointing) {
    if (keyCode === UP_ARROW) shadowDir = "up";
    if (keyCode === LEFT_ARROW) shadowDir = "left";
    if (keyCode === DOWN_ARROW) shadowDir = "down";
    if (keyCode === RIGHT_ARROW) shadowDir = "right";
  } else {
    shadowDir=""
    if (keyCode === UP_ARROW) {
      if (gameState == "level1") {
        if (shadowX >= 340 && shadowX <= 660 && shadowY <= 100) {
          gameOver = true;
        } else if (
          shadowX >= 500 &&
          shadowX <= 600 &&
          shadowY <= 280 &&
          shadowY > 200
        ) {
          gameOver = true;
        }
        shadowY = max(shadowY - shadowSpeed, 40);
      }
    } else if (gameState == "level2") {
      // copy & paste L1 & change
      if (shadowX >= 340 && shadowX <= 660 && shadowY <= 100) {
        gameOver = true;
      } else if (
        shadowX >= 680 &&
        shadowX <= 740 &&
        shadowY <= 280 &&
        shadowY >= 200
      ) {
        gameOver = true;
      }
      shadowY = max(shadowY - shadowSpeed, 40);
    }
    if (keyCode === LEFT_ARROW) {
      if (gameState == "level1") {
        if (
          shadowX <= 640 &&
          shadowX >= 580 &&
          shadowY <= 260 &&
          shadowY >= 160
        ) {
          gameOver = true;
        } else if (shadowX <= 500 && shadowX >= 460 && shadowY >= 280) {
          gameOver = true;
        } else if (
          lightswitch1 == true &&
          shadowX <= 360 &&
          shadowY >= 100 &&
          shadowY <= 140
        ) {
          gameOver = true;
        } else if (shadowX <= 280 && shadowY <= 300) {
          gameOver = true;
        }
        shadowX = max(shadowX - shadowSpeed, 0);
      } else if (gameState == "level2") {
        if (shadowX <= 680 && shadowY >= 550) {
          gameOver = true;
        } else if (
          shadowX >= 420 &&
          shadowX <= 680 &&
          shadowY >= 350 &&
          shadowY <= 500
        ) {
          gameOver = true;
        }
        shadowX = max(shadowX - shadowSpeed, 0);
      }
    }
    if (keyCode === DOWN_ARROW) {
      if (gameState == "level1") {
        if (shadowX <= 320 && shadowY >= 300) {
          gameOver = true;
        } else if (lightswitch1 == true && shadowY <= 40) {
          gameOver = true;
        } else if (
          shadowX <= 600 &&
          shadowX >= 340 &&
          shadowY >= 140 &&
          shadowY <= 180
        ) {
          gameOver = true;
        } else if (shadowX <= 660 && shadowX >= 560 && shadowY >= 340) {
          gameOver = true;
        }
        shadowY = min(shadowY + shadowSpeed, height - 40);
      }
    }
    if (keyCode === RIGHT_ARROW) {
      if (gameState == "level1") {
        if (shadowX >= 540 && shadowY >= 360) {
          gameOver = true;
        } else if (
          shadowX >= 600 &&
          shadowX >= 660 &&
          shadowY >= 100 &&
          shadowY <= 340
        ) {
          gameOver = true;
        } else if (shadowX >= 320 && shadowY <= 80) {
          gameOver = true;
        } else if (
          shadowX <= 360 &&
          shadowX >= 320 &&
          shadowY >= 160 &&
          shadowY <= 300
        ) {
          gameOver = true;
        }
        shadowX = min(shadowX + shadowSpeed, width - 40);
      }
    }
  }

  // Communication Interactions
  if (key === "F" || key === "f") console.log("Light Character Waves");
  if (key === "R" || key === "r") {
    lightPointing = false;
    lightDir = "";
    lightNodding = !lightNodding;
  }
  if (key === "E" || key === "e") {
    console.log("Light Character Interacts");
    if (gameState == "level1") {
      if (lightX >= 300 && lightX <= 320 && lightY >= 480 && lightX <= 500) {
        lightswitch1 = !lightswitch1;
        if (shadowX <= 320 && shadowY >= 60) {
          gameOver = true;
        }
      }
    } else if (gameState == "level2") {
      if (
        shadowX >= 165 &&
        shadowX <= 190 &&
        shadowY >= 310 &&
        shadowY <= 340
      ) {
        lightswitch2 = !lightswitch2;
      }
    }
    if (shadowX >= 165 && shadowX <= 190 && shadowY >= 170 && shadowY <= 190) {
      lightswitch3 = !lightswitch3;
    }
  }
  if (key === "I" || key === "i") console.log("Shadow Character Waves");
  if (key === "O" || key === "o") {
    shadowPointing = false;
    shadowDir = "";
    shadowNodding = !shadowNodding;
  }
  if (key === "L" || key === "l") console.log("Shadow Character Interacts");
}
