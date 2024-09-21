import React from 'react';

function FAQ() {
  return (
    <div className="question">
      <p className="hfaq">FAQs: What students usually ask us?</p>
      <p className="faq">Career Counselling is a specialized service that needs multiple resources ranging from trained counsellors, to an updated database and psychometric tests. We combine this all and bundle it as a service for schools of repute eager to benefit their students.</p>

      <details>
        <summary>What is Career Counseling & Guidance?</summary>
        <p className="ans">Career Guidance is a comprehensive, right-based development approach that assists individuals in making informed educational and occupational choices, leading to their social, financial, and emotional well-being.</p>
      </details>

      <details>
        <summary>Why is Career Counselling important?</summary>
        <p className="ans">All of us are bound to get stuck at some point in our life. It is at such self-introspective times that we become more aware of ourselves and take actions accordingly. So, when it comes to deciding about our future, should we follow a trend or discover what works best for us?</p>
      </details>
    </div>
  );
}

export default FAQ;
