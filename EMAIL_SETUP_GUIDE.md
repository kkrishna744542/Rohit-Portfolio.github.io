# Email Contact Form Setup Guide

## Quick Setup Steps (5 minutes)

### Step 1: Create Free EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up Free"
3. Sign up with your email (krishnakumar7257ind@gmail.com)
4. Verify your email

### Step 2: Get Your Credentials

#### Get Public Key:
1. After login, go to **Account Settings** (top right)
2. Copy your **Public Key** from the API Keys section

#### Setup Email Service:
1. Go to **Email Services** (left sidebar)
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Click **"Connect an Account"**
5. Login with krishnakumar7257ind@gmail.com (or your email)
6. After connecting, you'll get the **Service ID**
7. Copy the Service ID

#### Create Email Template:
1. Go to **Email Templates** (left sidebar)
2. Click **"Create New Template"**
3. Name: **"Contact Form"**
4. From Name: `{{from_name}}`
5. Subject: `New Message from {{from_name}}`
6. Email Body Template:
```
Hi Rohit,

You have a new message from {{from_name}} ({{from_email}})

Message:
{{message}}

Subject: {{subject}}

Phone: {{phone}}

Best regards,
Contact Form
```
7. Click **"Save"** and copy the **Template ID**

### Step 3: Update Your Code

Replace these values in `index.html` (around line 14):

```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```

Replace these values in `script.js` (around line 216 and 152):

```javascript
const serviceID = 'YOUR_SERVICE_ID_HERE';
const templateID = 'YOUR_TEMPLATE_ID_HERE';
```

### Step 4: Test

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email at krishnakumar7257ind@gmail.com
4. You should receive the message!

### Step 5: Reply to Messages

To reply to senders:
1. Compose a new email in Gmail
2. Send it normally from krishnakumar7257ind@gmail.com to the sender's email
3. That's it! The sender gets your reply.

---

## Need Help?

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **YouTube Tutorial**: Search "EmailJS contact form setup"
- **Test Service**: Before adding real Gmail, test with EmailJS's test service

## Testing Without Gmail (For Development)

You can test using EmailJS's built-in test email service:

1. In Email Services, click **"Add New Service"**
2. Select **"Email Service (smtp2go)"**
3. Don't need to connect anything - it's already configured!
4. Use this Service ID in your code to test
5. Emails will appear in your EmailJS dashboard

---

**Once you've done these steps, your contact form will be fully functional!** 🎉
