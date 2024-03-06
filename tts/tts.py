#https://realpython.com/python-json/
#https://platform.openai.com/docs/guides/text-to-speech?lang=python

import json
from pathlib import Path
from openai import OpenAI

#* Caricamento dei dati da un file JSON
with open("json/contenuto.json", "r") as file:
    contenuti = json.load(file)
    
'''
# Creazione di un'istanza del client OpenAI
client = OpenAI()

#* Definizione del percorso del file audio in cui verrà salvata la risposta generata
speech_file_path = Path(__file__).parent / "speech.mp3"

#* Chiamata all'API di generazione del testo in un file audio
response = client.audio.speech.create(
    model="tts-1",  # Specifica del modello di generazione del testo
    voice="echo",   # Specifica della voce da utilizzare nella generazione del testo
    input="Today is a wonderful day to build something people love!"  # Testo di input per la generazione
)

#* Salvataggio della risposta audio nel file specificato
response.stream_to_file(speech_file_path)
'''