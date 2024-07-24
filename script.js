document.addEventListener('DOMContentLoaded', () => {
    const calcularIMCButton = document.getElementById('calcularIMC');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoP = document.getElementById('resultado');

    function calcularIMC() {
        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);

        const imc = peso / (altura * altura);
        resultadoP.textContent = `Seu IMC é ${imc.toFixed(2)}`;
    }

    calcularIMCButton.addEventListener('click', calcularIMC);
});
