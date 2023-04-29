import os
import openai
import src.settings as settings;

settings.initSettings();

openai.api_key = os.getenv("OPENAI_API_KEY")
openaiModelApi = openai.Model;
models = openaiModelApi.list()

print("MODELS #####\n", models.get("data"))
