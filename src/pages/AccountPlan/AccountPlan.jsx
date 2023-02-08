import React, { useState } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import { BiRightArrow } from "react-icons/bi";

const AccountPlan = () => {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [accountPlan, setAccountPlan] = useState([
    {
      user: "gpt",
      message: `John Doe, Welcome to the AI-Bot! We understand that you are working on the customer BOEING COMPANY. Please choose one of the options below to proceed.`,
      options: [
        "1. Explore the whitespace and create Opportunities",
        "2. Create Consumption Plan based on the Pipeline",
      ],
    },
    {
      user: "me",
      message:
        "Selected Option 1 - Explore the whitespace and create Opportunities",
    },
    {
      user: "gpt",
      message: `MCEM Rooms of the House recommends the following Solution Plays to optimize the expected Consumption impact:`,
      options: [
        "1. Mitigate Compliance and Privacy Risks",
        "2. Protect and Govern Sensitive Data",
        "3. Accelerate Innovation with Low Code",
        "4. Employee Experience",
        "5. Enable Unified Data Governance",
      ],
      extralines:
        "Based on your knowledge at the Customer, do you agree with the relevance of all these recommendations? [Yes or No]",
    },
    {
      user: "me",
      message: "No",
    },
    {
      user: "gpt",
      message: `Please enter the serial number of the recommendation that you would like to question:`,
      options: [
        "1. Mitigate Compliance and Privacy Risks",
        "2. Protect and Govern Sensitive Data",
        "3. Accelerate Innovation with Low Code",
        "4. Employee Experience",
        "5. Enable Unified Data Governance",
      ],
    },
    {
      user: "me",
      message: "Selected Option# 1, Mitigate Compliance and Privacy Risks",
    },
    {
      user: "gpt",
      message:
        "Our research indicates that BOEING COMPANY has Operate with Excellence as one of the Objectives and with an associated Top Priority of IT Modernization & OptimizationEnterprise Security & Compliance. Moreover, the Usage in the related Workloads “Sec: Purview Discover and Respond” and “Sec: Purview Compliance Management” is extremely low compared to its peers. There is no active opportunity attached to this Solution Play, as well.Would you still consider this Solution Play to be not relevant? [Yes or No]",
    },
    {
      user: "me",
      message: "Yes",
    },
    {
      user: "gpt",
      message:
        "Alright! We refreshed the Top 5 Solution Play recommendations for you. Would you like to review the relevance of any other Solution Play recommendations? [Yes or No]",
      options: [
        "1. Protect and Govern Sensitive Data",
        "2. Accelerate Innovation with Low Code",
        "3. Employee Experience",
        "4. Enable Unified Data Governance",
        "4. Protect Data and Ensure Business Resilience with BCDR",
      ],
    },
    {
      user: "me",
      message: "No",
    },
    {
      user: "gpt",
      message:
        "Which one of the above Solution Plays would you choose to create an Opportunity now?",
    },
    {
      user: "me",
      message: "Protect and Govern Sensitive Data",
    },
    {
      user: "gpt",
      message: `Thank you choosing the AI-Bot to create an Opportunity. Here is the link to the DRAFT opportunity created in MSX with the following details:`,
      options: [
        "Opportunity Name:",
        "Opportunity Description:",
        "Solution Area:",
        "Solution Play:",
        "Customer Priority:",
        "...",
      ],
      extralines:
        "Would you like to review the Solution Play recommendations again?",
    },
    {
      user: "me",
      message: "No",
    },
    {
      user: "gpt",
      message:
        "Thank you choosing the AI-Bot to explore Whitespace and creating an Opportunity.",
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
          Account Plan
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {accountPlan.map((message, indexValue) => {
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

export default AccountPlan;
