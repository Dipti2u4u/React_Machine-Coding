import OTPInput from "./OTPInput";

export default function App() {
  const otplength = 6;
  return (
    <div className="App">
      <h1>Enter OTP</h1>
      <OTPInput otplength={otplength} />
    </div>
  );
}

