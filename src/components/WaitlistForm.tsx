import React, { useEffect } from "react";

interface WaitlistFormProps {
  buttonText?: string;
  placeholderText?: string;
  className?: string;
}

declare global {
  interface Window {
    ml?: any;
  }
}

export default function WaitlistForm({ className = "" }: WaitlistFormProps) {
  useEffect(() => {
    // 1. Check if the script has already been injected to avoid duplication
    const scriptId = "mailerlite-universal-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      // 2. Define the global ml function queue
      window.ml = window.ml || function () {
        (window.ml.q = window.ml.q || []).push(arguments);
      };

      // 3. Inject the Universal MailerLite Script
      script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://assets.mailerlite.com/js/universal.js";
      document.head.appendChild(script);

      // 4. Initialize MailerLite Account
      window.ml("account", "2432538");
    } else {
      // 5. If script already exists, prompt MailerLite to scan the DOM for the new form
      if (typeof window.ml === "function") {
        try {
          window.ml("webforms", "show");
        } catch (error) {
          console.warn("MailerLite webforms show failed:", error);
        }
      }
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div className="ml-embedded" data-form="JlOvt5"></div>
    </div>
  );
}
