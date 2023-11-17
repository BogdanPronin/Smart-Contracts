module.exports = {
    infuraEndpoint: 'https://polygon-mumbai.infura.io/v3/b70a816a3d1546438e17f2ef9f16ab60',
    contractAddress: '0x7551B55611b13A951D9fd5385f3322d62872fe1F',
    privateKey:"",
    contractABI: [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "key",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "data",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "amounts",
                        "type": "uint256[]"
                    }
                ],
                "name": "addStruct",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "key",
                        "type": "uint256"
                    }
                ],
                "name": "removeStruct",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "num",
                        "type": "uint256"
                    }
                ],
                "name": "store",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "key",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "data",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "amounts",
                        "type": "uint256[]"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    }
                ],
                "name": "StructAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "key",
                        "type": "uint256"
                    }
                ],
                "name": "StructRemoved",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "retrieve",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
}