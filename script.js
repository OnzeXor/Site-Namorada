let steps = 0;
const envelope = document.querySelector('.envelope');
const body = document.body;
const carousel = document.querySelector(".carousel-container");

document.querySelector('.proximo').addEventListener('click', () => {
  steps++;
  if (steps === 1) {
    envelope.classList.add('aberto');
  }
  if (steps === 2) {
    envelope.classList.add('carta-aberta');
    body.classList.add('carta-aberta');
  }
  if (steps === 3) {
    envelope.classList.add('done');
    body.classList.add('carta-aberta');
    
    // Agora removemos a classe 'done' para mostrar o carrossel
    carousel.classList.remove('done'); 
  }
});
$().ready(function () {
	$(".polaroid-slider").slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		dots: true
	});
});
