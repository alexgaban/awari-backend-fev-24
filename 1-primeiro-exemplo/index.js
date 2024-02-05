const btnBuscaCep = document.getElementById('btnBuscaCep');

btnBuscaCep.addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        return res.json();
    }).then((response) => {
        if (response) {
            const endereco = document.getElementById('endereco');
            endereco.innerHTML = `
                <b>Rua: </b> ${response.logradouro} </br>
                <b>Bairro: </b> ${response.bairro} </br>
                <b>Município: </b> ${response.localidade} </br>
                <b>Estado: </b> ${response.uf}
            `
        }
    }).catch(() => {
        console.error(error);
    })
});