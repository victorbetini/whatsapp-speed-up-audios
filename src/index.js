const oneBtn = document.createElement('button');
oneBtn.innerHTML = '1x';
oneBtn.classList.add('oneTimeBtn');
oneBtn.setAttribute('title', 'Normal Speed');

const oneDotFiveBtn = document.createElement('button');
oneDotFiveBtn.innerHTML = '1.5x';
oneDotFiveBtn.classList.add('oneDotFiveBtn');
oneDotFiveBtn.setAttribute('title', '1.5x Faster');

const twoTimesBtn = document.createElement('button');
twoTimesBtn.innerHTML = '2x';
twoTimesBtn.classList.add('twoTimesBtn');
twoTimesBtn.setAttribute('title', '2x Faster');

const interval = setInterval(() => {

    const topMenu = document.querySelector('._2O84H');

    if (topMenu) {
        clearInterval(interval);

        oneBtn.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => {
                audio.playbackRate = 1;
                audio.addEventListener('play', () => {
                    oneBtn.setAttribute('style', 'text-decoration: none;');
                    twoTimesBtn.setAttribute('style', 'text-decoration: none !important;');
                    oneDotFiveBtn.setAttribute('style', 'text-decoration: none;');
                });
                oneBtn.setAttribute('style', 'text-decoration: underline;');
                twoTimesBtn.setAttribute('style', 'text-decoration: none;');
                oneDotFiveBtn.setAttribute('style', 'text-decoration: none;');
            });
        });

        oneDotFiveBtn.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => {
                audio.playbackRate = 1.5;
                audio.addEventListener('play', () => {
                    oneBtn.setAttribute('style', 'text-decoration: none;');
                    twoTimesBtn.setAttribute('style', 'text-decoration: none !important;');
                    oneDotFiveBtn.setAttribute('style', 'text-decoration: none;');
                });
                oneBtn.setAttribute('style', 'text-decoration: none;');
                twoTimesBtn.setAttribute('style', 'text-decoration: none;');
                oneDotFiveBtn.setAttribute('style', 'text-decoration: underline;');
            });
        });

        twoTimesBtn.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => {
                audio.playbackRate = 2;
                audio.addEventListener('play', () => {
                    oneBtn.setAttribute('style', 'text-decoration: none;');
                    twoTimesBtn.setAttribute('style', 'text-decoration: none !important;');
                    oneDotFiveBtn.setAttribute('style', 'text-decoration: none;');
                });
                oneBtn.setAttribute('style', 'text-decoration: none;');
                twoTimesBtn.setAttribute('style', 'text-decoration: underline;');
                oneDotFiveBtn.setAttribute('style', 'text-decoration: none;');
            });
        });
        topMenu.appendChild(oneBtn);
        topMenu.appendChild(oneDotFiveBtn);
        topMenu.appendChild(twoTimesBtn);
    }
}, 1000);
