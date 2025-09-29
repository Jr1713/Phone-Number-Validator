# 📱 Philippine Phone Number Validator

A simple responsive web app that validates **Philippine mobile phone numbers**.  
Built using **HTML, CSS, and JavaScript**, and designed to work smoothly on both desktop and mobile devices.  

---

## 🚀 Features

- ✅ Validates Philippine phone numbers in both **local** and **international** formats  
- ✅ Supports **09XXXXXXXXX** and **+639XXXXXXXXX** patterns  
- ✅ Responsive design (works on desktop and mobile)  
- ✅ User-friendly interface with clear results (`Valid` / `Invalid`)  
- ✅ "Clear" button to reset input and results  

---

## 🔢 Valid Formats

✔ Valid examples:
- `09171234567`  
- `09981234567`  
- `+639171234567`  
- `+639981234567`  

❌ Invalid examples:
- `08123456789` (wrong prefix)  
- `639171234567` (missing `+`)  
- `0917-123-456` (too short)  
- `123456` (not a PH number)  

---

## 🛠 Tech Stack

- **HTML5** → structure  
- **CSS3 (with media queries)** → styling and responsiveness  
- **Vanilla JavaScript** → validation logic  

---

## 📐 Regex Used

```regex
/^(?:\+63|0)9\d{9}$/
(?:\+63|0) → Accepts either +63 or 0 as prefix

9 → Ensures the number starts with 9 (Philippine mobile standard)

\d{9} → Requires exactly 9 more digits after the prefix

💻 How to Use
Clone or download this project.

Open the index.html file in your browser (or host on CodePen).

Enter a Philippine phone number in the input field.

Click Check to validate or Clear to reset.

📱 Responsiveness
On desktop, the app is centered with a max-width of 400px.

On mobile, the layout adapts:

Input and buttons resize

Buttons stack neatly if space is limited

🎯 Future Improvements
 Allow dashes and spaces (e.g., 0917-123-4567 or +63 917 123 4567)

 Add support for landline validation (02, 032, etc.)

 Add copy-to-clipboard feature for valid numbers
