import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";

const cliente1 = new Cliente("Irineu", 11122233344, 31999990000);
const cliente2 = new Cliente("Soraia", 55566677788, 31999991111);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(1000);
conta1.sacar(500);

const conta2 = new ContaCorrente(cliente2, 1002);

const conta3 = new ContaPoupança(50, cliente1, 1001);

conta1.transferir(300, conta2);

console.log(conta3);
console.log(conta2);
console.log(conta1);

