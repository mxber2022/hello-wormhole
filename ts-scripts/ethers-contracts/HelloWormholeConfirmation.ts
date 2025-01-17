/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface HelloWormholeConfirmationInterface extends utils.Interface {
  functions: {
    "latestConfirmedSentGreeting()": FunctionFragment;
    "latestGreeting()": FunctionFragment;
    "quoteConfirmation(uint16)": FunctionFragment;
    "quoteCrossChainGreeting(uint16,uint256)": FunctionFragment;
    "receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)": FunctionFragment;
    "sendCrossChainGreeting(uint16,address,string,uint256)": FunctionFragment;
    "setRegisteredSender(uint16,bytes32)": FunctionFragment;
    "wormhole()": FunctionFragment;
    "wormholeRelayer()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "latestConfirmedSentGreeting"
      | "latestGreeting"
      | "quoteConfirmation"
      | "quoteCrossChainGreeting"
      | "receiveWormholeMessages"
      | "sendCrossChainGreeting"
      | "setRegisteredSender"
      | "wormhole"
      | "wormholeRelayer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "latestConfirmedSentGreeting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestGreeting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quoteConfirmation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteCrossChainGreeting",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveWormholeMessages",
    values: [BytesLike, BytesLike[], BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCrossChainGreeting",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRegisteredSender",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "wormhole", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wormholeRelayer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "latestConfirmedSentGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteCrossChainGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveWormholeMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendCrossChainGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegisteredSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wormhole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wormholeRelayer",
    data: BytesLike
  ): Result;

  events: {
    "GreetingReceived(string,uint16,address)": EventFragment;
    "GreetingSuccess(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GreetingReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GreetingSuccess"): EventFragment;
}

export interface GreetingReceivedEventObject {
  greeting: string;
  senderChain: number;
  sender: string;
}
export type GreetingReceivedEvent = TypedEvent<
  [string, number, string],
  GreetingReceivedEventObject
>;

export type GreetingReceivedEventFilter =
  TypedEventFilter<GreetingReceivedEvent>;

export interface GreetingSuccessEventObject {
  greeting: string;
  sender: string;
}
export type GreetingSuccessEvent = TypedEvent<
  [string, string],
  GreetingSuccessEventObject
>;

export type GreetingSuccessEventFilter = TypedEventFilter<GreetingSuccessEvent>;

export interface HelloWormholeConfirmation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelloWormholeConfirmationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    latestConfirmedSentGreeting(overrides?: CallOverrides): Promise<[string]>;

    latestGreeting(overrides?: CallOverrides): Promise<[string]>;

    quoteConfirmation(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      greeting: string,
      receiverValueForSecondDeliveryPayment: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    wormhole(overrides?: CallOverrides): Promise<[string]>;

    wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
  };

  latestConfirmedSentGreeting(overrides?: CallOverrides): Promise<string>;

  latestGreeting(overrides?: CallOverrides): Promise<string>;

  quoteConfirmation(
    targetChain: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteCrossChainGreeting(
    targetChain: BigNumberish,
    receiverValue: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  receiveWormholeMessages(
    payload: BytesLike,
    arg1: BytesLike[],
    sourceAddress: BytesLike,
    sourceChain: BigNumberish,
    arg4: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  sendCrossChainGreeting(
    targetChain: BigNumberish,
    targetAddress: string,
    greeting: string,
    receiverValueForSecondDeliveryPayment: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  setRegisteredSender(
    sourceChain: BigNumberish,
    sourceAddress: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  wormhole(overrides?: CallOverrides): Promise<string>;

  wormholeRelayer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    latestConfirmedSentGreeting(overrides?: CallOverrides): Promise<string>;

    latestGreeting(overrides?: CallOverrides): Promise<string>;

    quoteConfirmation(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      greeting: string,
      receiverValueForSecondDeliveryPayment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    wormhole(overrides?: CallOverrides): Promise<string>;

    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "GreetingReceived(string,uint16,address)"(
      greeting?: null,
      senderChain?: null,
      sender?: null
    ): GreetingReceivedEventFilter;
    GreetingReceived(
      greeting?: null,
      senderChain?: null,
      sender?: null
    ): GreetingReceivedEventFilter;

    "GreetingSuccess(string,address)"(
      greeting?: null,
      sender?: null
    ): GreetingSuccessEventFilter;
    GreetingSuccess(greeting?: null, sender?: null): GreetingSuccessEventFilter;
  };

  estimateGas: {
    latestConfirmedSentGreeting(overrides?: CallOverrides): Promise<BigNumber>;

    latestGreeting(overrides?: CallOverrides): Promise<BigNumber>;

    quoteConfirmation(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      greeting: string,
      receiverValueForSecondDeliveryPayment: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    wormhole(overrides?: CallOverrides): Promise<BigNumber>;

    wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    latestConfirmedSentGreeting(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestGreeting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoteConfirmation(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      receiverValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      sourceAddress: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      greeting: string,
      receiverValueForSecondDeliveryPayment: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
