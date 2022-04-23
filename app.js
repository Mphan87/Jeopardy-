//select the gameboard table

const gameBoard = document.querySelector('#board');



//array of ID of catagories

const catoryIDs = [
  "1892",
  "4483",
  "88",
  "234",
  "257",
  "876",
  "90",
  "209",
  "120",
  "200",
  "400",
  "305",
  "870",
  "189",
  "820",
  "754",
  "545",
  "401",
  "239",
  "161",
];


//shuffle the array using Fisher-Yates's method

function shuffle(catoryIDs) {
  let counter = catoryIDs.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = catoryIDs[counter];
    catoryIDs[counter] = catoryIDs[index];
    catoryIDs[index] = temp;
  }

  return catoryIDs;
}

// Grabbing the first 6 ID generated from the shuffled array using index 0-6

let shuffledIds = shuffle(catoryIDs)
let cat0 = shuffledIds[1]
let cat1 = shuffledIds[3]
let cat2 = shuffledIds[6]
let cat3 = shuffledIds[9]
let cat4 = shuffledIds[14]
let cat5 = shuffledIds[19]


// pulling information from the API using ID from above
//Catagory 0 - looking through the api results to populate column 0

async function Catagory0(cat0) {
  const res = await axios.get(`https://jservice.io/api/category?id=${cat0}`);
  let cats0 = res.data.clues.map(result => {
    let cat = result;

    return {
      title: res.data.title,
      answer: cat.answer,
      question: cat.question,
      value: cat.value,
    };
  });

  return cats0.slice(0, 5);
}

(async () => {
  let test = await Catagory0(cat0)
  for (let i = 0; i < 6; i++) {
    let getID = ("cat0" + "-" + i)

    const tr = document.getElementById(getID)
    const trCat = document.getElementById("cat0")

    trCat.innerText = test[i].title

    tr.addEventListener("click", () => {
      tr.innerText = test[i].question;

      tr.addEventListener("click", () => {
        tr.innerText = test[i].answer;

      })
    });
  }
})();


//Catagory 1 - looking through the api results to populate column 1

async function Catagory1(cat1) {
  const res = await axios.get(`https://jservice.io/api/category?id=${cat1}`);
  let cats1 = res.data.clues.map(result => {
    let cat = result;

    return {
      title: res.data.title,
      answer: cat.answer,
      question: cat.question,
      value: cat.value,
    };
  });

  return cats1.slice(0, 5);
}

(async () => {
  let test = await Catagory1(cat1)
  for (let i = 0; i < 6; i++) {
    let getID = ("cat1" + "-" + i)
    const tr = document.getElementById(getID)
    const trCat = document.getElementById("cat1")

    trCat.innerText = test[i].title

    tr.addEventListener("click", () => {
      tr.innerText = test[i].question;

      tr.addEventListener("click", () => {
        tr.innerText = test[i].answer;

      })
    });
  }
})();


//Catagory 2 - looking through the api results to populate column 2

async function Catagory2(cat2) {
  const res = await axios.get(`https://jservice.io/api/category?id=${cat2}`);
  let cats2 = res.data.clues.map(result => {
    let cat = result;

    return {
      title: res.data.title,
      answer: cat.answer,
      question: cat.question,
      value: cat.value,
    };
  });

  return cats2.slice(0, 5);
}

(async () => {
  let test = await Catagory2(cat2)
  for (let i = 0; i < 6; i++) {
    let getID = ("cat2" + "-" + i)
    const tr = document.getElementById(getID)
    const trCat = document.getElementById("cat2")

    trCat.innerText = test[i].title

    tr.addEventListener("click", () => {
      tr.innerText = test[i].question;

      tr.addEventListener("click", () => {
        tr.innerText = test[i].answer;

      })
    });
  }
})();


//Catagory 3 - looking through the api results to populate column 3

async function Catagory3(cat3) {
  const res = await axios.get(`https://jservice.io/api/category?id=${cat3}`);
  let cats3 = res.data.clues.map(result => {
    let cat = result;

    return {
      title: res.data.title,
      answer: cat.answer,
      question: cat.question,
      value: cat.value,
    };
  });

  return cats3.slice(0, 5);
}

(async () => {
  let test = await Catagory3(cat3)
  for (let i = 0; i < 6; i++) {
    let getID = ("cat3" + "-" + i)
    const tr = document.getElementById(getID)
    const trCat = document.getElementById("cat3")

    trCat.innerText = test[i].title

    tr.addEventListener("click", () => {
      tr.innerText = test[i].question;

      tr.addEventListener("click", () => {
        tr.innerText = test[i].answer;

      })
    });
  }
})();


//Catagory 4 - looking through the api results to populate column 4

async function Catagory4(cat4) {
  const res = await axios.get(`https://jservice.io/api/category?id=${cat4}`);
  let cats4 = res.data.clues.map(result => {
    let cat = result;

    return {
      title: res.data.title,
      answer: cat.answer,
      question: cat.question,
      value: cat.value,
    };
  });

  return cats4.slice(0, 5);
}

(async () => {
  let test = await Catagory4(cat4)
  for (let i = 0; i < 6; i++) {
    let getID = ("cat4" + "-" + i)
    const tr = document.getElementById(getID)
    const trCat = document.getElementById("cat4")

    trCat.innerText = test[i].title


    tr.addEventListener("click", () => {
      tr.innerText = test[i].question;

      tr.addEventListener("click", () => {
        tr.innerText = test[i].answer;

      })
    });
  }
})();


//Catagory 5 - looking through the api results to populate column 5

async function Catagory5(cat5) {
  const res = await axios.get(`https://jservice.io/api/category?id=${cat5}`);
  let cats5 = res.data.clues.map(result => {
    let cat = result;

    return {
      title: res.data.title,
      answer: cat.answer,
      question: cat.question,
      value: cat.value,
    };
  });

  return cats5.slice(0, 5);
}

(async () => {
  let test = await Catagory5(cat5)
  for (let i = 0; i < 6; i++) {
    let getID = ("cat5" + "-" + i)
    const tr = document.getElementById(getID)
    const trCat = document.getElementById("cat5")

    trCat.innerText = test[i].title

    tr.addEventListener("click", () => {
      tr.innerText = test[i].question;

      tr.addEventListener("click", () => {
        tr.innerText = test[i].answer;

      })
    });
  }
})();




//reset button

$("#btn").on("click", function () {
  window.location.reload()

});











