let args = process.argv.slice(2);

if (args.length != 7) {
  throw new Error("Please enter 7 numbers");
}

let hit = false;
let nums = [];
let highScore = 0;
let rolls = 0;

function roll() {
  for (let i = 0; i < 7; i++) {
    let randNum = Math.floor(Math.random() * 40);
    let uniqueNum = true;
    for (let x = 0; x < 7; x++) {
      if (nums[x != randNum]) {
        uniqueNum = true;
      }
    }
    if (uniqueNum) {
      nums[i] = randNum;
    }
  }

  rolls++;

  let corrNums = 0;
  console.log(nums);
  switch (nums[corrNums]) {
    case args[0]:
      corrNums++;
      break;
    case args[1]:
      corrNums++;
      break;
    case args[2]:
      corrNums++;
      break;
    case args[3]:
      corrNums++;
      break;
    case args[4]:
      corrNums++;
      break;
    case args[5]:
      corrNums++;
      break;
    case args[6]:
      corrNums++;
      break;
    case args[7]:
      corrNums++;
      break;
  }

  if (corrNums == 7) {
    hit = true;
  }
  if (corrNums > highScore) {
    highScore = corrNums;
    console.log(
      "Numbers correct: " + corrNums + "! It took you: " + rolls + " rolls."
    );
  }
}

while (!hit) {
  roll();
}
