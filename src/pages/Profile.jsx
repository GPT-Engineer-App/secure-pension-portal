import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  dob: z.string().min(1, "Date of Birth is required"),
  pan: z.string().min(10, "PAN must be 10 characters").max(10, "PAN must be 10 characters"),
  pran: z.string().optional(),
  company: z.string().min(1, "Company is required"),
  employeeId: z.string().min(1, "Employee ID is required"),
  hrEmail: z.string().email("Invalid email address").optional(),
});

const companies = ["Company A", "Company B", "Company C", "Others"];

const Profile = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [showInviteHR, setShowInviteHR] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  const handleCompanyChange = (value) => {
    setSelectedCompany(value);
    setShowInviteHR(value === "Others");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("email")} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" {...register("dob")} />
          {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
        </div>
        <div>
          <Label htmlFor="pan">PAN</Label>
          <Input id="pan" {...register("pan")} />
          {errors.pan && <p className="text-red-500">{errors.pan.message}</p>}
        </div>
        <div>
          <Label htmlFor="pran">PRAN Number (if any)</Label>
          <Input id="pran" {...register("pran")} />
          {errors.pran && <p className="text-red-500">{errors.pran.message}</p>}
        </div>
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Select onValueChange={handleCompanyChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a company" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.company && <p className="text-red-500">{errors.company.message}</p>}
        </div>
        {showInviteHR && (
          <div>
            <Label htmlFor="hrEmail">HR Email</Label>
            <Input id="hrEmail" {...register("hrEmail")} />
            {errors.hrEmail && <p className="text-red-500">{errors.hrEmail.message}</p>}
          </div>
        )}
        <div>
          <Label htmlFor="employeeId">Employee ID</Label>
          <Input id="employeeId" {...register("employeeId")} />
          {errors.employeeId && <p className="text-red-500">{errors.employeeId.message}</p>}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Profile;