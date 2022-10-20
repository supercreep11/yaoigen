// const button = document.querySelector(".progerRand");
// const form = document.querySelector(".proger_form");
// const doActionWithProger = function () {
//   const progers = [1, 2, 3, 4];
//   const actions = [1434, 343, 64543432];
//   const input = document.querySelector(".proger__input");
//   let inputProger = input.value;

//   const randomProger = Math.floor(Math.random() * progers.length);
//   const randomAction = Math.floor(Math.random() * actions.length);
//   console.log(
//     `${inputProger} ${progers[randomProger]} ${actions[randomAction]}`
//   );
// };

// button.addEventListener("click", doActionWithProger());

function getResult() {
  let firstMember = document.querySelector(".proger__input").value;
  let secondMember = document.querySelector(".second__proger__input").value;
  let container = document.querySelector(".container");
  //   const progers = [1, 2, 3, 4];
  const actions = [
    "виїбав",
    "трахнув",
    "лизнув сосок",
    "понюхав попу",
    "поцілував у губи",
    "поцілував у шию",
    "поставив засос",
    "відсосав у",
    "вкусив за ніс",
  ];

  //   const randomProger = Math.floor(Math.random() * progers.length);
  const randomAction = Math.floor(Math.random() * actions.length);
  let result = document.createElement("p");
  result.className = "result_yaoi";
  result.innerHTML = `${firstMember} ${actions[randomAction]} ${secondMember}`;
  document.body.append(result);
  console.log(`${firstMember} ${actions[randomAction]} ${secondMember}`);
}

document.querySelector(".progerRand").addEventListener("click", getResult);
