// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const dialog = require('electron').remote.dialog  // Tem que usar remote.dialog, para pegar "render"
                                        //do main.js não funciona require('electron') em todas js

function consultaSat() {

    const ffi = require('ffi-napi'); // Carrega a modulo ffi
    //const ref = require('ref'); // Carrega... Não cheguei a usar
    
    var sat = ffi.Library('SAT.dll', { // SAT.dll é a DLL que a sefaz disponibiliza, deixa na mesma pasta (diretorio) ou coloque o caminho da dll
        'ConsultarSAT': ['string', ['int']], // Comando para constultar o SAT se esta operante, string pois o que retorna é string, e o int é porque vc envia um inteiro qué é um numero                                                            // de sessao enviado pelo Aplicativo Comercial (você)
        'ConsultarStatusOperacional': ['string', ['int', 'string']] // Deixei como exemplo aqui, string pois a resposta é uma string, alias acredito que todos são string, int pois vc envia 
                                                                                           // o numero de sessao e string é o código de ativação do SAT
    });    
    
    var session = Math.floor(Math.random() * 999999); // Isso aí gera o um numero inteiro aleatorio de 6 digitos
    var ConsultarSAT = sat.ConsultarSAT(session); // faço a consulta passando a sessão
    //console.log(ConsultarSAT); // E aí a resposta    
    const responseConsultaSAT = ConsultarSAT; // amarzeno numa const só pra exibir depois no dialog
    const options = {
        type: 'info',
        buttons: ['Ok!'],
        defaultId: 2,
        title: 'Consulta SAT',
        message: responseConsultaSAT
      };
    
      dialog.showMessageBox(null, options, (response, checkboxChecked) => {
        console.log(response);
        console.log(checkboxChecked);
      })
}

document.getElementById('carai').onclick = function(){
    consultaSat()
}