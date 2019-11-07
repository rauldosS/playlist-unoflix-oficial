function xmlthttprequest(tipo, metodo, recurso, params, callback) {
    request = new XMLHttpRequest()

    var url


    if (tipo == 'video') {
        url = 'https://unoflix-video.herokuapp.com/videos'
    } else {
        url = 'http://localhost:3000'
    }

    // var headers = {
    //     'Authorization': auth
    // }

    //var auth = 'Basic ' + Buffer.from('test:outroteste').toString('base64')

    var usuario = 'test'
    var senha = 'outroteste'

    let resposta;

    request.open(metodo, url + '/' + recurso)
    request.setRequestHeader("Authorization", 'Basic ' + btoa(usuario + ':' + senha))

    if (metodo != 'GET') {
        request.setRequestHeader('Content-type', 'application/json');
        params = JSON.stringify(params)
    }

    request.onload = function (e) {
        if (request.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${request.status}: ${request.statusText}`); // e.g. 404: Not Found
        } else { // show the result            
            resposta = JSON.parse(request.response)
            callback(resposta)
        }
    };
    request.send(params)
}

function playlistAction(slug) {
    xmlthttprequest('playlist', 'GET', 'playlists', '', function (resposta) {
        if (playlistExist(resposta, slug)) {
            console.log('resp' + resposta)
            console.log('slug' + slug)
            removePlaylist(resposta, slug)
        } else {
            addPlaylist(slug)
        }
    })

    // Object.keys(resp).forEach(function (key) {
    //     if (resp[key].slug == slug) {
    //         console.log('2' + existe)
    //         console.log('Vídeo já adiconado')
    //         existe = true
    //         return true
    //     }
    // })
}

function playlistExist(playlist, slug) {
    for (const key of Object.keys(playlist, slug)) {
        console.log(playlist[key].slug + ' ------- ' + slug)
        if (playlist[key].slug == slug) {
            return true
        }
    }
    return false
}

function addPlaylist(slug) {
    let add = {
        user: "raul",
        slug: slug,
        watched: false
    }

    xmlthttprequest('playlist', 'POST', 'playlists', add, function (resposta) {
        // console.log(resposta.data)
    })

    var btn = document.getElementById(slug)

    btn.style.background = '#ef5350'
    btn.innerText = 'REMOVER'
    // btn.setAttribute('onclick', 'removePlaylist(this.id)')

    return console.log(slug + ' Adicionado')
}

function removePlaylist(playlist, slug) {
    for (const key of Object.keys(playlist, slug)) {
        console.log(playlist[key].slug + ' ------- ' + slug)
        if (playlist[key].slug == slug) {
            console.log('id' + playlist[key]._id)
            xmlthttprequest('playlist', 'DELETE', 'playlists/' + playlist[key]._id , [], function (resposta) {
                console.log(playlist[key]._id + ' Deletado')
            })
        }
    }
}

window.onload = function(){
    createElements( )
}

function createElements() {

    //fazer chamada para heroku pegando a lista
    var myObj = { "current_page": 1, "data": [{ "id": 42, "title": "Super Miranha (2020)", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "homenaranha", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 52, "title": "Harry Potter e o bagulho dourado", "description": "Um moleque meio bruxo", "slug": "harry", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 252, "title": "Homem-Aranha 2 (2004)", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "spiderman", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 292, "title": "Miranha O Filme", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "spermiranha", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1722, "title": "Santiago Biali", "description": "Too easy", "slug": "santiago-biali", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1762, "title": "Estevan Will", "description": "ioaofiaifa", "slug": "Estevan Will", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1832, "title": "Manoel Souza", "description": "ASDASDASDASDASD", "slug": "manoel-souza-s", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1852, "title": "Estevan Will", "description": "ioaofiaifa", "slug": "aaa", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1862, "title": "Jo\u00e3o Gabriel Zago Alves", "description": "A hist\u00f3ria de um aluno com problemas", "slug": "joao-zago-alves", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1922, "title": "Jo\u00e3o Gabriel Zago Alves", "description": "A hist\u00f3ria de um aluno com problemas", "slug": "joao-gabriel-zago-alves", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }], "first_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=1", "from": 1, "last_page": 3, "last_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=3", "next_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=2", "path": "http:\/\/unoflix-video.herokuapp.com\/videos", "per_page": 10, "prev_page_url": null, "to": 10, "total": 25 }

    // var myObj = xmlthttprequest('video','GET', 'videos', '', function (resposta) {
    //     console.log('respos: ' + resposta.data)

    //     return resposta.data
    // })

    var nrVideo = 0

    myObj.data.forEach(video => {
        nrVideo++

        console.log(nrVideo)

        let a = document.createElement('a')

        let divVideos = document.getElementById('videos')

        // Card
        let divCard = document.createElement('div')
        divCard.setAttribute('id', 'card' + nrVideo)
        divCard.setAttribute('class', 'card white')

        divVideos.appendChild(divCard)

        let divCardDoc = document.getElementById('card' + nrVideo)

        //span.textContent = "qualquer coisa"
        //divCardDoc.appendChild(span)


        // Card image/span
        let divCardImage = document.createElement('div')

        divCardImage.setAttribute('id', 'card-image' + nrVideo)
        divCardImage.setAttribute('class', 'card-image')

        divCardDoc.appendChild(divCardImage)

        let divCardImageDoc = document.getElementById('card-image' + nrVideo)

        // Card-title
        let spanCardTitle = document.createElement('span')

        spanCardTitle.setAttribute('class', 'card-title')
        spanCardTitle.setAttribute('id', 'title' + nrVideo)

        divCardImageDoc.appendChild(spanCardTitle)

        let title = document.querySelector('#title' + nrVideo)
        title.textContent = video.title

        // Card content
        let divCardContent = document.createElement('div')

        divCardContent.setAttribute('id', 'card-content' + nrVideo)
        divCardContent.setAttribute('class', 'card-content')

        divCardDoc.appendChild(divCardContent)

        let divCardContentDoc = document.getElementById('card-content' + nrVideo)

        // Card-title
        let pCardSlug = document.createElement('p')

        pCardSlug.setAttribute('class', 'slug')
        pCardSlug.setAttribute('id', 'slug' + nrVideo)

        divCardContentDoc.appendChild(pCardSlug)

        let slug = document.querySelector('#slug' + nrVideo)
        slug.textContent = video.slug

        // Card action
        let divCardAction = document.createElement('div')

        divCardAction.setAttribute('id', 'card-action' + nrVideo)
        divCardAction.setAttribute('class', 'card-action')

        divCardDoc.appendChild(divCardAction)

        let divCardActionDoc = document.getElementById('card-action' + nrVideo)

        // Criar condição para adiconar ou remover
        // Card-add

        let aCardAction = document.createElement('a')

        aCardAction.setAttribute('class', 'btn')
        aCardAction.setAttribute('id', video.slug)
        //aCardAdd.setAttribute('href', 'http://localhost:3000/playlists')
        aCardAction.setAttribute('onclick', 'playlistAction(this.id)')

        divCardActionDoc.appendChild(aCardAction)

        let action = document.getElementById(video.slug)
        action.textContent = 'ADICIONAR'
        aCardAction.style.background = '#26a69a'

        //generateButton(divCardActionDoc, slug)

    });
}

// function generateButton(div, slug) {
//     xmlthttprequest('playlist', 'GET', 'playlists', '', function (resposta) {
//         if (playlistExist(resposta, slug)) {
//             console.log('Já está em uma playlist')
//             let aCardAction = document.createElement('a')

//             aCardAction.setAttribute('class', 'btn')
//             aCardAction.setAttribute('id', slug)
//             //aCardAdd.setAttribute('href', 'http://localhost:3000/playlists')
//             aCardAction.setAttribute('onclick', 'removePlaylist(this.id)')

//             div.appendChild(aCardAction)

//             let action = document.getElementById(slug)
//             action.textContent = 'REMOVER'
//             aCardAction.style.background = '#ef5350'
//         } else {
//             console.log('Não está em uma playlist')
//             let aCardAction = document.createElement('a')

//             aCardAction.setAttribute('class', 'btn')
//             aCardAction.setAttribute('id', slug)
//             //aCardAdd.setAttribute('href', 'http://localhost:3000/playlists')
//             aCardAction.setAttribute('onclick', 'addPlaylist(this.id)')

//             div.appendChild(aCardAction)

//             let action = document.getElementById(slug)
//             action.textContent = 'ADICIONAR'
//             aCardAction.style.background = '#26a69a'
//         }
//     })
// }