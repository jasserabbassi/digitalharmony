const phrases = [
    "Redefining visual experiences",
    "Innovative holographic solutions",
    "Cutting-edge LED displays",
    "Transforming brand engagement"
  ];
  
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;
  
  function loop() {
    isEnd = false;
    const animatedText = document.getElementById('animated-text');
    if (!animatedText) return;
  
    const fullPhrase = phrases[i];
    
    if (isDeleting) {
      currentPhrase.pop();
    } else {
      currentPhrase.push(fullPhrase[j]);
    }
  
    animatedText.innerHTML = currentPhrase.join('');
  
    if (!isDeleting && j === fullPhrase.length) {
      isEnd = true;
      isDeleting = true;
    } else if (isDeleting && currentPhrase.length === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
      j = 0;
    }
  
    const spedUp = 50;
    const normalSpeed = 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    
    if (!isDeleting) {
      j++;
    }
  
    setTimeout(loop, time);
  }
  
  export function startTextAnimation() {
    loop();
  }
  