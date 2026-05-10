const trigger = document.getElementById('trigger');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const audio = document.getElementById('fanfarra');

function openModal() {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((e) => { console.warn('Audio play failed:', e); });
  }
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

trigger.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
