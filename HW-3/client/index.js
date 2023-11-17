const { ethers } = require('ethers');
const config = require('./config');
require('dotenv').config();

const provider = new ethers.JsonRpcProvider(config.infuraEndpoint);
const contract = new ethers.Contract(config.contractAddress, config.contractABI, provider);

// Скрипт для добавления структуры
async function addStructer(key, data, amounts) {
    const wallet = new ethers.Wallet(config.privateKey, provider);
    const contractWithSigner = contract.connect(wallet);
    const tx = await contractWithSigner.addStruct(key, data, amounts);
    await tx.wait();
    console.log('Структура создана:', tx);
}

// Скрипт для удаления структуры
async function removeStructer(key) {
    const wallet = new ethers.Wallet(config.privateKey, provider); // private key -> config.js
    const contractWithSigner = contract.connect(wallet);
    const tx = await contractWithSigner.removeStruct(key);
    await tx.wait();
    console.log('Структура удалена:', tx);
}
// Скрипт для просмотра событий по адресу и фильтру
async function getEvents() {
    const filter = contract.filters.Added();
    const events = await contract.queryFilter(filter, 0, 'latest');
    events.forEach(event => {
        console.log('Событие:', event.args);
    });
}
// Скрипт для просмотра слотов storage контракта
async function getStorageJS(position) {
    const data = await provider.getStorage(config.contractAddress, position);
    console.log(`Данные в слоте ${position}:`, data);
}

async function main() {
    await addStructer(1, 'Привет!', [1, 2, 3]);
    await addStructer(2, 'Привет!@', [1, 2, 3, 4,5]);
    await removeStructer(1);
    await getStorageJS(1);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });