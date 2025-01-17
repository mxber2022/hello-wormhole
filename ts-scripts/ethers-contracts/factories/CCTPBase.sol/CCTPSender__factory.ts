/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CCTPSender,
  CCTPSenderInterface,
} from "../../CCTPBase.sol/CCTPSender";

const _abi = [
  {
    type: "function",
    name: "chainIdToCCTPDomain",
    inputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setCCTPDomain",
    inputs: [
      {
        name: "chain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cctpDomain",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRegisteredSender",
    inputs: [
      {
        name: "sourceChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "wormhole",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormhole",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormholeRelayer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormholeRelayer",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class CCTPSender__factory {
  static readonly abi = _abi;
  static createInterface(): CCTPSenderInterface {
    return new utils.Interface(_abi) as CCTPSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CCTPSender {
    return new Contract(address, _abi, signerOrProvider) as CCTPSender;
  }
}
