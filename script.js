document.addEventListener("DOMContentLoaded", function () {
    function createFloatingNumber() {
      const characters = "0123456789!@#$%^&*()-_=+[]{};:,.<>/?~darcproducts";
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
      }, duration * 150);
    }
  
    function getRandomCharacter(characters) {
      return characters[Math.floor(Math.random() * characters.length)];
    }
  
    setInterval(createFloatingNumber, 1200);
  
    function glitchEffect() {
      var glitchTextElements = document.querySelectorAll('#glitch-text');
      var characters = "0123456789!@#$%^&*()-_=+[]{};:,.<>/?~";
  
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
  
    var descriptions = [
      "<char style='color:gold;font-size:2rem;text-shadow:2px -2px 0px black'>Froggin</char><p>This game was created in a week for a school project. I tried to clone the original game arcade game Frogger made in 1981. In this game, the player controls a frog and must navigate it through a busy road and a treacherous river to reach its home safely. The objective is to guide the frog across the screen, avoiding moving vehicles, such as cars and trucks on the road, and hazardous obstacles, including logs and turtles in the river.<p>I think I did a pretty good job  of recreating this game. I created the world using titles so I could allow the player to edit the amount of water or lanes of road through the difficulty setting. The water being the more difficult of obstacles.</p>The art, sounds, and programming were all done by me.<p>",
      "<char style='color:gold;font-size:2rem;text-shadow:2px -2px 0px black'>Space Maneuvers</char><p>This game was created in a week for a school project. It was built to resemble the arcade game Galaga made in 1981. In this game, the player controls a space ship and tries to stay alive as long as possible, avoiding enemy space ships. The game incorporates a shield that protects the player, and weapon power ups to destroy the enemies quicker.",
      "<char style='color:gold;font-size:2rem;text-shadow:2px -2px 0px black'>Monster Survivor</char><p></p>",
      "<char style='color:gold;font-size:2rem;text-shadow:2px -2px 0px black'>Pac Attack</char><p></p>",
      "Description 5"
    ];
  
    var mediaItems = document.querySelectorAll(".media-item");
    var mediaDescription = document.getElementById("media-description");
    var originalMedia = mediaDescription.innerHTML;

    mediaItems.forEach(function(mediaItem, index) {
    mediaItem.addEventListener("mouseover", function() {
    mediaDescription.innerHTML = descriptions[index];
    lastHoveredItem = mediaItem;
    });

    mediaItem.addEventListener("mouseout", function() {
    mediaDescription.innerHTML = originalMedia;
    });
    });

  });
