let cad = `
<div class="clientes">
`
for (let i = 0; i < data.length; i++) {
    cad += `
        <div class="clientes">
            <h4>Usuario: ${data[i].email}</h4>
            <p>Opinión: ${data[i].body}</p>
                
            </div>
        </div>
       `
}
cad += `
    </div>
`
document.write(cad)
document.getElementById("fotos").innerHTML = cad

//Con forEach
// data.forEach(item => console.log(`nombre: ${ item.name },
// Genero: ${ item.gender },
// Especie: ${ item.species }`));