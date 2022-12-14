import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";

//API Key
const API_KEY = "ckey_9d55c9caa3d34ca78d2acc8d9ee";

class Health extends Component {
  state = {
    items: [],
  };

  //xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.
  // health data
  //https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=ckey_9d55c9caa3d34ca78d2acc8d9ee

  getApiHealth = async (e: {
    target: {
      elements: {
        chainId: { value: any };
        dexName: { value: any };
      };
    };
    preventDefault: () => void;
  }) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/health/?quote-currency=USD&format=JSON&key=${API_KEY}`
    );
    const data = await api_call.json();
    this.setState({ items: data.data.items });

    console.log(this.state.items);
  };

  render() {
    return (
      <div>
        <Text
          letterSpacing={2}
          fontSize="3xl"
          fontWeight="semibold"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Health
        </Text>

        {/* <DexSelectBtn getApi={this.getApiHealth} /> */}
        <Box>
          {this.state.items.map((item) => (
            <ul key={item.latest_block_height}>
              <li>{item.latest_block_signed_at}</li>
              <li>{item.synced_block_height}</li>
              <li>{item.synced_block_signed_at}</li>
            </ul>
          ))}
        </Box>
      </div>
    );
  }
}
export default Health;
