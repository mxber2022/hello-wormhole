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

export interface HelloWormholeInterface extends utils.Interface {
  functions: {
    "createMarket(string,string)": FunctionFragment;
    "getMarketDetails(uint256)": FunctionFragment;
    "getUserBet(uint256,uint256)": FunctionFragment;
    "getUserWinningAmount(uint256)": FunctionFragment;
    "latestGreeting()": FunctionFragment;
    "marketCount()": FunctionFragment;
    "markets(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "placeBet(uint256,uint256)": FunctionFragment;
    "quoteCrossChainGreeting(uint16)": FunctionFragment;
    "receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)": FunctionFragment;
    "resolveMarket(uint256,uint256)": FunctionFragment;
    "sendCrossChainGreeting(uint16,address,string,string)": FunctionFragment;
    "withdrawWinnings(uint256)": FunctionFragment;
    "wormholeRelayer()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createMarket"
      | "getMarketDetails"
      | "getUserBet"
      | "getUserWinningAmount"
      | "latestGreeting"
      | "marketCount"
      | "markets"
      | "owner"
      | "placeBet"
      | "quoteCrossChainGreeting"
      | "receiveWormholeMessages"
      | "resolveMarket"
      | "sendCrossChainGreeting"
      | "withdrawWinnings"
      | "wormholeRelayer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createMarket",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBet",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserWinningAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestGreeting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "placeBet",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteCrossChainGreeting",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveWormholeMessages",
    values: [BytesLike, BytesLike[], BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resolveMarket",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCrossChainGreeting",
    values: [BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawWinnings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wormholeRelayer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUserBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserWinningAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "placeBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteCrossChainGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveWormholeMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendCrossChainGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawWinnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wormholeRelayer",
    data: BytesLike
  ): Result;

  events: {
    "BetPlaced(uint256,address,uint256,uint256)": EventFragment;
    "GreetingReceived(string,uint16,address)": EventFragment;
    "MarketCreated(uint256,string,string)": EventFragment;
    "MarketResolved(uint256,uint256)": EventFragment;
    "WinningsWithdrawn(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BetPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GreetingReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketResolved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WinningsWithdrawn"): EventFragment;
}

export interface BetPlacedEventObject {
  marketId: BigNumber;
  user: string;
  outcomeIndex: BigNumber;
  amount: BigNumber;
}
export type BetPlacedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  BetPlacedEventObject
>;

export type BetPlacedEventFilter = TypedEventFilter<BetPlacedEvent>;

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

export interface MarketCreatedEventObject {
  marketId: BigNumber;
  question: string;
  imageUri: string;
}
export type MarketCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  MarketCreatedEventObject
>;

export type MarketCreatedEventFilter = TypedEventFilter<MarketCreatedEvent>;

export interface MarketResolvedEventObject {
  marketId: BigNumber;
  winningOutcomeIndex: BigNumber;
}
export type MarketResolvedEvent = TypedEvent<
  [BigNumber, BigNumber],
  MarketResolvedEventObject
>;

export type MarketResolvedEventFilter = TypedEventFilter<MarketResolvedEvent>;

export interface WinningsWithdrawnEventObject {
  marketId: BigNumber;
  user: string;
  amount: BigNumber;
}
export type WinningsWithdrawnEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  WinningsWithdrawnEventObject
>;

export type WinningsWithdrawnEventFilter =
  TypedEventFilter<WinningsWithdrawnEvent>;

export interface HelloWormhole extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelloWormholeInterface;

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
    createMarket(
      question: string,
      imageUri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getMarketDetails(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string[], string, boolean, BigNumber, BigNumber]>;

    getUserBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserWinningAmount(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    latestGreeting(overrides?: CallOverrides): Promise<[string]>;

    marketCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    markets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, boolean, BigNumber] & {
        question: string;
        imageUri: string;
        totalPool: BigNumber;
        resolved: boolean;
        winningOutcomeIndex: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    placeBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    resolveMarket(
      marketId: BigNumberish,
      winningOutcomeIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      question: string,
      imageUri: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawWinnings(
      marketId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
  };

  createMarket(
    question: string,
    imageUri: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getMarketDetails(
    marketId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string[], string, boolean, BigNumber, BigNumber]>;

  getUserBet(
    marketId: BigNumberish,
    outcomeIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserWinningAmount(
    marketId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestGreeting(overrides?: CallOverrides): Promise<string>;

  marketCount(overrides?: CallOverrides): Promise<BigNumber>;

  markets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, boolean, BigNumber] & {
      question: string;
      imageUri: string;
      totalPool: BigNumber;
      resolved: boolean;
      winningOutcomeIndex: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  placeBet(
    marketId: BigNumberish,
    outcomeIndex: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  quoteCrossChainGreeting(
    targetChain: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  receiveWormholeMessages(
    payload: BytesLike,
    arg1: BytesLike[],
    arg2: BytesLike,
    sourceChain: BigNumberish,
    arg4: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  resolveMarket(
    marketId: BigNumberish,
    winningOutcomeIndex: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  sendCrossChainGreeting(
    targetChain: BigNumberish,
    targetAddress: string,
    question: string,
    imageUri: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawWinnings(
    marketId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  wormholeRelayer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createMarket(
      question: string,
      imageUri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getMarketDetails(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string[], string, boolean, BigNumber, BigNumber]>;

    getUserBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserWinningAmount(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestGreeting(overrides?: CallOverrides): Promise<string>;

    marketCount(overrides?: CallOverrides): Promise<BigNumber>;

    markets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, boolean, BigNumber] & {
        question: string;
        imageUri: string;
        totalPool: BigNumber;
        resolved: boolean;
        winningOutcomeIndex: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    placeBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    resolveMarket(
      marketId: BigNumberish,
      winningOutcomeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      question: string,
      imageUri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawWinnings(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BetPlaced(uint256,address,uint256,uint256)"(
      marketId?: null,
      user?: string | null,
      outcomeIndex?: null,
      amount?: null
    ): BetPlacedEventFilter;
    BetPlaced(
      marketId?: null,
      user?: string | null,
      outcomeIndex?: null,
      amount?: null
    ): BetPlacedEventFilter;

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

    "MarketCreated(uint256,string,string)"(
      marketId?: null,
      question?: null,
      imageUri?: null
    ): MarketCreatedEventFilter;
    MarketCreated(
      marketId?: null,
      question?: null,
      imageUri?: null
    ): MarketCreatedEventFilter;

    "MarketResolved(uint256,uint256)"(
      marketId?: null,
      winningOutcomeIndex?: null
    ): MarketResolvedEventFilter;
    MarketResolved(
      marketId?: null,
      winningOutcomeIndex?: null
    ): MarketResolvedEventFilter;

    "WinningsWithdrawn(uint256,address,uint256)"(
      marketId?: null,
      user?: string | null,
      amount?: null
    ): WinningsWithdrawnEventFilter;
    WinningsWithdrawn(
      marketId?: null,
      user?: string | null,
      amount?: null
    ): WinningsWithdrawnEventFilter;
  };

  estimateGas: {
    createMarket(
      question: string,
      imageUri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getMarketDetails(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserWinningAmount(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestGreeting(overrides?: CallOverrides): Promise<BigNumber>;

    marketCount(overrides?: CallOverrides): Promise<BigNumber>;

    markets(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    placeBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    resolveMarket(
      marketId: BigNumberish,
      winningOutcomeIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      question: string,
      imageUri: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawWinnings(
      marketId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createMarket(
      question: string,
      imageUri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getMarketDetails(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserWinningAmount(
      marketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestGreeting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    markets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    placeBet(
      marketId: BigNumberish,
      outcomeIndex: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    quoteCrossChainGreeting(
      targetChain: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveWormholeMessages(
      payload: BytesLike,
      arg1: BytesLike[],
      arg2: BytesLike,
      sourceChain: BigNumberish,
      arg4: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    resolveMarket(
      marketId: BigNumberish,
      winningOutcomeIndex: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sendCrossChainGreeting(
      targetChain: BigNumberish,
      targetAddress: string,
      question: string,
      imageUri: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawWinnings(
      marketId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
