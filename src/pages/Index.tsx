import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, TrendingUp, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-purple-50 to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
              InternConnect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join the intern community and start making real impact through fundraising initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate("/login")}
                className="text-lg px-8 py-3"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/leaderboard")}
                className="text-lg px-8 py-3"
              >
                View Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose InternConnect?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow interns, track your impact, and unlock amazing rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-xl transition-all duration-200">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Track Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Monitor your fundraising progress and see the real difference you're making in communities
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-success/5 to-success/10 hover:shadow-xl transition-all duration-200">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-xl">Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Connect with like-minded interns and see how everyone is contributing to meaningful causes
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-warning/5 to-warning/10 hover:shadow-xl transition-all duration-200">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-xl">Unlock Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Achieve milestones and unlock exclusive rewards as you progress in your fundraising journey
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-100/50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of interns who are already making a difference in their communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/signup")}
              className="text-lg px-8 py-3"
            >
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/login")}
              className="text-lg px-8 py-3"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
