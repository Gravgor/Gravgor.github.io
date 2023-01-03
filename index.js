setTimeout(function() {
    const newText = document.createElement('span');
    newText.innerHTML = ', a full-stack developer';
    newText.classList.add('fade-in');
    document.querySelector('h1').appendChild(newText);
  }, 1000);