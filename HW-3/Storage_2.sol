// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage_2 {

    uint256 number;

    // Структура произвольного содержания
    struct MyStruct {
        address owner;
        string data;
        uint256[] amounts; // Используем динамический массив вместо одиночного значения
        bool isActive;
    }

    // Отображение для хранения структур
    mapping(uint256 => MyStruct) myStructs;

    // Событие при добавлении структуры
    event StructAdded(uint256 key, address owner, string data, uint256[] amounts, bool isActive);

    // Событие при удалении структуры
    event StructRemoved(uint256 key);

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }


    function addStruct(uint256 key, string memory data, uint256[] memory amounts) public {
        MyStruct storage newStruct = myStructs[key];
        newStruct.owner = msg.sender;
        newStruct.data = data;
        newStruct.amounts = amounts;
        newStruct.isActive = true;

        emit StructAdded(key, msg.sender, data, amounts, true);
    }


    function removeStruct(uint256 key) public {
        require(myStructs[key].isActive, "Structure does not exist");
        require(myStructs[key].owner == msg.sender, "Only the owner can remove the structure");
        delete myStructs[key];

        emit StructRemoved(key);
    }
}
