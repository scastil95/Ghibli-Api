function crearTarjeta(pelicula) {
    const card = document.createElement("div")

    card.className = "pelicula-card"

    card.innerHTML = `
        <img src="${pelicula.image}" alt="${pelicula.title}">

        <div class="overlay">
            <div class="titulo">${pelicula.title}</div>
            <div class="director">Director: ${pelicula.director}</div>
            <div class="descripcion">${pelicula.description}</div>
        </div>
    `

    return card
}

async function ObtenerPeliculas() {
    try {
        const response = await fetch("https://ghibliapi.vercel.app/films")
        const data = await response.json()
        const contenedor = document.getElementById("peliculas")

        data.forEach(pelicula => {
            const tarjeta = crearTarjeta(pelicula)
            contenedor.appendChild(tarjeta)
        })

    } catch (error) {
        console.log(error)
    }
}

ObtenerPeliculas()