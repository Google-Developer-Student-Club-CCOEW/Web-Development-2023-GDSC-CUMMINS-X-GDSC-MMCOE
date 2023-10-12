import streamlit as st
import hashlib
import requests

# Function to check password strength
def check_password_strength(password, criteria):
    strength = 0
    
    if criteria['length'] and len(password) >= 8:
        strength += 1
    if criteria['uppercase'] and any(char.isupper() for char in password):
        strength += 1
    if criteria['lowercase'] and any(char.islower() for char in password):
        strength += 1
    if criteria['digits'] and any(char.isdigit() for char in password):
        strength += 1
    if criteria['special_chars'] and any(char in r'!@#$%^&*(),.?":{}|<>' for char in password):
        strength += 1

    return strength

# Function to check if the password has been leaked
def check_password_leak(password):
    sha1_password = hashlib.sha1(password.encode()).hexdigest().upper()
    prefix, suffix = sha1_password[:5], sha1_password[5:]
    api_url = f"https://api.pwnedpasswords.com/range/{prefix}"
    response = requests.get(api_url)

    if response.status_code == 200:
        hashes = response.text.splitlines()
        for hash in hashes:
            if hash.startswith(suffix):
                return True
    return False

# Initialize session state for customization options
if 'customization' not in st.session_state:
    st.session_state.customization = {
        'length': True,
        'uppercase': True,
        'lowercase': True,
        'digits': True,
        'special_chars': False  # Default to False
    }

# Streamlit UI with default theme
st.title("Professional Password Strength Checker")

# Customization Options
st.sidebar.title("Customization Options")
criteria = st.session_state.customization  # Get customization state

criteria['length'] = st.sidebar.checkbox("Require minimum length (8 characters)", value=criteria['length'])
criteria['uppercase'] = st.sidebar.checkbox("Require at least one uppercase letter", value=criteria['uppercase'])
criteria['lowercase'] = st.sidebar.checkbox("Require at least one lowercase letter", value=criteria['lowercase'])
criteria['digits'] = st.sidebar.checkbox("Require at least one digit", value=criteria['digits'])
criteria['special_chars'] = st.sidebar.checkbox("Require at least one special character", value=criteria['special_chars'])

# User instructions
st.sidebar.markdown("### Instructions")
st.sidebar.write("1. Customize your password complexity criteria on the left sidebar.")
st.sidebar.write("2. Enter your password in the field below.")
st.sidebar.write("3. Click the 'Check' button to evaluate your password.")
st.sidebar.markdown("### Password Leak Check")
st.sidebar.write("The password will be checked against known data breaches.")

# User input for password
password = st.text_input("Enter your password:", type="password")

# Check button
if st.button("Check"):
    if not password:
        st.warning("Please enter a password.")
    else:
        # Check if the password meets the selected criteria
        meets_criteria = (
            (not criteria['length'] or len(password) >= 8) and
            (not criteria['uppercase'] or any(char.isupper() for char in password)) and
            (not criteria['lowercase'] or any(char.islower() for char in password)) and
            (not criteria['digits'] or any(char.isdigit() for char in password)) and
            (not criteria['special_chars'] or any(char in r'!@#$%^&*(),.?":{}|<>' for char in password))
        )
        
        if not meets_criteria:
            st.warning("Password does not meet the selected criteria.")
        else:
            is_leaked = check_password_leak(password)
            
            if is_leaked:
                st.warning("Password has been leaked in a data breach.")
            else:
                feedback = {
                    5: "Password is strong.",
                    4: "Password is moderately strong. Consider adding more complexity.",
                    0: "Password is weak. Please make it stronger."
                }
                
                strength = check_password_strength(password, criteria)
                
                st.info(f"{feedback.get(strength, 'Password strength: {} out of 5'.format(strength))}")
