import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xD2EA71E2Fb96760ed534B63D9D94B2006c8886E2"
);

export default instance;
