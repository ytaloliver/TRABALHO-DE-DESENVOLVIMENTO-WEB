function CalcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const IMC = peso / (altura * altura);

  if (IMC < 18.5) {
    document.getElementById("qr").innerText = `Seu IMC é: ${IMC.toFixed(2)} você está ABAIXO DO PESO`;
  }   
  else if (IMC => 18.5 && IMC <= 24.9){
    document.getElementById("qr").innerText = `Seu IMC é: ${IMC.toFixed(2)} você está no PESO IDEAL`;
   }
   else if (IMC => 25 && IMC <= 29.9){
    document.getElementById("qr").innerText = `Seu IMC é: ${IMC.toFixed(2)} você está SOBREPESO`;
   }
   else if (IMC => 30 && IMC <= 34.9){
    document.getElementById("qr").innerText = `Seu IMC é: ${IMC.toFixed(2)} você está em OBESIDADE MODERADA`;
   }
   else if (IMC => 35 && IMC <= 39.9){
    document.getElementById("qr").innerText = `Seu IMC é: ${IMC.toFixed(2)} você está em OBESIDADE SEVERA`;
   }
   else if (IMC => 40 && IMC <= 50){
    document.getElementById("qr").innerText = `Seu IMC é: ${IMC.toFixed(2)} você está em OBESIDADE MORBIDA`;
   }


}