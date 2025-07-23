export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1F1F1F] text-white px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Payment Successful</h1>
        <p className="text-lg">Thank you! Your transaction was processed successfully.</p>
        <p className="mt-2">We’ve received your payment and your order is being prepared.</p>
      </div>
    </div>
  );
}
