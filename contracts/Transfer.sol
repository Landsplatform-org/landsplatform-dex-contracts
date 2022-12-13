// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract TransferTokens {
    event Transfer (address sender, address receiver, uint amount, uint256 timestamp);

    function publishTransaction(address payable receiver, uint amount) public {
        emit Transfer(msg.sender, receiver, amount, block.timestamp); 
    }
}