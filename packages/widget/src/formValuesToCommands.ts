import { Address } from "abitype";
import { Command } from "./commands";
import { ValidFormValues } from "./formValues";
import { utils } from "ethers";

const { parseEther } = utils;

export const formValuesToCommands = (
  values: ValidFormValues
): ReadonlyArray<Command> => {
  const {
    network: { id: chainId },
    accountAddress,
    receiverAddress,
    wrapAmountEther,
    enableAutoWrap,
    paymentOptionWithTokenInfo: { paymentOption, superToken },
  } = values;
  const wrapAmount = parseEther(wrapAmountEther ? wrapAmountEther : "0");

  const superTokenAddress = superToken.address as Address;
  const underlyingTokenAddress =
    superToken.extensions.superTokenInfo.underlyingTokenAddress;

  const commands: Command[] = [];
  if (underlyingTokenAddress) {
    if (!wrapAmount.isZero()) {
      commands.push({
        title: "Wrap into Super Tokens",
        chainId: chainId,
        superTokenAddress,
        accountAddress,
        underlyingTokenAddress,
        amountEther: wrapAmountEther, // TODO(KK): Decimals need to be accounted somewhere!
      });
    }

    if (enableAutoWrap) {
      commands.push({
        title: "Enable Auto-Wrap",
        chainId,
        superTokenAddress,
        accountAddress,
        underlyingTokenAddress,
      });
    }
  }

  commands.push({
    title: "Send Stream",
    chainId,
    superTokenAddress,
    accountAddress,
    receiverAddress,
    flowRate: paymentOption.flowRate,
  });

  return Object.freeze(commands);
};
