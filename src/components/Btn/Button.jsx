import { useState } from "react";
import rocket from "./rocket.svg";
import smoke from "./smoke.svg";
import "./styles.css";
import CVFileEN from '../../assets/Luis_Alberto_Zacarias_Daniel_CV_EN.pdf';
import CVFileES from '../../assets/Luis_Alberto_Zacarias_Daniel_CV_ES.pdf';

const Button = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = async (lang) => {
    if (isButtonDisabled) return;
    setIsLaunching(true);
    setIsButtonDisabled(true);
    setIsMenuOpen(false);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const file = lang === 'es' ? CVFileES : CVFileEN;
    const name = lang === 'es' ? 'Luis_Alberto_CV_ES.pdf' : 'Luis_Alberto_CV_EN.pdf';

    const link = document.createElement('a');
    link.href = file;
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsLaunching(false);
    setIsButtonDisabled(false);
  };

  return (
    <div className="relative flex justify-center">
      <button
        disabled={isButtonDisabled}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`bg-color hover:bg-blue-600 w-40 flex flex-col items-center justify-center py-2 rounded-md relative transition-all ${isLaunching ? 'launching' : ''}`}
      >
        <img className="rocket w-5 h-5 mb-1" src={rocket} alt="Rocket" />
        <span className="text-sm text-center text-white">Download CV</span>
        <img className="smoke w-5 h-5 mt-1" src={smoke} alt="Smoke" />
      </button>

      {/* Dropdown */}
      {isMenuOpen && (
        <div className="absolute mt-2 bg-[#1f1f1f] text-white rounded-lg shadow-lg w-40 border border-gray-700 animate-fadeIn">
          <button
            onClick={() => handleDownload('es')}
            className="block w-full text-left px-4 py-2 hover:bg-blue-600 rounded-t-lg transition-colors"
          >
            Download CV (ES)
          </button>
          <button
            onClick={() => handleDownload('en')}
            className="block w-full text-left px-4 py-2 hover:bg-blue-600 rounded-b-lg transition-colors"
          >
            Download CV (EN)
          </button>
        </div>
      )}
    </div>
  );
};


export default Button;
