import { useState } from "react";
import InformationPerson from "../../Components/InformationPerson/InformationPerson";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
import ReviewsDetails from "../../Components/ReviewsDetails/ReviewsDetails";
import '../../App.css'
const Shopping = () => {
  const steps = [
    { number: 1, label: "Step One",des:'Information Person' },
    { number: 2, label: "Step Two",des:'Shopping Cart' },
    { number: 3, label: "Step Three",des:'status Order' },
    { number: 4, label: "Step Four",des:'Reviews Details' },
  ];

  const [showStep, setShowStep] = useState(0); 

  const renderStepComponent = () => {
    switch (showStep) {
      case 0:
        return <InformationPerson />;
      case 1:
        return <ShoppingCart />;
      case 2:
        return;
      case 3:
        return <div>Step Four Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        
        <div className="col-12 d-flex justify-content-between position-relative pb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setShowStep(index)}
              className="d-flex flex-column align-items-center"
              style={{ cursor: "pointer" }}
            >
              <div
                className="border px-3 py-2 rounded-circle text-white mb-1"
                style={{
                  backgroundColor: showStep === index ? "#ED4D2B" : "#999",
                  width: "40px",
                  height: "40px",
                  textAlign: "center",
                }}
              >
                {step.number}
              </div>
              <p style={{ fontSize: "12px", margin: 0 }}>{step.label}</p>
              <span className="d-none d-lg-flex" >{step.des}</span>
            
            </div>
          ))}
        </div>
      </div>

       <div className="mb-5 text-center bg-light pt-5 pb-5 rounded-2 bgCartInfo">
        <h2>{steps[showStep].label}</h2>
        <h2 className="fw-bold">{steps[showStep].des}</h2>
     </div>

      {/* الخطوط */}
      <div className="d-none d-lg-flex">
        <div
          className="position-absolute"
          style={{
            top: "140px",
            left: "265px",
            width: "300px",
            borderTop: "2px solid rgb(133, 131, 130)",
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            top: "140px",
            left: "665px",
            width: "300px",
            borderTop: "2px solid rgb(133, 131, 130)",
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            top: "140px",
            right: "250px",
            width: "300px",
            borderTop: "2px solid rgb(133, 131, 130)",
          }}
        ></div>
      </div>

      {/* المحتوى المتغير حسب الخطوة */}
      <div className="mt-4">{renderStepComponent()}</div>
    </div>
  );
};

export default Shopping;
