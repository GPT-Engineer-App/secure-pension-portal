import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  income: z.number().min(1, "Income is required"),
  expense: z.number().min(1, "Expense is required"),
  question1: z.string().min(1, "Answer is required"),
  question2: z.string().min(1, "Answer is required"),
  question3: z.string().min(1, "Answer is required"),
  question4: z.string().min(1, "Answer is required"),
  question5: z.string().min(1, "Answer is required"),
});

const questions = [
  "How would you describe your investment knowledge?",
  "What is your investment horizon?",
  "How do you react to market volatility?",
  "What is your primary investment goal?",
  "How much risk are you willing to take?",
];

const options = [
  "Very Low",
  "Low",
  "Moderate",
  "High",
  "Very High",
];

const RiskProfiling = () => {
  const [suggestions, setSuggestions] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const pensionFundManager = "HDFC Pension Fund";
    const assetAllocation = {
      equity: "50%",
      debt: "30%",
      governmentBonds: "15%",
      alternatives: "5%",
    };
    const suggestedInvestment = "₹10,000 per month";

    setSuggestions({
      pensionFundManager,
      assetAllocation,
      suggestedInvestment,
    });
  };

  const handleAccept = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {!suggestions ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="income">Current Income Level</Label>
            <Input id="income" type="number" {...register("income")} />
            {errors.income && <p className="text-red-500">{errors.income.message}</p>}
          </div>
          <div>
            <Label htmlFor="expense">Current Expense Level</Label>
            <Input id="expense" type="number" {...register("expense")} />
            {errors.expense && <p className="text-red-500">{errors.expense.message}</p>}
          </div>
          {questions.map((question, index) => (
            <div key={index}>
              <Label htmlFor={`question${index + 1}`}>{question}</Label>
              <Select {...register(`question${index + 1}`)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option, idx) => (
                    <SelectItem key={idx} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors[`question${index + 1}`] && <p className="text-red-500">{errors[`question${index + 1}`].message}</p>}
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </form>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Suggested Plan</h2>
          <div>
            <Label>Pension Fund Manager</Label>
            <p>{suggestions.pensionFundManager}</p>
          </div>
          <div>
            <Label>Asset Allocation</Label>
            <p>Equity: {suggestions.assetAllocation.equity}</p>
            <p>Debt: {suggestions.assetAllocation.debt}</p>
            <p>Government Bonds: {suggestions.assetAllocation.governmentBonds}</p>
            <p>Alternatives: {suggestions.assetAllocation.alternatives}</p>
          </div>
          <div>
            <Label>Suggested NPS Investment per Month</Label>
            <p>{suggestions.suggestedInvestment}</p>
          </div>
          <Button onClick={handleAccept}>Accept</Button>
          <Button variant="outline" onClick={() => setSuggestions(null)}>Edit</Button>
        </div>
      )}
    </div>
  );
};

export default RiskProfiling;