const imageCard = document.querySelectorAll('.card')
const cardPlayerInput = document.querySelectorAll('.cardPlayerInput')

imageCard.forEach((imageCard,index) => {
    imageCard.addEventListener('click', function() {
        imageCard.classList.add('blackAndWhiteFilter')

    });
  });