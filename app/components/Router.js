import { ajax } from "../helpers/ajax.js"
import api from "../helpers/urls.js"
import { ContainerCards } from "./ContainerCards.js"
import { Card } from "./Card.js"

export const Router = () => {
    let { hash } = location

    console.log(hash)

    if (hash == "" || hash == "#/") {
        ajax({
            url: api.TODOS,
            callback: (data) => document.getElementById("section").append(ContainerCards(data))
        })
    } else if (hash == "#/buscador") {
        document.getElementById("section").innerHTML = `<h2>En proceso</h2>`
        let inputBuscador = document.getElementById("buscador");
        inputBuscador.style.display = "block";

        inputBuscador.addEventListener("change", e => {
            console.log(e.target.value)
            let nameBusqueda = e.target.value;
            ajax({
                url: api.SEARCHNAME + nameBusqueda,
                callback: data => document.getElementById("section").append(ContainerCards(data))
            })
        })
    } else {
        /*   console.log(api.SEARCHID + localStorage.getItem("id")) */
        ajax({
            url: api.SEARCHID + localStorage.getItem("id"),
            callback: data => document.getElementById("section").append(Card(data))
        })
    }
} 