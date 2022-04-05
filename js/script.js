// var btnPlus = document.getElementById('plus');
// btnPlus.addEventListener('click', exibirMensagem);

const formShow = document.getElementById('formTvShow');

const addTv = document.getElementById('inputTvShow');

formShow.addEventListener('submit', (event) => {
  console.log(addTv.target.value);
  if (addTv.value != '') {
    addCard(addTv.value);
    addTv.value = '';
  }
  event.preventDefault();
});

function addCard(value) {
  const card = document.querySelector('#card');
  const newCard = document.createElement('div');
  newCard.classList.add('cardNovo');
  newCard.draggable = true;
  newCard.innerHTML =
    `
     
    <div class="card"><h3>` +
    value +
    `</h3></div><div>
    
  `;
  newCard.addEventListener('dragstart', dragStart);
  newCard.addEventListener('drag', drag);
  newCard.addEventListener('dragend', dragEnd);
  card.appendChild(newCard);
}

const cards = document.querySelectorAll('.card');
const dropZones = document.querySelectorAll('.drope');

cards.forEach((card) => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragEnd);
});

function dragStart() {
  dropZones.forEach((drope) => drope.classList.add('highlight'));
  this.classList.add('dragging');

  switch (this.parentElement.id) {
    case 'watch':
      this.firstElementChild.classList.remove('watch');
      break;
    case 'seeing':
      this.firstElementChild.classList.remove('seeing');
      break;
    case 'dropei':
      this.firstElementChild.classList.remove('dropei');
      break;
    case 'dropei':
      this.firstElementChild.classList.remove('seeing');
      break;
    default:
      break;
  }
}

function drag() {}

function dragEnd() {
  dropZones.forEach((dropei) => dropei.classList.remove('highlight'));
  this.classList.remove('dragging');

  switch (this.parentElement.id) {
    case 'watch':
      this.firstElementChild.classList.add('watch');
      break;
    case 'seeing':
      this.firstElementChild.classList.add('seeing');
      break;
    case 'dropei':
      this.firstElementChild.classList.add('dropei');
      break;
    case 'dropei':
      this.parentElement.removeChild(this);
      break;
    default:
      break;
  }
}

dropZones.forEach((dropZone) => {
  dropZone.addEventListener('dragenter', dragEnter);
  dropZone.addEventListener('dragover', dragOver);
  dropZone.addEventListener('dragleave', dragLeave);
  dropZone.addEventListener('drop', drop);
});

function dragEnter() {}

function dragOver() {
  this.classList.add('over');

  const cardBeingDragged = document.querySelector('.dragging');

  this.appendChild(cardBeingDragged);
}

function dragLeave() {
  this.classList.remove('over');
}

function drop() {
  this.classList.remove('over');
}
