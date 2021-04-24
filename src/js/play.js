let playFirst = document.querySelectorAll('.main-slider__play'),
    pause = document.querySelector('.main-slider__pause');

playFirst.forEach((play) => {
    play.addEventListener('click', (e) => {
        let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
        video.play();
        e.currentTarget.style.display = 'none';
        pause.style.display = 'block'
        setTimeout(() => {
            video.volume = 1;
        }, 1000)
    })
})

pause.addEventListener('click', (e)=> {
    let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
    pause.style.display = 'none'
    playFirst[0].style.display = 'block'
    video.pause()
})