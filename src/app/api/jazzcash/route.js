// app/api/jazzcash/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req) {
  const { amount } = await req.json();

  const merchantID = 'MC10000';
  const password = '123456';
  const integritySalt = 'YourIntegritySaltHere'; // Replace with your value
    const returnURL = 'http://localhost:3000/payment-success'; // Where JazzCash redirects after payment

  const txnRef = `T${Date.now()}`;
  const txnDateTime = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
  const expiryDateTime = new Date(Date.now() + 60 * 60 * 1000).toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);

  const postData = {
    pp_Version: '1.1',
    pp_TxnType: 'MWALLET',
    pp_Language: 'EN',
    pp_MerchantID: merchantID,
    pp_SubMerchantID: '',
    pp_Password: password,
    pp_BankID: '',
    pp_ProductID: 'RECHARGE',
    pp_TxnRefNo: txnRef,
    pp_Amount: `${amount}00`, // Rs. 100 = 10000
    pp_TxnCurrency: 'PKR',
    pp_TxnDateTime: txnDateTime,
    pp_BillReference: 'billRef',
    pp_Description: 'Payment Description',
    pp_ReturnURL: returnURL,
    pp_SecureHash: '',
    ppmpf_1: 'custom1',
    ppmpf_2: 'custom2',
  };

  // Create secure hash
  const sorted = Object.entries(postData)
    .filter(([k, v]) => v !== '' && k !== 'pp_SecureHash')
    .sort(([a], [b]) => a.localeCompare(b));

  const concatString = integritySalt + '&' + sorted.map(([k, v]) => `${v}`).join('&');
  const secureHash = crypto.createHmac('sha256', integritySalt).update(concatString).digest('hex').toUpperCase();

  postData.pp_SecureHash = secureHash;

  const form = `
    <form id="jazzcash-form" action="https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/" method="post">
      ${Object.entries(postData).map(([key, value]) => `<input type="hidden" name="${key}" value="${value}" />`).join('\n')}
    </form>
    <script>document.getElementById("jazzcash-form").submit();</script>
  `;

  return new NextResponse(form, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
