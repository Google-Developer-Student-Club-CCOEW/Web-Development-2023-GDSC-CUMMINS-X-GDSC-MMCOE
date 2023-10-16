# Import necessary libraries
import streamlit as st
import qrcode
import io
from PIL import Image
import base64
from datetime import datetime

# Create a Streamlit web app
st.title("QR Code Generator")

# Function to generate QR code
def generate_qr_code(text):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(text)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    return img

# Sidebar - Customize QR code
st.sidebar.header("Customize QR Code")
text = st.sidebar.text_input("Enter text or URL")

# Generate QR code and display
if st.sidebar.button("Generate QR Code"):
    if text:
        qr_code_img = generate_qr_code(text)
        
        # Convert PIL Image to bytes
        img_bytes = io.BytesIO()
        qr_code_img.save(img_bytes, format="PNG")
        img_bytes = img_bytes.getvalue()

        # Display the QR code image using st.image
        st.image(img_bytes, use_column_width=True, caption=f"Text: {text}")

        # Sharing options
        st.header("Share QR Code")
        
        # Create a download link for the QR code
        b64 = base64.b64encode(img_bytes).decode()
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        href = f'<a href="data:file/png;base64,{b64}" download="qr_code_{timestamp}.png">Download QR Code</a>'
        st.markdown(href, unsafe_allow_html=True)

# Footer
st.sidebar.markdown("By Atharv N")
