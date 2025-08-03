import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (email && password) {
      toast({
        title: "Login successful!",
        description: "Welcome back to InternConnect",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Please enter valid credentials",
        variant: "destructive",
      });
    }
  };

  const handleDemoLogin = () => {
    toast({
      title: "Demo login successful!",
      description: "Logged in as Alex Johnson",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-purple-50 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
            InternConnect
          </h1>
          <p className="text-muted-foreground">Welcome back to your intern portal</p>
        </div>

        <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">OR TRY DEMO</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={handleDemoLogin}
              >
                Demo Login (Alex Johnson)
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </button>
            </p>
          </CardContent>
        </Card>

        <div className="text-right mt-4">
          <div className="inline-block bg-success/10 text-success text-xs px-3 py-1 rounded-full">
            Logged out successfully
          </div>
          <div className="text-xs text-muted-foreground mt-1">See you next time!</div>
        </div>
      </div>
    </div>
  );
};

export default Login;


