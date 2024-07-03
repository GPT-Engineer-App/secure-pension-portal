import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PRANGeneration = () => {
  const navigate = useNavigate();

  const handleGeneratePRAN = () => {
    // Simulate PRAN generation process
    alert("PRAN generated successfully!");
    navigate("/invest-in-nps");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Generate PRAN</h2>
      <p className="text-lg mb-4">Please follow the steps to generate your PRAN number.</p>
      <Button onClick={handleGeneratePRAN}>Generate PRAN</Button>
    </div>
  );
};

export default PRANGeneration;