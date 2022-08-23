 function mostraHora() {
		     let titulo = document.querySelector('h1');
             let agora = new Date();
 			 titulo.textContent = agora.toLocaleTimeString();
			}
        mostraHora();
		setInterval(mostraHora, 1000);
    const subtitulos = document.querySelectorAll('h2');
	const topicos = new Array();
	subtitulos.forEach(subtitulo => {
		topicos.push(subtitulo.textContent);
	});
	paragrafo = document.querySelector('p');
	paragrafo.textContent = topicos;
	lista = document.querySelector('ol');
	topicos.forEach(topico => {
		const item = document.createElement('li');
		item.textContent = topico;
		lista.append(item);
	});
	