var HelloEthereum = artifacts.require("HelloEthereum");

module.exports = function(deploy){
    deploy.deploy(HelloEthereum);
}