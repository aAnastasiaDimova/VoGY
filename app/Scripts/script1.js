function changeImage() {
    const images = document.querySelectorAll('#image-container img');
    const activeImage = document.querySelector('#image-container img.active');
    
    // Находим индекс активной картинки
    const index = Array.from(images).indexOf(activeImage);
    
    // Определяем следующую картинку в списке
    const nextIndex = (index + 1) % images.length;
    
    // Удаляем класс "active" у текущей картинки
    activeImage.classList.remove('active');
    
    // Добавляем класс "active" к следующей картинке
    images[nextIndex].classList.add('active');
  }
  
  // Запускаем функцию changeImage каждые 5 секунд
setInterval(changeImage, 5000)

function ShowBlocks(){
  var block1 = document.getElementById("block1");
  var block2 = document.getElementById("block2");
  block1.style.display = "block";
  block2.style.display = "block";

}

function removeBlock(id1, id2){
  var block1 = document.getElementById(id1);
  var block2 = document.getElementById(id2);
  block1.style.display = "none";
  block2.style.display = "none";

}