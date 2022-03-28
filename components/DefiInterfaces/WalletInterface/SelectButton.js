import React from "react";
import {
  Button,
  Select,
  Input,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function SelectButton({ getWallet }) {
  useForm();

  return (
    <form onSubmit={getWallet}>
      <FormControl>
        <Stack spacing={1} direction="row">
          <Input
            borderColor="gray.500"
            maxW={700}
            letterSpacing={2}
            type="text"
            name="userAddress"
            textTransform="uppercase"
            placeholder="ACCOUNT ADDRESS 0x00f7.... OR ENS DOMAIN"
          />

          <Select
            textAlign="center"
            maxW={150}
            borderColor="gray.500"
            name="chainId"
            type="number"
            bg="#303E46"
          >
            <option name="chainId" value="1">
              Ethereum
            </option>
            <option name="chainId" value="137">
              Polygon
            </option>
            <option name="chainId" value="43114">
              Avalanche
            </option>
            <option name="chainId" value="56">
              Binance
            </option>
            <option name="chainId" value="1284">
              Moonbeam
            </option>
            <option name="chainId" value="42161">
              Arbitrum
            </option>
            <option name="chainId" value="250">
              Fantom
            </option>
          </Select>
          <Button
            w={150}
            borderRadius="lg"
            right="0"
            bgColor="#00AF91"
            type="submit"
          >
            ANALYSE
          </Button>
        </Stack>
        <RadioGroup
          borderColor="gray.500"
          my={5}
          textAlign="left"
          maxW={150}
          name="walletsStatus"
          type="number"
          defaultValue="balances_v2"
        >
          <Stack
            spacing={5}
            direction="row"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            <Radio
              size="md"
              colorScheme="red"
              name="walletsStatus"
              value="balances_v2"
            >
              Balances
            </Radio>
            {/* <Radio
              size="md"
              name="walletsStatus"
              colorScheme="green"
              value="portfolio_v2"
            >
              Portfolio
            </Radio> */}
            <Radio
              size="md"
              colorScheme="orange"
              name="walletsStatus"
              value="transactions_v2"
            >
              Transactions
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </form>
  );
}
