# Password Strength Checker

This is a simple Streamlit application for checking the strength of passwords, including the option to check if a password has been leaked in a data breach. The application allows users to customize their password complexity criteria and provides feedback on password strength.

## Installation

1. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:

   - On Windows:

     ```bash
     .\venv\Scripts\activate
     ```

   - On macOS and Linux:

     ```bash
     source venv/bin/activate
     ```

3. Install the required dependencies using `pip`:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Run the Streamlit application:

   ```bash
   streamlit run password_strength.py
   ```

2. Access the application in your web browser by opening the URL provided by Streamlit.

3. Customize your password complexity criteria by checking or unchecking the options in the left sidebar.

4. Enter your password in the provided text field.

5. Click the "Check" button to evaluate your password.

## Features

- Customize password complexity criteria:
  - Require minimum length (8 characters)
  - Require at least one uppercase letter
  - Require at least one lowercase letter
  - Require at least one digit
  - Require at least one special character (optional)

- Check if the password has been leaked in a data breach using the Pwned Passwords API.

- Provide feedback on password strength:
  - Strong
  - Moderately strong
  - Weak

## Dependencies

- Streamlit: Streamlit is used for building the user interface of the application.

- hashlib: hashlib is used to hash the password for security checks.

- requests: requests is used to make API requests to check if the password has been leaked.
