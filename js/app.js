document
	.getElementById("productForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Evita el envío del formulario para poder capturar los datos

		
		const nombre = document.getElementById("nombre").value;
		const precio = document.getElementById("precio").value;
		const url = document.getElementById("url").value;

		
		let nombreStr = nombre;
		let precioStr = precio;
		let urlStr = url;

		
		const nuevoProducto = document.createElement("div");
		nuevoProducto.classList.add("card");
		nuevoProducto.innerHTML = `
                <div class="card__img">
                    <img src="${urlStr}" alt="Imagen Producto" />
                </div>
                <div class="card__name">${nombreStr}</div>
                <div class="card__wrapper">
                    <div class="card__price">$${precioStr}</div>
                    <div class="card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill="">
                            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                        </svg>
                    </div>
                </div>
            `;

		
		nuevoProducto
			.querySelector(".card__icon")
			.addEventListener("click", function () {
				this.closest(".card").remove();
			});

		
		document.getElementById("productos").appendChild(nuevoProducto);

		
		document.getElementById("productForm").reset();
	});


document.getElementById("reset-btn").addEventListener("click", function () {
	document.getElementById("productForm").reset();
});

document.querySelector(".card__icon").addEventListener("click", function () {
	this.closest(".card").remove();
});
