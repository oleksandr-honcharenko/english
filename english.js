function fetchSheetByID(id = "940445634") {
  id = "&gid=" + id;
  const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTrxY1GNsc-_gKMXqhHddJCXC2D48vw9XqbWjCtmornQFLv38PX6xt_d2E2bwwecEMXwyHp4VHJVqOl/pub?output=csv${id}`;
  const url1 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrxY1GNsc-_gKMXqhHddJCXC2D48vw9XqbWjCtmornQFLv38PX6xt_d2E2bwwecEMXwyHp4VHJVqOl/pub?output=csv';
  const url2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrxY1GNsc-_gKMXqhHddJCXC2D48vw9XqbWjCtmornQFLv38PX6xt_d2E2bwwecEMXwyHp4VHJVqOl/pub?output=csv&gid=1592730498';//Nov

  fetch(url1)
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n').map(row => row.split(','));

      const filteredRows = rows.slice(2);

      const x = [];
      let currentArray = [];
      let row1 = 1; let row2 = 2;

      filteredRows.forEach((row, index) => {
        const eng = row[row1];
        const ukr = row[row2];

        if (ukr) {
          if (currentArray.length === 0 && index !== 0) {
            currentArray.push(filteredRows[index - 1][row1]);
          }
          currentArray.push({ eng, ukr });
        } else {
          if (currentArray.length > 0) {
            x.push(currentArray);
            currentArray = [];
          }
        }
      });

      if (currentArray.length > 1) {
        x.push(currentArray);
      }
      console.log(x);
      buildPage(x);
    })
    .catch(error => console.log('Error fetching data:  --  --  --'));
}
function fetchMock() {
  let x = [
    [
      "October 1",
      {
        "eng": "approximately",
        "ukr": "приблизно"
      },
      {
        "eng": "claim",
        "ukr": "претензія; позов"
      },
      {
        "eng": "nuclear weapon",
        "ukr": "ядерна зброя"
      },
      {
        "eng": "commitment",
        "ukr": "зобов'язання; прихильність"
      },
      {
        "eng": "rule of law",
        "ukr": "верховернство права"
      },
      {
        "eng": "latter",
        "ukr": "останній"
      },
      {
        "eng": "high-ranking",
        "ukr": "високопоставленний"
      },
      {
        "eng": "to facilitate",
        "ukr": "сприяти"
      },
      {
        "eng": "defence",
        "ukr": "оборона"
      },
      {
        "eng": "devotion",
        "ukr": "відданість"
      },
      {
        "eng": "dignity",
        "ukr": "гідність"
      },
      {
        "eng": "encounter",
        "ukr": "зустріч"
      },
      {
        "eng": "statesman",
        "ukr": "державний діяч"
      },
      {
        "eng": "crucial",
        "ukr": "важливий; вирішальний"
      },
      {
        "eng": "thus",
        "ukr": "таким чином"
      },
      {
        "eng": "negotiations",
        "ukr": "переговори"
      },
      {
        "eng": "talking shop",
        "ukr": "говорильня"
      },
      {
        "eng": "he claims",
        "ukr": "він стверджує; заявляє"
      },
      {
        "eng": "counterpart",
        "ukr": "колега"
      },
      {
        "eng": "parties",
        "ukr": "сторони"
      }
    ]
  ];
  let y = [
    [
      "October 0",
      {
        "eng": "approximately",
        "ukr": "приблизно"
      },
      {
        "eng": "claim",
        "ukr": "претензія; позов"
      },
      {
        "eng": "nuclear weapon",
        "ukr": "ядерна зброя"
      },
      {
        "eng": "commitment",
        "ukr": "зобов'язання; прихильність"
      },
      {
        "eng": "rule of law",
        "ukr": "верховернство права"
      },
      {
        "eng": "latter",
        "ukr": "останній"
      },
      {
        "eng": "high-ranking",
        "ukr": "високопоставленний"
      },
      {
        "eng": "to facilitate",
        "ukr": "сприяти"
      },
      {
        "eng": "defence",
        "ukr": "оборона"
      },
      {
        "eng": "devotion",
        "ukr": "відданість"
      },
      {
        "eng": "dignity",
        "ukr": "гідність"
      },
      {
        "eng": "encounter",
        "ukr": "зустріч"
      },
      {
        "eng": "statesman",
        "ukr": "державний діяч"
      },
      {
        "eng": "crucial",
        "ukr": "важливий; вирішальний"
      },
      {
        "eng": "thus",
        "ukr": "таким чином"
      },
      {
        "eng": "negotiations",
        "ukr": "переговори"
      },
      {
        "eng": "talking shop",
        "ukr": "говорильня"
      },
      {
        "eng": "he claims",
        "ukr": "він стверджує; заявляє"
      },
      {
        "eng": "counterpart",
        "ukr": "колега"
      },
      {
        "eng": "parties",
        "ukr": "сторони"
      }
    ],
    [
      "October 1",
      {
        "eng": "approximately",
        "ukr": "приблизно"
      },
      {
        "eng": "claim",
        "ukr": "претензія; позов"
      },
      {
        "eng": "nuclear weapon",
        "ukr": "ядерна зброя"
      },
      {
        "eng": "commitment",
        "ukr": "зобов'язання; прихильність"
      },
      {
        "eng": "rule of law",
        "ukr": "верховернство права"
      },
    ],
    [
      "October 2",
      {
        "eng": "latter",
        "ukr": "останній"
      },
      {
        "eng": "high-ranking",
        "ukr": "високопоставленний"
      },
      {
        "eng": "to facilitate",
        "ukr": "сприяти"
      },
      {
        "eng": "defence",
        "ukr": "оборона"
      },
      {
        "eng": "devotion",
        "ukr": "відданість"
      },
    ],
    [
      "October 3",
      {
        "eng": "dignity",
        "ukr": "гідність"
      },
      {
        "eng": "encounter",
        "ukr": "зустріч"
      },
      {
        "eng": "statesman",
        "ukr": "державний діяч"
      },
      {
        "eng": "crucial",
        "ukr": "важливий; вирішальний"
      },
      {
        "eng": "thus",
        "ukr": "таким чином"
      },
    ],
    [
      "October 4",
      {
        "eng": "negotiations",
        "ukr": "переговори"
      },
      {
        "eng": "talking shop",
        "ukr": "говорильня"
      },
      {
        "eng": "he claims",
        "ukr": "він стверджує; заявляє"
      },
      {
        "eng": "counterpart",
        "ukr": "колега"
      },
      {
        "eng": "parties",
        "ukr": "сторони"
      }
    ],
    [
      "October 5",
      {
        "eng": "approximately",
        "ukr": "приблизно"
      },
      {
        "eng": "claim",
        "ukr": "претензія; позов"
      },
      {
        "eng": "nuclear weapon",
        "ukr": "ядерна зброя"
      },
      {
        "eng": "commitment",
        "ukr": "зобов'язання; прихильність"
      },
      {
        "eng": "rule of law",
        "ukr": "верховернство права"
      },
    ],
    [
      "October 6",
      {
        "eng": "latter",
        "ukr": "останній"
      },
      {
        "eng": "high-ranking",
        "ukr": "високопоставленний"
      },
      {
        "eng": "to facilitate",
        "ukr": "сприяти"
      },
      {
        "eng": "defence",
        "ukr": "оборона"
      },
      {
        "eng": "devotion",
        "ukr": "відданість"
      },
    ],
    [
      "October 7",
      {
        "eng": "dignity",
        "ukr": "гідність"
      },
      {
        "eng": "encounter",
        "ukr": "зустріч"
      },
      {
        "eng": "statesman",
        "ukr": "державний діяч"
      },
      {
        "eng": "crucial",
        "ukr": "важливий; вирішальний"
      },
      {
        "eng": "thus",
        "ukr": "таким чином"
      },
    ],
    [
      "October 8",
      {
        "eng": "negotiations",
        "ukr": "переговори"
      },
      {
        "eng": "talking shop",
        "ukr": "говорильня"
      },
      {
        "eng": "he claims",
        "ukr": "він стверджує; заявляє"
      },
      {
        "eng": "counterpart",
        "ukr": "колега"
      },
      {
        "eng": "parties",
        "ukr": "сторони"
      }
    ],
  ];
  buildPage(y);
}

function buildPage(data) {
  let container = document.querySelector("#target");
  window.n_data = data;
  data.forEach(el => {
    let item = document.createElement("div");
    item.className = "col- n_col";
    item.className = "";
    item.innerHTML = `
      <div class="n_tile df" data-preview="false" data-active="true" data-set="${el[0]}">
        <button class="n_button n_button-primary" data-type="button" data-set="${el[0]}" data-action="Preview">${el[0]}</button>
        <div class="n_indicator" data-type="button" data-action="Include"></div>
        <div class="n_items df"></div>
      </div>
    `;
    let list = item.querySelector(".n_items");
    let info = "";
    el.forEach((obj, index) => {
      if (index === 0) { return; }
      info += `<p>${index}) ${obj.eng}</p><p>${obj.ukr.replace(";", "<br>")}</p>`;
    });
    list.innerHTML = info;
    container.append(item);
  });
  setInteraction(container);
}
function setInteraction(container) {
  let tiles = container.querySelectorAll('.n_tile');
  tiles.forEach(tile => {
    tile.addEventListener("click", function (e) {
      if (e.target.dataset.type === "button") {
        triggerBtn(e.target, tile);
      }
    });
  });
  let start = document.querySelector('button[data-action="Start"]');
  start.addEventListener("click", function (e) {
    start.blur();
    createCheckModal();
  });
}
function triggerBtn(b, tile) {
  let set = b.dataset.set;
  let action = b.dataset.action;
  switch (action) {
    case "Include":
      tile.dataset.active = tile.dataset.active === "false";
      break;
    case "Preview":
      //tile.dataset.preview = tile.dataset.preview === "false";
      b.blur();
      createPreviewModal(tile);
      break;

    default:
      break;
  }
}
function createPreviewModal(tile) {
  let items = tile.querySelector(".n_items");
  let modal = document.createElement("div");
  modal.className = "n_modal";
  modal.innerHTML = `<div class="n_modal-inner">
    <button class="n_close">
      <svg class="" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M31.75 3.4225L28.5775 0.25L16 12.8275L3.4225 0.25L0.25 3.4225L12.8275 16L0.25 28.5775L3.4225 31.75L16 19.1725L28.5775 31.75L31.75 28.5775L19.1725 16L31.75 3.4225Z"></path></svg>
    </button>
    ${items.outerHTML}
  </div>`;
  let btn = modal.querySelector("button");
  btn.addEventListener("click", function () {
    modal.remove();
  });

  document.body.append(modal);
}
function createCheckModal() {
  let targetObj = [];
  window.n_data.forEach(el => {
    let x = el.slice(1);
    let name = el[0];
    targetObj[name] = x;
  });
  let excludedArrs = document.querySelectorAll("[data-active='false']");
  excludedArrs.forEach(el => {
    let set = el.dataset.set;
    targetObj[set] = [];
  });
  let targetArr = combineObjArr(targetObj);
  shuffle(targetArr);

  let currentItem = 1;
  let modal = document.createElement("div");
  modal.className = "n_modal";
  modal.dataset.hint = "false";
  modal.innerHTML = `<div class="n_modal-inner">
    <button class="n_close">
      <svg class="" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M31.75 3.4225L28.5775 0.25L16 12.8275L3.4225 0.25L0.25 3.4225L12.8275 16L0.25 28.5775L3.4225 31.75L16 19.1725L28.5775 31.75L31.75 28.5775L19.1725 16L31.75 3.4225Z"></path></svg>
    </button>
    <div class="n_test df">
      <div class="df"><h4 class="n_test-title df"><span class="">1</span>&nbsp;of ${targetArr.length}</h4></div>
      <h4 class="n_test-o">${targetArr[0].eng}</h4>
      <h4 class="n_test-t">${targetArr[0].ukr.replace(";", " <br>")}</h4>
      <button class="n_button n_button-secondary" data-action="Show">Show</button>
      <button class="n_button n_button-primary" data-action="Next">Next</button>
    </div>
  </div>`;
  let closeBtn = modal.querySelector(".n_close");
  closeBtn.addEventListener("click", function () {
    modal.remove();
  });
  let nextBtn = modal.querySelector("[data-action='Next']");
  let currentItemContainer = modal.querySelector(".n_test-title span");
  let currentO = modal.querySelector(".n_test-o");
  let currentT = modal.querySelector(".n_test-t");
  nextBtn.addEventListener("click", function () {
    currentO.innerHTML = targetArr[currentItem].eng;
    currentT.innerHTML = targetArr[currentItem].ukr.replace(";", " <br>");
    currentItem++;
    currentItemContainer.innerHTML = currentItem;
    modal.dataset.hint = "false";
    if (currentItem === targetArr.length) {
      nextBtn.remove();
    }
  });
  let showBtn = modal.querySelector("[data-action='Show']");
  showBtn.addEventListener("click", function () {
    modal.dataset.hint = "true";
  });

  document.body.append(modal);
}
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function combineObjArr(array) {
  let result = Object.values(array).reduce((acc, curr) => acc.concat(curr), []);
  return result;
}

// fetchMock();
fetchSheetByID();
