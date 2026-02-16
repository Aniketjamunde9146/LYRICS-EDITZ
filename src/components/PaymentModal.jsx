import React, { useState } from 'react';

export default function PaymentModal({ plan, onClose }) {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    fullName: '',
    email: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length >= 2) {
      return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2, 4)}`;
    }
    return cleanValue;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setPaymentSuccess(true);

    setTimeout(() => {
      onClose();
      setPaymentSuccess(false);
      setCardDetails({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        fullName: '',
        email: ''
      });
    }, 2000);
  };

  if (!plan) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content payment-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {!paymentSuccess ? (
          <>
            {/* Header */}
            <div className="modal-header">
              <h2>Complete Payment</h2>
              <p>Secure payment for {plan.name}</p>
            </div>

            {/* Plan Summary */}
            <div className="payment-summary">
              <div className="summary-row">
                <span>Plan:</span>
                <strong>{plan.name}</strong>
              </div>
              <div className="summary-row">
                <span>Price:</span>
                <strong className="price-highlight">${plan.price}</strong>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total:</span>
                <strong>${plan.price}</strong>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handlePayment} className="payment-form">
              {/* Full Name */}
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={cardDetails.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={cardDetails.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Card Number */}
              <div className="form-group">
                <label>Card Number</label>
                <div className="card-input-wrapper">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formatCardNumber(cardDetails.cardNumber)}
                    onChange={(e) => setCardDetails(prev => ({
                      ...prev,
                      cardNumber: e.target.value.replace(/\s/g, '')
                    }))}
                    placeholder="4242 4242 4242 4242"
                    maxLength="19"
                    required
                  />
                  <span className="card-icon">💳</span>
                </div>
              </div>

              {/* Expiry & CVV */}
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formatExpiryDate(cardDetails.expiryDate)}
                    onChange={(e) => setCardDetails(prev => ({
                      ...prev,
                      expiryDate: e.target.value
                    }))}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    required
                  />
                </div>
              </div>

              {/* Security Badge */}
              <div className="security-badge">
                <span>🔒</span>
                <p>Your payment is encrypted and secure</p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary btn-large payment-btn"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span>Pay ${plan.price}</span>
                    <span className="btn-icon">→</span>
                  </>
                )}
              </button>

              {/* Test Card Info */}
              <p className="test-card-info">
                Test Card: 4242 4242 4242 4242 • Any future date • Any CVC
              </p>
            </form>
          </>
        ) : (
          <div className="payment-success">
            <div className="success-icon">✓</div>
            <h2>Payment Successful!</h2>
            <p>Thank you for your purchase</p>
            <p className="success-subtitle">Your {plan.name} plan is now active</p>
          </div>
        )}
      </div>
    </div>
  );
}