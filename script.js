document.addEventListener("DOMContentLoaded", function () {
    function createFloatingNumber() {
      const characters = "ighey!@#$%^&*()-_=+[]{};:,.<>/?~darcproducts";
      const number = document.createElement('span');
      number.className = 'floating-number';
      number.innerText = getRandomCharacter(characters);
      document.querySelector('.floating-numbers-container').appendChild(number);
  
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 1 + 2;
      number.style.top = `${y}vh`;
      number.style.left = `${x}vw`;
  
      setTimeout(() => {
        number.remove();
      }, duration * 512);
    }
  
    function getRandomCharacter(characters) {
      return characters[Math.floor(Math.random() * characters.length)];
    }
  
    setInterval(createFloatingNumber, 128);
  
    function glitchEffect() {
      var glitchTextElements = document.querySelectorAll('#glitch-text');
      var characters = "!@#$%^&*()-_=+[]{};:,.<>/?~";
  
      function getRandomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      function applyGlitchEffect() {
        glitchTextElements.forEach(function(element) {
          var originalText = element.getAttribute('data-original-text');
          var glitchText = element.textContent.split('');
          var randomIndex = Math.floor(Math.random() * glitchText.length);
  
          if (glitchText[randomIndex] !== ' ') {
            var randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
            glitchText[randomIndex] = randomChar;
          }
  
          element.textContent = glitchText.join('');
  
          setTimeout(function() {
            element.textContent = originalText;
          }, getRandomInterval(1000, 5000));
        });
      }
  
      function startGlitchInterval() {
        var intervalDuration = getRandomInterval(1000, 3000);
        setInterval(applyGlitchEffect, intervalDuration);
      }
  
      glitchTextElements.forEach(function(element) {
        element.setAttribute('data-original-text', element.textContent);
      });
  
      startGlitchInterval();
    }
  
    glitchEffect();
  });
