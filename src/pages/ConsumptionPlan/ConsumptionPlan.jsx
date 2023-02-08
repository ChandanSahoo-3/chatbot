import React, { useState } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import { BiRightArrow } from "react-icons/bi";
import chatImg1 from "../../chat1.jpg";
import chatImg2 from "../../chat2.jpg";

const ConsumptionPlan = () => {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [comsumptionPlan, setComsumptionPlan] = useState([
    {
      user: "gpt",
      message: `John Doe, Welcome to the AI-Bot! We understand that you are working on the customer ENBRIDGE. Please choose one of the options below to proceed.`,
      options: [
        "1. Explore possible mapping of Customer Priorities and Opportunities",
        "2. Create Consumption Plan for Priority #1234",
      ],
    },
    {
      user: "me",
      message: `Selected Option 1 - Explore possible mapping of Customer Priorities and Opportunities`,
    },
    {
      user: "gpt",
      message: `AI Enabled Bot recommends the following Customer Priorities  to Opportunities mapping`,
      options: [
        "1. Apps of the Future",
        "2. Predictive Analytics - Pipeline integrity focus",
        "3. Modern Data Platform Initiatives",
        "4. The Digital Platform",
        "5. Advanced Analytics for business outcomes",
        "6. Datacenter Transformation",
        "7. Enhance Cloud Security Posture",
      ],
      extralines:
        "Based on your knowledge at the Customer, do you agree with the relevance of all these recommendations? [Yes or No]",
    },
    {
      user: "me",
      message: `No`,
    },
    {
      user: "gpt",
      message: `Please enter the serial number of the recommendation that you would like to question:`,
      options: [
        "1. Apps of the Future",
        "2. Predictive Analytics - Pipeline integrity focus",
        "3. Modern Data Platform Initiatives",
        "4. The Digital Platform",
        "5. Advanced Analytics for business outcomes",
        "6. Datacenter Transformation",
        "7. Enhance Cloud Security Posture",
      ],
    },
    {
      user: "me",
      message: `Selected Option# 1, Create Consumption Plan`,
    },
    {
      user: "gpt",
      message: `Our research contains data that might enable you to know more about your customer. Would you like to take a look?`,
    },
    {
      user: "me",
      message: `Yes`,
    },
    {
      user: "gpt",
      image: `${chatImg1}`,
      extralines: `Would you like to create a Digital Consumption Plan based on the above Data?`,
    },
    {
      user: "me",
      message: `Yes`,
    },
    {
      user: "gpt",
      message: `Thank you choosing the AI-Bot to create an Opportunity. Here is the link to the DRAFT Consumption Plan  created`,
      image: `${chatImg2}`,
      extralines: `Do you have any other questions?`,
    },
    {
      user: "me",
      message: `No`,
    },
    {
      user: "gpt",
      message: `Thank you choosing the AI-Bot`,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length > 0) {
      setIndex(index + 2);
      setInput("");
    }
  }

  function clearChat() {
    setIndex(0);
  }

  function startChat() {
    setIndex(1);
  }
  return (
    <>
      <aside className="sidemenu">
        <div className="side-menu-button" onClick={clearChat}>
          <span>+</span> New Chat
        </div>

        <div className="side-menu-button-question" id="1" onClick={startChat}>
          Comsumption Plan
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {comsumptionPlan.map((message, indexValue) => {
            return (
              <ChatMessage
                key={indexValue}
                index={index}
                indexValue={indexValue}
                message={message}
              />
            );
          })}
        </div>

        <div className="chat-input-holder">
          <div className="form">
            <input
              rows="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea"
            />
            <BiRightArrow className="sendicon" onClick={handleSubmit} />
          </div>
        </div>
        <p className="copyright">
          Only for Demo purpose and internal product! Copyright 2023.
        </p>
      </section>
    </>
  );
};

export default ConsumptionPlan;
