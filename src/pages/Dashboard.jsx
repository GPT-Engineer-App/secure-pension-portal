import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Complete Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Complete your profile to get the most out of our services.</p>
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