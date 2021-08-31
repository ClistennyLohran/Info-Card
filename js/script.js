let openCloseMenu = document.getElementById('openCloseMenu');
let openCloseIcon = document.getElementById('openCloseIcon');

let cardBottom = document.getElementById('cardBottom');

let ulAnim = document.getElementById('ulAnim');
let infoAboutHover = document.getElementById('infoAboutHover');

let menuStatus = false;

openCloseMenu.onclick = () => {
  if(menuStatus == false) {
    openCloseIcon.style.transform = "rotateZ(180deg)";
    cardBottom.style.opacity = "1";
    cardBottom.style.visibility = "visible";
    cardBottom.style.right = "0px";
    ulAnim.style.right = "0px";
    ulAnim.style.opacity = "1";
    infoAboutHover.style.right = "0px";
    infoAboutHover.style.opacity = "1";
    menuStatus = true;
    return;
  }
  openCloseIcon.style.transform = "rotateZ(0deg)";
  cardBottom.style.opacity = "0";
  cardBottom.style.visibility = "hidden";
  cardBottom.style.right = "-480px";
  ulAnim.style.right = "-400px";
  ulAnim.style.opacity = "0";
  infoAboutHover.style.right = "-400px";
  infoAboutHover.style.opacity = "0";
  menuStatus = false;
}

let infoHover = document.getElementById('infoHover');

let inicio = document.getElementById('inicio');
let padraoAtendimento = document.getElementById('padraoAtendimento');
let comunicados = document.getElementById('comunicados');
let holerite = document.getElementById('holerite');
let campanhas = document.getElementById('campanhas');
let informacoes = document.getElementById('informacoes');
let novidades = document.getElementById('novidades');
let configuracoes = document.getElementById('configuracoes');

inicio.onmouseover = () => {
  infoHover.innerHTML = "Volta para o início da página.";
}
padraoAtendimento.onmouseover = () => {
  infoHover.innerHTML = "Aqui você poderá conferir os nossos padrões de atendimento, sejam eles para operador de caixa, balconista e perfumista.";
}
comunicados.onmouseover = () => {
  infoHover.innerHTML = "Todos os comunicados importantes serão encontrados aqui, sejam sobre mudanças no atendimento, feriados, mudanças nos valores de medicamentos etc...";
}
holerite.onmouseover = () => {
  infoHover.innerHTML = "Você poderá ter acesso a todos os seus holerites a qualquer momento e em qualquer lugar, basta acessar o seu painel!";
}
campanhas.onmouseover = () => {
  infoHover.innerHTML = "Todas as campanhas serão listadas aqui, o resultado das mesmas também se encontrarão aqui.";
}
informacoes.onmouseover = () => {
  infoHover.innerHTML = "Informações sobre os medicamentos mais vendidos, também poderá encontrar tutoriais sobre a venda de PBMs.";
}
novidades.onmouseover = () => {
  infoHover.innerHTML = "Todas as novidades relacionadas a empresa poderão ser encontradas aqui, novos medicamentos, novas funcionalidades do nosso website etc...";
}
configuracoes.onmouseover = () => {
  infoHover.innerHTML = "Você poderá realizar as configurações da sua conta, mudar o nome, imagem, alterar senha e etc...";
}