
export const Header = () => {
    let navbar = document.createElement("nav");

    navbar.innerHTML = `

    <a href="#/">Home</a>
    <a href="#/buscador">Buscador</a>
    
    `

    return navbar
}