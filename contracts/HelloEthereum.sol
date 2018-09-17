pragma solidity ^0.4.22;


contract HelloEthereum {

  string private _word;
  constructor() public{
    _word = "HelloEthereum!";
  }
  function get() public view returns(string){
    return _word;
  }
}
