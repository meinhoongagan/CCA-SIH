// Questions.js
import React from 'react';
// import './Questions.css';

const Questions = () => {
  return (
    <div className="question">
      <p className="hfaq">FAQs: What students usually ask us?</p>
      <p className="faq">
      Career Counselling is a specialized service that needs multiple resources ranging from trained counsellors, to an updated databased and psychometric tests. We combine this all and bundle it as a service of schools of repute eager to benefit their students.
      </p>

      <details>
        <summary>What is Career Counseling & Guidance?</summary>
        <p className="ans">
        As defined by UNICEF, Career Counselling / Career Guidance is a comprehensive, right-based development approach which is designed to assist individuals in making and implementing informed educational and occupational choices, which in turn lead to their social, financial and emotional well-being.
        </p>
        <p class="ans">Career Guidance is a process by which an adolescent makes a successful transition from school to higher education and finally into the workforce. The process involves exploring different careers, knowing the different pathways to careers, opportunities available, earning levels, and the time period required. Further it involves knowing one’s strengths and interest, matchmaking one’s own potential to the world of careers and then selecting the right courses and colleges, the process to apply and finally the ways to finance his/her education.</p>
      </details>

      <details>
        <summary>Why is Career Counselling important?</summary>
        <p className="ans">
        All of us are bound to get stuck at some point in our life. It is at such self-introspecting times we become even more aware of ourselves. We discover what works for us and what doesn’t and take actions accordingly. So, when it comes to deciding about our future, should we go with our instinct or follow a common trend?
        </p>
      </details>
    </div>
  );
};

export default Questions;
