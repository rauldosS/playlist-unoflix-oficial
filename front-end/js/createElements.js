import teste from "../../api/controller/playlistController";

windows.teste = function () {
    teste(req, res)
}

window.createElements = function () {
    alert('criando...')

    myObj = { "current_page": 1, "data": [{ "id": 42, "title": "Super Miranha (2020)", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "homenaranha", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 52, "title": "Harry Potter e o bagulho dourado", "description": "Um moleque meio bruxo", "slug": "harry", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 252, "title": "Homem-Aranha 2 (2004)", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "spiderman", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 292, "title": "Miranha O Filme", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "spermiranha", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1722, "title": "Santiago Biali", "description": "Too easy", "slug": "santiago-biali", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1762, "title": "Estevan Will", "description": "ioaofiaifa", "slug": "Estevan Will", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1832, "title": "Manoel Souza", "description": "ASDASDASDASDASD", "slug": "manoel-souza-s", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1852, "title": "Estevan Will", "description": "ioaofiaifa", "slug": "aaa", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1862, "title": "Jo\u00e3o Gabriel Zago Alves", "description": "A hist\u00f3ria de um aluno com problemas", "slug": "joao-zago-alves", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1922, "title": "Jo\u00e3o Gabriel Zago Alves", "description": "A hist\u00f3ria de um aluno com problemas", "slug": "joao-gabriel-zago-alves", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }], "first_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=1", "from": 1, "last_page": 3, "last_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=3", "next_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=2", "path": "http:\/\/unoflix-video.herokuapp.com\/videos", "per_page": 10, "prev_page_url": null, "to": 10, "total": 25 }

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
        let aCardAdd = document.createElement('a')

        aCardAdd.setAttribute('class', 'btn')
        aCardAdd.setAttribute('id', 'add' + nrVideo)
        // aCardAdd.setAttribute('href', 'http://localhost:3000/playlists')
        aCardAdd.setAttribute('onclick', 'addPlaylist(this.id)')

        divCardActionDoc.appendChild(aCardAdd)

        let add = document.querySelector('#add' + nrVideo)
        add.textContent = 'ADICIONAR'     
    });
}

window.addPlaylist = function (id) {
    let idDivVideo = document.querySelector('#' + id).parentElement.parentElement.id

    id = idDivVideo.substr(-1)

    let myJSON = '{ "current_page": 1, "data": [{ "id": 42, "title": "Super Miranha (2020)", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "homenaranha", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 52, "title": "Harry Potter e o bagulho dourado", "description": "Um moleque meio bruxo", "slug": "harry", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 252, "title": "Homem-Aranha 2 (2004)", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "spiderman", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 292, "title": "Miranha O Filme", "description": "O melhor filme do homem aranha j\u00e1 feito", "slug": "spermiranha", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1722, "title": "Santiago Biali", "description": "Too easy", "slug": "santiago-biali", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1762, "title": "Estevan Will", "description": "ioaofiaifa", "slug": "Estevan Will", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1832, "title": "Manoel Souza", "description": "ASDASDASDASDASD", "slug": "manoel-souza-s", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1852, "title": "Estevan Will", "description": "ioaofiaifa", "slug": "aaa", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1862, "title": "Jo\u00e3o Gabriel Zago Alves", "description": "A hist\u00f3ria de um aluno com problemas", "slug": "joao-zago-alves", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }, { "id": 1922, "title": "Jo\u00e3o Gabriel Zago Alves", "description": "A hist\u00f3ria de um aluno com problemas", "slug": "joao-gabriel-zago-alves", "created_at": null, "updated_at": null, "deleted_at": null, "category_id": 2, "url": "", "thumbnail": "" }], "first_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=1", "from": 1, "last_page": 3, "last_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=3", "next_page_url": "http:\/\/unoflix-video.herokuapp.com\/videos?page=2", "path": "http:\/\/unoflix-video.herokuapp.com\/videos", "per_page": 10, "prev_page_url": null, "to": 10, "total": 25 }'
    let myObj = JSON.parse(myJSON)

    console.log(myObj.data[id-1].slug)

    let add = {
        "user": "raul",
        "slug": myObj.data[id].slug,
        "watched": false
    }
}