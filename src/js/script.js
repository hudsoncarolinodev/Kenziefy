// console.log(musicsDataBase)

let musicaAtual = 0;

const audioTag = document.getElementById('saidaAudio');
audioTag.src = baseMusicas[musicaAtual].path;

const listaMusicas = document.querySelector('.listaMusicas ul');
const botaoPausar = document.querySelector('.listaMusicas button');
const botaoPlay = document.getElementById('play');
const botaoPrev = document.getElementById('prev');
const botaoNext = document.getElementById('next');

const elementoVolume = document.getElementById('volumeSlider');

baseMusicas.forEach(construirPlaylist)

function construirPlaylist(musica, index){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const artistaMusica = document.createElement('p');
    const albumMusica = document.createElement('p');
    const dataMusica = document.createElement('p');

    nomeMusica.innerText = musica.name;
    artistaMusica.innerText = musica.artist;
    albumMusica.innerText = musica.album;
    dataMusica.innerText = '2020-01-25';

    musicaElemento.setAttribute('data-id', index);
    
    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(artistaMusica);
    musicaElemento.appendChild(albumMusica);
    musicaElemento.appendChild(dataMusica);
    
    musicaElemento.addEventListener('click', tocarMusica);
    
    listaMusicas.appendChild(musicaElemento);

}

function tocarMusica(event){
    if(event.currentTarget.tagName === 'LI'){
        const musicaId = event.currentTarget.dataset.id;
        audioTag.src = baseMusicas[musicaId].path;
        musicaAtual = Number(musicaId);
        
        audioTag.play();
    } else  {
        if(audioTag.paused){
            audioTag.play();
        } else {
            audioTag.pause();
        }
    }
}
botaoPlay.addEventListener('click', tocarMusica);


function pausarMusica(){
    audioTag.pause();
}
botaoPausar.addEventListener('click', pausarMusica);

function tocarProxima(){
    if(musicaAtual === baseMusicas.length-1){
        musicaAtual = 0;
    } else {
        musicaAtual++;
    }
    
    audioTag.src = baseMusicas[musicaAtual].path;
    audioTag.play();
}
botaoNext.addEventListener('click', tocarProxima);

function tocarAnterior(){
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length-1;
    } else {
        musicaAtual--;
    }
    
    audioTag.src = baseMusicas[musicaAtual].path;
    audioTag.play();
}
botaoPrev.addEventListener('click', tocarAnterior);

elementoVolume.addEventListener('input', () => {
    audioTag.volume = elementoVolume.value;
})