import React, { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    // Create and append the script tag for the chatbot configuration
    const scriptConfig = document.createElement("script");
    scriptConfig.type = "text/javascript";
    scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "wO8JNrhsGN76qbrVJpLrL",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(scriptConfig);

    // Create and append the script tag for the chatbot embed
    const scriptEmbed = document.createElement("script");
    scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
    scriptEmbed.type = "text/javascript";
    scriptEmbed.defer = true;
    document.body.appendChild(scriptEmbed);

    // Cleanup function to remove the script tags when the component unmounts
    return () => {
      document.body.removeChild(scriptConfig);
      document.body.removeChild(scriptEmbed);
    };
  }, []);

  return (
    <div className="chat">
      {/* <p>Loading chatbot...</p> */}
    </div>
  );
};

export default Chat;
