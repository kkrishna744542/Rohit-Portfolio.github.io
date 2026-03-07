# 📧 Complete Email System Setup - Step by Step

## What You'll Have

✅ **Contact Form** = Message goes to your inbox  
✅ **Enquiry Form** = Business inquiry goes to your inbox  
✅ **Auto Reply** = You reply normally from your email, sender gets response  

---

## Step 1: Create EmailJS Account (2 minutes)

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Sign up using **krishnakumar7257ind@gmail.com**
4. Verify your email
5. Login to your EmailJS dashboard

---

## Step 2: Get Your Public Key (1 minute)

1. After login, click your **Profile** (top right)
2. Go to **"Account Settings"**
3. Click **"API Keys"**
4. Copy your **Public Key** (looks like: `abc123xyz456...`)
5. Keep it ready - you'll use it in Step 5

---

## Step 3: Setup Email Service (2 minutes)

### Option A: Using Gmail (Recommended)

1. In EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect an Account"**
5. Login with **krishnakumar7257ind@gmail.com**
6. Give permission
7. You'll see your **Service ID** (looks like: `service_a1b2c3...`)
8. Copy it and keep ready for Step 5

### Option B: Test with Built-in Service

If you want to test first without Gmail:
1. Click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Email Service (smtp2go)"**
4. Click **"Create Service"**
5. Your Service ID will be shown
6. Copy it and use in Step 5

---

## Step 4: Create Email Templates (3 minutes)

### Template 1: Contact Form Responses

1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Fill in:
   - **Template Name:** `Contact Form`
   - **From Name:** `{{from_name}}`
   - **Subject Line:** `New Contact Form Message from {{from_name}}`
4. In the **Email Body**, paste this:

```
Hi Rohit,

You have received a new message!

FROM: {{from_name}}
EMAIL: {{from_email}}
PHONE: {{phone}}
SUBJECT: {{subject}}

MESSAGE:
{{message}}

---
Reply directly to {{from_email}} to respond.
```

5. Click **"Save Template"**
6. Copy the **Template ID** (looks like: `template_p9q8r...`)

### Template 2: Enquiry Form Responses

1. Click **"Create New Template"**
2. Fill in:
   - **Template Name:** `Business Enquiry`
   - **From Name:** `{{from_name}}`
   - **Subject Line:** `New Business Enquiry from {{from_name}}`
3. In the **Email Body**, paste this:

```
Hi Rohit,

You have received a new business enquiry!

CONTACT:
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

SERVICE INTERESTED: {{service}}
BUDGET: {{budget}}

PROJECT DETAILS:
{{message}}

---
Reply directly to {{from_email}} to respond.
```

4. Click **"Save Template"**
5. Copy this **Template ID** too

---

## Step 5: Update Your Code (2 minutes)

### Update File 1: index.html

1. Open **index.html** in VS Code
2. Find line 12-13 (search for `emailjs.init`)
3. Replace:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY_HERE");
   ```
   With your actual Public Key:
   ```javascript
   emailjs.init("abc123xyz456789your_actual_key");
   ```

### Update File 2: script.js (Contact Form)

1. Open **script.js** in VS Code
2. Search for `// ==========================================
    // CONTACT FORM HANDLING` (around line 151)
3. Find these lines:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID_HERE';
   const templateID = 'YOUR_TEMPLATE_ID_HERE';
   ```
4. Replace with your credentials:
   ```javascript
   const serviceID = 'service_YOUR_SERVICE_ID';
   const templateID = 'template_CONTACT_FORM_ID';
   ```

### Update File 3: script.js (Enquiry Form)

1. In **script.js**, search for `// ENQUIRY FORM HANDLING` (around line 216)
2. Find these lines:
   ```javascript
   const serviceID = 'your_service_id';
   const templateID = 'your_template_id';
   ```
3. Replace with:
   ```javascript
   const serviceID = 'service_YOUR_SERVICE_ID';
   const templateID = 'template_BUSINESS_ENQUIRY_ID';
   ```

---

## Step 6: Test It! (1 minute)

1. **Save all files** (Ctrl+S)
2. Open your website in a browser
3. Scroll to **"Contact Me"** section
4. Fill out the form:
   - Name: Test Person
   - Email: test@example.com
   - Phone: +91 9999999999
   - Subject: Test
   - Message: This is a test
5. Click **"Send Message"**
6. Check your email at **krishnakumar7257ind@gmail.com**

You should see the message!

---

## Step 7: How to Reply to Messages

### When You Receive an Email:

1. Open the email from the sender
2. Click **"Reply"** button
3. Write your response
4. Click **"Send"**
5. The sender gets your reply automatically in their inbox!

**That's it!** No need for any complicated system - just reply like normal email.

---

## Troubleshooting

### ❌ "Failed to send email"
- [ ] Check that Public Key is correct (not "YOUR_PUBLIC_KEY_HERE")
- [ ] Check Service ID is correct
- [ ] Check Template ID is correct
- [ ] Make sure Gmail is connected in EmailJS

### ❌ Email not received
- [ ] Check spam/junk folder
- [ ] Verify service ID format (should start with `service_`)
- [ ] Make sure template variables match exactly

### ❌ Template not working
- [ ] Variable names must match form field names exactly
- [ ] Don't add extra spaces around `{{variable}}`

### ✅ Can't find your credentials?
- Go to https://www.emailjs.com/
- Login to your account
- Account Settings → API Keys = Public Key
- Email Services → Your service = Service ID
- Email Templates → Your template = Template ID

---

## Files Modified

- ✅ **index.html** - Updated EmailJS initialization
- ✅ **script.js** - Added proper email sending for Contact Form
- ✅ **CONFIG_REFERENCE.md** - Quick reference guide (this folder)
- ✅ **EMAIL_SETUP_GUIDE.md** - Detailed setup guide

---

## Quick Checklist

- [ ] Created EmailJS account
- [ ] Got Public Key
- [ ] Setup Gmail service
- [ ] Created "Contact Form" template
- [ ] Created "Business Enquiry" template
- [ ] Updated Public Key in index.html
- [ ] Updated Contact Form Service/Template IDs in script.js
- [ ] Updated Enquiry Form Service/Template IDs in script.js
- [ ] Tested contact form
- [ ] Received test email
- [ ] Successfully replied to test email

---

## Need Help?

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **YouTube Search**: "EmailJS contact form setup"
- **Common Issues**: Check TROUBLESHOOTING section above

---

## You're All Set! 🎉

Your website now has a fully functional email system!
- Visitors can contact you
- You get their messages
- You reply from Gmail
- They get your response

**Let me know if you have any questions!**
