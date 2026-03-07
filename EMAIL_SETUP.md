# Email Setup Instructions for Enquiry Form

## How to Set Up Email Notifications

Your enquiry form is now configured to send emails using EmailJS. Follow these steps to make it work:

### Step 1: Sign Up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Verify your email

### Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and give permission
5. Note down the **Service ID** (something like "service_xxxxx")

### Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:**
New Business Enquiry from {{from_name}}

**To Email:**
{{to_email}}

**From Name:**
Portfolio Website

**Reply To:**
{{from_email}}

**Template Body:**
```
Hi Rohit,

You have received a new business enquiry:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service: {{service}}
Budget: {{budget}}

Message:
{{message}}

Best regards,
Portfolio Website
```

4. Save the template and note down the **Template ID** (something like "template_xxxxx")

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (something like "xxxxxxxxxxxxxx")

### Step 5: Update Your Code
1. Open `script.js`
2. Replace these placeholder values:
   - `your_service_id` → Your Service ID
   - `your_template_id` → Your Template ID
   - `your_public_key` → Your Public Key

### Step 6: Test the Form
1. Open your website
2. Fill out the enquiry form
3. Submit it
4. Check your email for the enquiry details

## Troubleshooting

- **Emails not sending?** Check your browser console for error messages
- **Service ID not working?** Make sure you copied the correct ID from EmailJS dashboard
- **Template not found?** Verify the Template ID is correct
- **Still not working?** Check that your email service is properly connected in EmailJS

## Security Note
Your Public Key is safe to use in client-side code. EmailJS handles the security server-side.

## Free Tier Limits
EmailJS free tier allows 200 emails per month, which should be plenty for a portfolio site.