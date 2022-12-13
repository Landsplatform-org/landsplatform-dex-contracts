pragma solidity ^0.8.0;

contract Transactions {
    event Transfer (address sender, address receiver, uint amount, uint256 timestamp);

    function publishTransaction(address payable receiver, uint amount) public {
        emit Transfer(msg.sender, receiver, amount, block.timestamp); 
    }
}