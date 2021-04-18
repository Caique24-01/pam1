let app = { 
    inicializar: function(){
        console.log("iniciar");
        document.addEventListener('deviceready', app.onMyDeviceReady, false);
        document.addEventListener('resume', app.retornoAoPrimeiroPlano, false);
    },
   onMyDeviceReady: function() {
        console.log('######Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById(" bntSelecionaContato").addEventListener('click', app.selecionarContato)
    },
    retornoAoPrimeiroPlano: function(){
        console.log("####retorno Ao Primeiro Plano");
    },
    selecionarContato : function(){
        console.log("SelecionarContato");
        navigator.contacts.pickContact(function(c){
            console.log("#####Contato Selecionado");
            console.log(c);
        },
        function(err){
            console.log("#####Contato não Selecionado");
            console.log(err);
        });
    }

}
app.inicializar();
