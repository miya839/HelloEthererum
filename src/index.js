App = {
    web3Provider:null,
    contracts: {},

    initWeb3: function(){
        App.web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        return App.initContract();
    },

    initContract: function(){
        $.getJSON('HelloEthereum.json', function(data){
            var Artifact = data;
            App.contracts.HelloEthereum = TruffleContract(Artifact);

            App.contracts.HelloEthereum.setProvider(App.web3Provider);

            App.contracts.HelloEthereum.deployed().then(function(instance) {
                return instance.get.call();
            }).then(function(adopters){
                document.write(adopters);
            }).catch(function(err){
                console.log(err.message);
            });
        });
    }
}

window.onload = function(){
    App.initWeb3();
}