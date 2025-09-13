import { useState } from "react";
import rocket from "./rocket.svg";
import smoke from "./smoke.svg";
import "./styles.css";
import CVFile from '../../assets/Luis_Alberto_Zacarias_Daniel_CV.pdf';

const Button = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = async () => {
    if (!isButtonDisabled) {
      setIsLaunching(true);
      setIsButtonDisabled(true);

      await new Promise(resolve => setTimeout(resolve, 3000));

      setIsLaunching(false);
      setIsButtonDisabled(false);

      downloadCV();
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CVFile;
    link.setAttribute('download', 'Luis_Alberto_Zacarias_Daniel.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }     


  return (
    <div className="flex justify-center">
    <button 
      disabled={isButtonDisabled}
      onClick={handleClick} className={` bg-color hover:bg-blue-600 w-40 ${isLaunching ? 'launching' : ''}`}>
      <img className="rocket" src={rocket} alt="Rocket" />
      <span className=" text-sm text-center w-full">Download CV</span>
      <img className="smoke" src={smoke} alt="Smoke" />
    </button>
    </div>

  );
};

export default Button;
