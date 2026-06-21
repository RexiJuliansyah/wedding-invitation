import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitationData } from "../data/invitationData";
import chipImage from "../assets/images/chip-atm.png";
import bcaLogo from "../assets/images/BCA_logo.png";
import bsiLogo from "../assets/images/BSI_logo.png";

// Map bank names to logo imports
const bankLogos = {
  BCA: bcaLogo,
  BSI: bsiLogo,
};

const GiftSection = () => {
  const { gift, meta } = invitationData;
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleOpenGift = () => setIsOpen(true);
    window.addEventListener("openGift", handleOpenGift);
    return () => window.removeEventListener("openGift", handleOpenGift);
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setToastMessage(`Nomor ${label} berhasil disalin!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      })
      .catch(() => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setToastMessage(`Nomor ${label} berhasil disalin!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="gift-section" id="gift">
      <div className="relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="gift-title"
        >
          Amplop Digital
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="gift-text"
        >
          {meta.giftText}
        </motion.p>

        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="btn-outline-white"
          onClick={() => setIsOpen(!isOpen)}
          id="btn-gift-toggle"
          style={{ marginBottom: "24px" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
          Klik Disini
        </motion.button>

        {/* Collapsible bank cards */}
        <div
          className={`gift-cards-wrapper ${isOpen ? "gift-cards-wrapper--open" : ""}`}
        >
          {gift.banks.map((bank, index) => (
            <div className="gift-bank-card" key={bank.name}>
              {/* Real ATM chip image */}
              <img src={chipImage} alt="Chip" className="gift-bank-chip-img" />

              {/* Real bank logo or text fallback */}
              {bankLogos[bank.name] ? (
                <img
                  src={bankLogos[bank.name]}
                  alt={bank.name}
                  className="gift-bank-logo"
                />
              ) : (
                <div className="gift-bank-logo flex items-center h-full">
                  <span className="text-xl font-bold italic text-white/90">
                    {bank.name}
                  </span>
                </div>
              )}

              {/* Account number */}
              <p className="gift-bank-number">{bank.accountNumber}</p>

              {/* Account holder */}
              <p className="gift-bank-holder">{bank.accountHolder}</p>

              {/* Copy button */}
              <button
                className="btn-copy"
                onClick={() => handleCopy(bank.accountNumber, bank.name)}
                id={`btn-copy-${bank.name.toLowerCase()}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </button>
            </div>
          ))}

          {/* Gift address card */}
          {/* <div className="gift-address-card">
            <h4>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '16px', height: '16px', display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}
              >
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              Kirim Hadiah
            </h4>
            <p>{gift.address.name}</p>
            <p style={{ whiteSpace: 'pre-line' }}>{gift.address.detail}</p>
            <button
              className="btn-copy"
              onClick={() => handleCopy(gift.address.detail, 'Alamat')}
              style={{ marginTop: '12px' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy Alamat
            </button>
          </div> */}
        </div>
      </div>

      {/* Toast notification */}
      <div className={`toast ${showToast ? "toast--visible" : ""}`}>
        ✅ {toastMessage}
      </div>
    </section>
  );
};

export default GiftSection;
