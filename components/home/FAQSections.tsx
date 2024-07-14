"use client"
import React, { useState, useRef } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="mb-4">
      <button
      style={{
        border:'1px solid gray'
      }}
        className={`w-full text-left p-4 rounded-lg ${
          isOpen ? 'bg-gray-800' : 'bg-gray-900'
        } hover:bg-gray-800 transition-colors duration-300 ease-in-out`}
        onClick={onClick}
      >
        <h3 className="text-xl text-[#e8e6e3] font-semibold">{question}</h3>
      <div 
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out'
        }}
        className="bg-gray-800 rounded-b-lg"
      >
        <p className="p-4 text-gray-400">{answer}</p>
      </div>
      </button>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      question: "How do firewalls enhance security?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et vulputate leo. Nunc tellus enim, rutrum et justo convallis, aliquet vehicula dolor. Donec dapibus nec ante nec commodo."
    },
    {
      question: "How can I protect my mobile devices?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et vulputate leo. Nunc tellus enim, rutrum et justo convallis, aliquet vehicula dolor."
    },
    {
      question: "How can I identify a secure website?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et vulputate leo. Nunc tellus enim, rutrum et justo convallis, aliquet vehicula dolor."
    }
  ];

  return (
    <div className="bg-gray-900 text-white p-8 pt-12 pb-12">
      <div className="flex flex-col md:flex-row gap-8 w-[95%] m-auto">
        <div className="w-full md:w-1/3 p-6 flex items-end">
          <div className="bg-gray-800 rounded-lg p-6 w-[90%]">
            <h3 className="text-2xl text-center text-[#e8e6e3] font-semibold mb-4">Have any Question?</h3>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-900 text-white p-3 rounded-lg mb-4 border-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-900 text-white p-3 rounded-lg mb-4 border-none"
              />
              <textarea
                placeholder="Question"
                className="w-full bg-gray-900 text-white p-3 rounded-lg mb-4 border-none"
                rows={6}
              ></textarea>
              <button className=" glow-button text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                Send a Question
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-2/3">
      <h2 className="flex items-center gap-2 text-lg uppercase tracking-wider mb-4 glow-text"><div className='straightLine'></div>HELP & SUPPORT</h2>
      <h1 className="text-5xl font-bold mb-8 text-[#E0FFFF]">Frequently Asked Questions.</h1>
      <p className="text-gray-400 mb-12">
        Lorem ipsum dolor sit amet consectetur adipiscing elit nunc venenatis ac dia nec commodo etiam mollis nisl ac vehicula auctor erat nisi sollicitudin nisi non ultrices ante ante in libero cras commodo risus.
      </p>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;