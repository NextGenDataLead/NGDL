// Client-side email handling
export async function sendEmail(formData: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    if (!apiKey) {
      console.error('Web3Forms API key is not configured');
      return { success: false, error: 'Contact form is not configured. Please set up Web3Forms API key.' };
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: apiKey,
        ...formData,
      }),
    });

    const data = await response.json();
    if (data.success) {
      return { success: true };
    }

    return { success: false, error: 'Failed to send message. Please try again.' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}