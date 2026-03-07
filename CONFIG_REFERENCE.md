# Quick Configuration Reference

## Files to Update with Your EmailJS Credentials

### 1. Update index.html (Line 12)
Find this line:
```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```

Replace with your actual Public Key:
```javascript
emailjs.init("abc123xyz456789");
```

---

### 2. Update script.js (Line ~152 - Contact Form)
Find these lines:
```javascript
const serviceID = 'YOUR_SERVICE_ID_HERE';
const templateID = 'YOUR_TEMPLATE_ID_HERE';
```

Replace with your values:
```javascript
const serviceID = 'service_a1b2c3d4e5f6g7';
const templateID = 'template_p9q8r7s6t5u4v3';
```

---

### 3. Update script.js (Line ~216 - Enquiry Form)
Find these lines:
```javascript
const serviceID = 'your_service_id';
const templateID = 'your_template_id';
```

Replace with your values:
```javascript
const serviceID = 'service_a1b2c3d4e5f6g7';
const templateID = 'template_p9q8r7s6t5u4v3';
```

---

## Your Email
Both forms will send messages to: **krishnakumar7257ind@gmail.com**

## Email Templates Required

### Template 1: "Contact Form" (for contactForm)
**Variables needed:**
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{subject}}`
- `{{message}}`

### Template 2: "Business Enquiry" (for enquiryForm)
**Variables needed:**
- `{{from_name}}`
- `{{from_email}}`
- `{{company}}`
- `{{phone}}`
- `{{service}}`
- `{{budget}}`
- `{{message}}`

---

## How It Works

### When Someone Sends a Message:
1. They fill out the form (contact or enquiry)
2. They click "Send Message" or "Submit Enquiry"
3. Email is sent directly to krishnakumar7257ind@gmail.com
4. A success message shows on the webpage

### When You Want to Reply:
1. Check the email you received
2. Click "Reply" in your Gmail inbox
3. Compose your response
4. Send normally
5. The sender gets your reply automatically

---

## Troubleshooting

**"Error sending email"?**
- Check that you've replaced all placeholder values
- Verify Service ID and Template ID are correct
- Check that Gmail account is properly connected in EmailJS
- Make sure the email template variables match your form field names

**Not receiving emails?**
- Check spam/trash folder
- Verify your email address is correct in the code
- Check EmailJS dashboard for failed email attempts

---

**See EMAIL_SETUP_GUIDE.md for detailed setup instructions!**
