// console.log(musicsDataBase)

let musicaAtual = 0;

const audioTag = document.getElementById('saidaAudio');
const listaMusicas = document.querySelector('.listaMusicas ul');

const botaoPausar = document.querySelector('.listaMusicas button');

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
    const musicaId = event.currentTarget.dataset.id;
    audioTag.src = baseMusicas[musicaId].path;

    audioTag.play();
}

botaoPausar.addEventListener('click', pausarMusica);

function pausarMusica(){
    audioTag.pause();
}