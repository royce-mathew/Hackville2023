import openai
import json;
import config


openai.api_key = config.OPENAI_API_KEY;

def evaluate_input(input_sentence: str):
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=input_sentence,
        temperature=0.9,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0.0,
        presence_penalty=0.6,
        stop=[" Human:", " AI:"]
    )
    try:
        return response["choices"][0]["text"].strip()
    except Exception:
        return "An Exception Occured"

print(evaluate_input("How are you doing?"))
