import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const npsInvestment = "₹1,50,000";
  const pranNumber = "1234-5678-9012";
  const retirementGoal = "₹50,00,000";
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="col-span-1 md:col-span-2">
        <Card className="bg-blue-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">NPS Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
              <Badge variant="outline" className="mb-2">NPS Investment So Far</Badge>
              <p className="text-xl font-semibold">{npsInvestment}</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Badge variant="outline" className="mb-2">PRAN Number</Badge>
              <p className="text-xl font-semibold">{pranNumber}</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Badge variant="outline" className="mb-2">Retirement Goal</Badge>
              <p className="text-xl font-semibold">{retirementGoal}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Complete Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Complete your profile to get the most out of our services.</p>
          <Button onClick={() => navigate("/profile")}>Complete Profile</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>NPS Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Check your current NPS balance and track your investments.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Invest in NPS</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Start investing in NPS to secure your future.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Make Changes to NPS Selection</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Modify your NPS selections to better suit your needs.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;