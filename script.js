const phrases = [
  "Lifelong learner.",
  "Passionate coder.",
  "Creative problem solver.",
  "Ready to build the future.",
];

const dynamicText = document.querySelector('.dynamic-text');
let phraseIndex = 0;
let letterIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (letterIndex < phrases[phraseIndex].length) {
      dynamicText.textContent += phrases[phraseIndex][letterIndex];
      letterIndex++;
      setTimeout(type, 100);
    } else {
      typing = false;
      setTimeout(type, 1500);
    }
  } else {
    if (letterIndex > 0) {
      dynamicText.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(type, 50);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});

function openModal(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = img.src;
  modal.style.display = 'flex';
}

function closeModal(e) {
  if (e.target.id === 'modal' || e.target.id === 'modal-img') {
    e.currentTarget.style.display = 'none';
  }
}
