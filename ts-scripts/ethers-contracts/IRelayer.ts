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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface IRelayerInterface extends utils.Interface {
  functions: {
    "replaceMessage(bytes,bytes,bytes,bytes32)": FunctionFragment;
    "sendMessage(uint32,bytes32,bytes)": FunctionFragment;
    "sendMessageWithCaller(uint32,bytes32,bytes32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "replaceMessage"
      | "sendMessage"
      | "sendMessageWithCaller"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "replaceMessage",
    values: [BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageWithCaller",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "replaceMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageWithCaller",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRelayer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRelayerInterface;

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
    replaceMessage(
      originalMessage: BytesLike,
      originalAttestation: BytesLike,
      newMessageBody: BytesLike,
      newDestinationCaller: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    sendMessage(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      messageBody: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    sendMessageWithCaller(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      destinationCaller: BytesLike,
      messageBody: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  replaceMessage(
    originalMessage: BytesLike,
    originalAttestation: BytesLike,
    newMessageBody: BytesLike,
    newDestinationCaller: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  sendMessage(
    destinationDomain: BigNumberish,
    recipient: BytesLike,
    messageBody: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  sendMessageWithCaller(
    destinationDomain: BigNumberish,
    recipient: BytesLike,
    destinationCaller: BytesLike,
    messageBody: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    replaceMessage(
      originalMessage: BytesLike,
      originalAttestation: BytesLike,
      newMessageBody: BytesLike,
      newDestinationCaller: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessage(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      messageBody: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendMessageWithCaller(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      destinationCaller: BytesLike,
      messageBody: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    replaceMessage(
      originalMessage: BytesLike,
      originalAttestation: BytesLike,
      newMessageBody: BytesLike,
      newDestinationCaller: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    sendMessage(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      messageBody: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    sendMessageWithCaller(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      destinationCaller: BytesLike,
      messageBody: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    replaceMessage(
      originalMessage: BytesLike,
      originalAttestation: BytesLike,
      newMessageBody: BytesLike,
      newDestinationCaller: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sendMessage(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      messageBody: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sendMessageWithCaller(
      destinationDomain: BigNumberish,
      recipient: BytesLike,
      destinationCaller: BytesLike,
      messageBody: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
