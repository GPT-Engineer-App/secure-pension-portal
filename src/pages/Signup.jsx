import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice"; // Import the setAuth action

const schema = z.object({
  mobile: z.string().min(10, "Mobile number must be 10 digits").max(10, "Mobile number must be 10 digits"),
  otp: z.string().optional(),
});

const Signup = () => {
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    if (!otpSent) {
      // Simulate sending OTP
      setOtpSent(true);
    } else {
      // Simulate OTP verification and redirect to dashboard
      const accessToken = "sampleAccessToken"; // Simulate access token
      const userDetails = { mobile: data.mobile }; // Simulate user details
      dispatch(setAuth({ accessToken, userDetails })); // Dispatch setAuth action
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input id="mobile" {...register("mobile")} />
          {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
        </div>
        {otpSent && (
          <div>
            <Label htmlFor="otp">OTP</Label>
            <Input id="otp" {...register("otp")} />
            {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
          </div>
        )}
        <Button type="submit">{otpSent ? "Verify OTP" : "Send OTP"}</Button>
      </form>
    </div>
  );
};

export default Signup;