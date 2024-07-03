import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const InvestInNPS = () => {
  const [hasPRAN, setHasPRAN] = useState(null);
  const [pranNumber, setPranNumber] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const navigate = useNavigate();

  const handlePRANCheck = (value) => {
    setHasPRAN(value);
    if (value === "no") {
      navigate("/pran-generation");
    }
  };

  const handleInvestmentTypeChange = (value) => {
    setInvestmentType(value);
  };

  const handleSubmit = () => {
    if (investmentType === "corporate" && (!companyName || !employeeId)) {
      alert("Please provide company name and employee ID.");
      return;
    }
    navigate("/risk-profiling");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {hasPRAN === null && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Do you have a PRAN number?</h2>
          <Button onClick={() => handlePRANCheck("yes")}>Yes</Button>
          <Button onClick={() => handlePRANCheck("no")}>No</Button>
        </div>
      )}
      {hasPRAN === "yes" && (
        <div className="space-y-4">
          <Label htmlFor="pranNumber">PRAN Number</Label>
          <Input id="pranNumber" value={pranNumber} onChange={(e) => setPranNumber(e.target.value)} />
          <Label htmlFor="investmentType">Investment Type</Label>
          <Select onValueChange={handleInvestmentTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select investment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporate">Corporate NPS</SelectItem>
              <SelectItem value="individual">Individual NPS</SelectItem>
            </SelectContent>
          </Select>
          {investmentType === "corporate" && (
            <div className="space-y-4">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input id="employeeId" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
            </div>
          )}
          <Button onClick={handleSubmit}>Proceed</Button>
        </div>
      )}
    </div>
  );
};

export default InvestInNPS;