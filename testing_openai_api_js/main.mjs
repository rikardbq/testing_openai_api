import initSettings from "./src/settings.mjs";
import initClient from "./src/client.mjs";

initSettings();
const client = initClient(process.env.OPENAI_API_KEY);

const models = await client.listModels();

console.log("MODELS #####\n", models.data);
