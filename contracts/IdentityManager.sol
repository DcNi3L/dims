// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract IdentityManager {
    struct Identity {
        address userAddress;  // Адрес пользователя
        string name;          // Имя пользователя
        string metadata;      // Дополнительная информация (например, IPFS hash)
        bool verified;        // Статус верификации
    }

    mapping(address => Identity) public identities;  // Хранилище всех идентификаторов
    address public admin;                            // Администратор контракта

    constructor() {
        admin = msg.sender;  // Устанавливаем владельца контракта
    }

    // Регистрация нового идентификатора
    function registerIdentity(string memory _name, string memory _metadata) public {
        require(bytes(identities[msg.sender].name).length == 0, "Identity already exists");
        identities[msg.sender] = Identity(msg.sender, _name, _metadata, false);
    }

    // Верификация идентификатора (только администратор)
    function verifyIdentity(address _user) public {
        require(msg.sender == admin, "Only admin can verify identities");
        identities[_user].verified = true;
    }

    // Получение информации об идентификаторе
    function getIdentity(address _user) public view returns (Identity memory) {
        return identities[_user];
    }
}
