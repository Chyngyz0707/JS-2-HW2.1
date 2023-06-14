const box = document.querySelector('.miniBox');

let positionX = 0;
let positionY = 0;

   let sec = 0

const move = () => {
    if(positionX <  439 && positionY === 0){
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(move, 20)

    } else if(positionX >= 439 && positionY <= 439) {
        positionY += 16
        box.style.top = `${positionY}px`
        setTimeout(move,20)

    } else if(positionX > 0 && positionY >= 439){
        positionX -= 16
        box.style.left = `${positionX}px`
        setTimeout(move, 20)

    } else {
        positionY -= 16
        box.style.top = `${positionY}px`
        setTimeout(move,20)
    }
}
   move()