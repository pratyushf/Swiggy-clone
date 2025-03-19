import { useState } from "react";

const Help = () => {
  const [helpTopic, setHelpTopic] = useState("Partner Onboarding");

  return (
    <div className="flex flex-col bg-orange-400 h-[100vh] overflow-hidden w-full p-30">
      <p className="text-white text-3xl font-bold ml-10">Help & Support</p>
      <p className="text-white text-2xl ml-10">
        Lets take a step ahead and help you better.
      </p>
      <div className="bg-white m-10 flex h-[80%] p-10 w-[95%]">
        <div className="flex flex-col p-2 bg-gray-100 w-[20%]">
          {["Partner Onboarding", "Legal", "FAQs", "Instamart Onboarding"].map(
            (topic) => (
              <button
                key={topic}
                className={`cursor-pointer px-2 py-4 m-1 rounded-2xl font-semibold transition-all ${
                  helpTopic === topic
                    ? "bg-orange-500 text-white"
                    : "bg-white hover:bg-orange-500 hover:text-white"
                }`}
                onClick={() => setHelpTopic(topic)}
              >
                {topic}
              </button>
            )
          )}
        </div>
        <div className="p-2 w-[80%]">
          <p className="p-3 font-bold text-2xl">{helpTopic}</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
