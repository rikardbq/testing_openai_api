import { Configuration, OpenAIApi } from "openai";

let configuration;

const initClient = (apiKey) => {
  configuration = configuration ?? new Configuration({
    apiKey
  });
  
  return new OpenAIApi(configuration);
}

export default initClient;
