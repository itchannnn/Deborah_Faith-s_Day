const toggleButton = document.getElementById('music-toggle');
const audio = document.getElementById('bg-audio');

let isPlaying = false;

const setButtonState = () => {
  if (isPlaying) {
    toggleButton.innerHTML = '<span class="button-icon">❚❚</span><span class="button-text">Pause the song</span>';
    toggleButton.setAttribute('aria-label', 'Pause music');
  } else {
    toggleButton.innerHTML = '<span class="button-icon">♫</span><span class="button-text">Play a little love song</span>';
    toggleButton.setAttribute('aria-label', 'Play music');
  }
};

toggleButton.addEventListener('click', async () => {
  try {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      await audio.play();
      isPlaying = true;
    }
    setButtonState();
  } catch (error) {
    console.error('Audio playback failed:', error);
    toggleButton.innerHTML = '<span class="button-icon">⚠</span><span class="button-text">Tap to try again</span>';
  }
});

audio.addEventListener('ended', () => {
  isPlaying = false;
  setButtonState();
});

setButtonState();
