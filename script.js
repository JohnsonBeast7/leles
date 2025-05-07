
const dataFixa = new Date("2024-11-15T02:32");

function formatarContagem(dataInicial) {
  const agora = new Date();
  if (agora < dataInicial) return "A data selecionada é futura.";

  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();
  let horas = agora.getHours() - dataInicial.getHours();
  let minutos = agora.getMinutes() - dataInicial.getMinutes();
  let segundos = agora.getSeconds() - dataInicial.getSeconds();

  if (segundos < 0) { segundos += 60; minutos--; }
  if (minutos < 0) { minutos += 60; horas--; }
  if (horas < 0) { horas += 24; dias--; }
  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += mesAnterior;
    meses--;
  }
  if (meses < 0) { meses += 12; anos--; }

  return `${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

function iniciarContador() {
  setInterval(() => {
    document.getElementById('contador').innerText = formatarContagem(dataFixa);
  }, 1000);
}

window.onload = iniciarContador;
