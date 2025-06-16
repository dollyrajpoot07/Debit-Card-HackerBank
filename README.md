# Debit-Card-HackerBank
This project was developed as part of a Frontend Developer SDE-1 coding test. The task was to build a secure, interactive Debit Card UI using React, which supports both encrypted and decrypted views of card data.

🔧 Requirements

✅ Functional Requirements
Render all debit cards from a given JSON dataset dynamically.
Display the following in encrypted form by default:
Bank Name: Visible as is.
      
Card Number: Show only the first 4 digits. Rest should be replaced by 'X', grouped with spaces every 4 digits.
    Example: 1234 XXXX XXXX XXXX

Card Holder Name: Encrypt each word as XXXX, separated by spaces.
    Example: Julius Ceaser → XXXX XXXX
Note: If There is a name of 3 letters or more then too we need to show 4 time 'X' for one word of name

Expiry: Always shown as XX/XX

CVV: Always shown as XXX

🔃 Interaction Behavior
  Click on a list-card button:
    Selects that card and displays its details section (the larger card view below).
    The details card remains encrypted initially.

  Click on the card body (not the button):
    Decrypts the currently selected card's details in the details section.
    Clicking again on the card body does not toggle — the decrypted view stays until another card is selected.

Important Note: Only the body of the card triggers decryption. The card button only changes which card is displayed; it does not decrypt/encrypt.

Each card in the list view should include a data-testid in the format:
<div className="list-card" data-testid='list-card-<index>'>
Eg: 
<div className="list-card" data-testid='list-card-0'>

Then there is a json provided which holds different card details and these cards will be N and hence the list-card will be N, i.e these must be dynamic
cards = [
  {
    "number": "1234567878653452",
    "expiry": "02/34",
    "cvv": "764",
    "name": "Julius Ceaser",
    "bank": "Bank of Rome"
  },
  ...
]

Features
  Fully dynamic rendering of any number of cards.
  Encrypted display by default.
  Decryption triggered only by clicking the card body.
  Simple and secure representation of sensitive information.
  Easy extensibility for more cards or detail sections.

Solution UI ScreenShot attached below

<img width="472" alt="Screenshot 2025-06-16 at 7 38 31 PM" src="https://github.com/user-attachments/assets/f04f1e7a-378d-4bb7-9d68-62c7b7f52b49" />
<img width="566" alt="Screenshot 2025-06-16 at 7 38 19 PM" src="https://github.com/user-attachments/assets/d7c24e1b-4340-46d1-b06d-4ad982290128" />
<img width="543" alt="Screenshot 2025-06-16 at 7 38 10 PM" src="https://github.com/user-attachments/assets/1e40f9f4-084e-46a4-bef6-1f38c220a4c7" />
