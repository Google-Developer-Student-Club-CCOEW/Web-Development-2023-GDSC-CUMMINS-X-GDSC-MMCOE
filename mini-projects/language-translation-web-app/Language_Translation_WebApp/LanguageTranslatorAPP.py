import streamlit as st
from translate import Translator

# Create a Streamlit app
st.title("Language Translation App")

# Input for the sentence to be translated
sentence = st.text_input("Enter a sentence to translate:")

# Dropdown for selecting the target language
target_language = st.selectbox("Select the target language:", ["English", "French", "Spanish", "German"])

# Translate the sentence when the button is clicked
if st.button("Translate"):
    if sentence:
        try:
            # Map target language to language code
            language_codes = {"English": "en", "French": "fr", "Spanish": "es", "German": "de"}
            target_code = language_codes.get(target_language, "en")

            # Translate the sentence
            translator = Translator(to_lang=target_code)
            translated_sentence = translator.translate(sentence)

            st.success(f"Translated sentence: {translated_sentence}")
        except Exception as e:
            st.error("Translation failed. Please try again.")

# Display a sample sentence for reference
st.subheader("Sample Sentence for Reference:")
st.write("Hello, how are you?")
