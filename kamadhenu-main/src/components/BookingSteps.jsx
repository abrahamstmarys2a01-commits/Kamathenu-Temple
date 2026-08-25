import React from 'react';
import { Calendar, Clock, FileText, CreditCard, Landmark } from 'lucide-react';

const BookingSteps = () => {
  const steps = [
    { 
      num: "1", 
      title: "Choose Service",
      icon: <Calendar size={28} strokeWidth={1.5} />,
      desc: "Select the Pooja or Yagam you wish to perform."
    },
    { 
      num: "2", 
      title: "Select Date & Time",
      icon: <Clock size={28} strokeWidth={1.5} />,
      desc: "Pick a suitable date and time for your Pooja."
    },
    { 
      num: "3", 
      title: "Provide Details",
      icon: <FileText size={28} strokeWidth={1.5} />,
      desc: "Fill in your name, gotra, nakshatra and other required details."
    },
    { 
      num: "4", 
      title: "Make Payment",
      icon: <CreditCard size={28} strokeWidth={1.5} />,
      desc: "Complete the payment securely through our gateway."
    },
    { 
      num: "5", 
      title: "Pooja Will Be Performed",
      icon: <Landmark size={28} strokeWidth={1.5} />,
      desc: "Our priests will perform the ritual and blessings will be for you and your family."
    }
  ];

  return (
    <section className="section booking-steps text-center">
      <div className="container">
        <span className="section-subtitle section-subtitle-decorated">❖ HOW IT WORKS ❖</span>
        <h2 className="section-title">Simple Steps to Book Your Pooja / Yagam</h2>
        
        <div className="steps-container animate-fade-up">
          {steps.map((step, index) => (
            <div className="step-item" key={index}>
              <div className="step-icon-wrapper">{step.icon}</div>
              <h4 className="step-title">{step.num}. {step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
