// app/components/PayWithJazzCash.jsx
'use client';
import { useState } from 'react';

export default function PayWithJazzCash() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch('/api/jazzcash', {
      method: 'POST',
      body: JSON.stringify({ amount: 100 }), // Rs. 100
      headers: { 'Content-Type': 'application/json' },
    });

    const html = await res.text();
    const newWindow = window.open('', '_self');
    newWindow.document.write(html);
    newWindow.document.close();
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg"
    >
      {loading ? 'Processing...' : 'Pay with JazzCash'}
    </button>
  );
}
