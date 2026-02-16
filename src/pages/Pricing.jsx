import React, { useState } from 'react';
import '../App.css';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const plans = [
    {
      id: 1,
      name: 'Starter',
      icon: '🎥',
      description: 'Perfect for content creators just getting started',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Up to 5 videos per month',
        'Up to 2 minutes per video',
        'Basic transitions & effects',
        'Standard quality export (1080p)',
        '5 revision rounds',
        'Email support',
        'Free stock music library',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      id: 2,
      name: 'Professional',
      icon: '⭐',
      description: 'Ideal for growing businesses and serious creators',
      monthlyPrice: 129,
      yearlyPrice: 1290,
      features: [
        'Unlimited videos per month',
        'Up to 10 minutes per video',
        'Advanced transitions & effects',
        '4K quality export',
        'Unlimited revision rounds',
        'Priority email & chat support',
        'Custom music licensing',
        'Motion graphics included',
        'Color grading & LUT presets',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      icon: '👑',
      description: 'White-label solutions for agencies and large teams',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Unlimited everything',
        'Dedicated account manager',
        'Custom integrations',
        '8K quality export',
        'Priority 24/7 support',
        'Team collaboration tools',
        'Advanced analytics',
        'Custom branding options',
        'Batch processing',
        'API access',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      id: 1,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel anytime with no hidden fees. Your access continues until the end of your billing cycle.',
    },
    {
      id: 2,
      question: 'Do you offer a free trial?',
      answer: 'Absolutely! All plans come with a 7-day free trial. No credit card required to start.',
    },
    {
      id: 3,
      question: 'What video formats do you support?',
      answer: 'We support MP4, MOV, AVI, MKV, WebM, and more. You can export in any format you need.',
    },
    {
      id: 4,
      question: 'Is there a discount for annual billing?',
      answer: 'Yes! Choose annual billing and save 20% compared to monthly pricing.',
    },
    {
      id: 5,
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Of course! Change your plan anytime. We\'ll prorate any charges or credits.',
    },
    {
      id: 6,
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service.',
    },
  ];

  const getPrice = (monthlyPrice, yearlyPrice) => {
    if (billingCycle === 'monthly') return monthlyPrice;
    return yearlyPrice;
  };

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">
            Choose the perfect plan for your video editing needs. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Annual Billing
              <span className="save-badge">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{
                animation: `scaleIn 0.6s ease-out ${index * 0.15}s backwards`,
              }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div className="plan-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{getPrice(plan.monthlyPrice, plan.yearlyPrice)}</span>
                <span className="period">
                  {billingCycle === 'monthly' ? '/month' : '/year'}
                </span>
              </div>

              {billingCycle === 'yearly' && (
                <p className="monthly-equivalent">
                  ${Math.round((getPrice(plan.monthlyPrice, plan.yearlyPrice) / 12) * 100) / 100}/month billed annually
                </p>
              )}

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-glass'} btn-large plan-cta`}>
                <span>{plan.cta}</span>
                <span className="btn-icon">→</span>
              </button>

              <div className="features-divider"></div>

              <div className="plan-features">
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature">
                    <svg className="feature-icon" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
              >
                <div className="faq-header">
                  <h4 className="faq-question">{faq.question}</h4>
                  <span className="faq-icon">+</span>
                </div>
                {expandedFaq === faq.id && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pricing-cta">
          <h3>Ready to start editing?</h3>
          <p>Join thousands of creators and businesses transforming their video content</p>
          <button className="btn btn-primary btn-large">
            <span>Start Your Free Trial</span>
            <span className="btn-icon">🚀</span>
          </button>
        </div>
      </div>
    </section>
  );
}