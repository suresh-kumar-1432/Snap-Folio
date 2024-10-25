function displayImage(img) {
    var modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modal.setAttribute('onclick', 'closeModal()');
  
    var modalImg = document.createElement('img');
    modalImg.setAttribute('src', img.src);
    modalImg.setAttribute('alt', img.alt);
  
    var closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'close-button');
    closeButton.setAttribute('onclick', 'closeModal()');
    closeButton.innerHTML = '&times;';
  
    modal.appendChild(closeButton);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
  }
  
  function closeModal() {
    var modal = document.querySelector('.modal');
    modal.remove();
  }
  