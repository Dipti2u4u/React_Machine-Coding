import { useState, useRef, useEffect } from "react";
import "./App.css"

function CopyClipboard() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const timeoutRef = useRef(null);

  async function handleCopy(value) {
    if (!value.trim()) {
      setError("Type some values to copy");
      setSuccess("");
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setSuccess("Copied!");
      setError("");

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        // ✅ ensure React re-renders properly in tests
        setSuccess("");
      }, 2000);
    } catch (err) {
      setError("Failed to copy",err);
      setSuccess("");
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button
            onClick={() => handleCopy(text)}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>

          {error && (
            <p className="errorMessage" data-testid="error-message">
              {error}
            </p>
          )}
          {success && (
            <p className="message" data-testid="copied-message">
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
