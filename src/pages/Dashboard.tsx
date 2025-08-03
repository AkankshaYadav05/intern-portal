import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import RewardCard from "@/components/RewardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, Copy, Calendar, Trophy } from "lucide-react";
import { mockUser, mockRewards } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(mockUser.referralCode);
    toast({
      title: "Copied to clipboard!",
      description: "Referral code copied successfully",
    });
  };

  const nextMilestone = 20000;
  const progress = (mockUser.totalRaised / nextMilestone) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-purple-50/30 to-background">
      <Header currentPage="dashboard" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            Welcome back, {mockUser.name}! 👋
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your fundraising journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Raised"
            value={`$${mockUser.totalRaised.toLocaleString()}`}
            subtitle={`+12% from last month`}
            icon={DollarSign}
          />
          <StatsCard
            title="Referral Code"
            value={mockUser.referralCode}
            subtitle="Copy code"
            icon={Copy}
          />
          <StatsCard
            title="Rewards Unlocked"
            value={`${mockUser.rewardsUnlocked}/${mockUser.totalRewards}`}
            subtitle="Keep going for more rewards!"
            icon={Trophy}
          />
          <StatsCard
            title="Member Since"
            value={mockUser.memberSince}
            subtitle="Amazing journey so far!"
            icon={Calendar}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Next Milestone */}
          <div className="lg:col-span-2">
            <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-primary/10 to-purple-100/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      Next Milestone
                    </CardTitle>
                    <CardDescription>You're on your way to unlocking: Champion Fundraiser</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>${mockUser.totalRaised.toLocaleString()}</span>
                    <span>${nextMilestone.toLocaleString()}</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex items-center justify-between">
                    <Badge variant="warning" className="text-xs">
                      👑 Raise $20,000 - Elite status
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      ${(nextMilestone - mockUser.totalRaised).toLocaleString()} to go
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rewards & Achievements */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Your Rewards & Achievements
                </CardTitle>
                <CardDescription>Track your progress and unlock amazing rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockRewards.map((reward) => (
                    <RewardCard key={reward.id} reward={reward} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" onClick={handleCopyReferralCode}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Referral Code
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Share Progress
                </Button>
                <Button variant="outline" className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  View Donations
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Tips & Motivation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-sm">💡 Pro Tip</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Share your referral code with friends to boost your fundraising!
                    </p>
                  </div>
                  <div className="p-4 bg-success/5 rounded-lg">
                    <h4 className="font-medium text-sm">🎯 Next Goal</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      You're ${(nextMilestone - mockUser.totalRaised).toLocaleString()} away from Champion status!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;