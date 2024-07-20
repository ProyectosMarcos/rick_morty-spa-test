import { Card } from "./Card.js";

export const ContainerCards = (props) => {
    let { results } = props;
    let div = document.createElement("div")

    results.map(el => div.appendChild(Card(el)))

    return div
}