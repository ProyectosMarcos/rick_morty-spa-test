/* import { ContainerCards } from "./components/ContainerCards.js" */
import { Header } from "./components/Headers.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"
import { Search } from "./components/Search.js"
/* import { ajax } from "./helpers/ajax.js"
import api from "./helpers/urls.js" */


export const App = () => {
    let divRoot = document.getElementById("root")

    divRoot.innerHTML = `<h1>Nuestra primera web SPA</h1>`
    divRoot.appendChild(Header())
    divRoot.append(Search())
    divRoot.appendChild(Main())


    Router()
    /* ajax({
        url: api.TODOS,
        callback: (data) => document.getElementById("section").append(ContainerCards(data))
    }) */
}