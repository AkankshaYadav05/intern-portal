import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, TrendingUp, Crown } from "lucide-react";
import { mockLeaderboard, communityStats } from "@/lib/mockData";

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Crown className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Trophy className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Champion":
        return <Badge variant="default">👑 Champion</Badge>;
      case "Runner-up":
        return <Badge variant="secondary">🥈 Runner-up</Badge>;
      case "Third Place":
        return <Badge variant="warning">🥉 Third Place</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-purple-50/30 to-background">
      <Header currentPage="leaderboard" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            Fundraising Leaderboard
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our amazing interns are making a difference in their communities. Every dollar raised creates real impact!
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-success/5 to-success/10">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-success mb-2">
                ${communityStats.totalCommunityImpact.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Community Impact</div>
              <div className="text-xs text-success mt-1">Raised by all interns</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {communityStats.activeFundraisers}
              </div>
              <div className="text-sm text-muted-foreground">Active Fundraisers</div>
              <div className="text-xs text-primary mt-1">Making a difference</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-warning/5 to-warning/10">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-warning mb-2">
                ${communityStats.averageRaised.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Average Raised</div>
              <div className="text-xs text-warning mt-1">Per intern</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Performers */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  Top Performers 🏆
                </CardTitle>
                <CardDescription>Our fundraising champions leading the way</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockLeaderboard.slice(0, 3).map((user, index) => (
                    <Card 
                      key={user.id} 
                      className={`text-center transition-all duration-200 hover:shadow-md ${
                        index === 0 ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200' :
                        index === 1 ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200' :
                        'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200'
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="mb-4">
                          {getRankIcon(user.rank)}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{user.name}</h3>
                        <div className="text-2xl font-bold text-success mb-2">
                          ${user.amount.toLocaleString()}
                        </div>
                        {getStatusBadge(user.status)}
                        <div className="text-xs text-muted-foreground mt-2">Incredible impact!</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Full Rankings */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Full Rankings
                </CardTitle>
                <CardDescription>Complete leaderboard of all our amazing fundraisers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockLeaderboard.map((user) => (
                    <div 
                      key={user.id}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${
                        user.name === "Alex Johnson" ? 'bg-primary/5 border-primary/20' : 'bg-card'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10">
                          {getRankIcon(user.rank)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.status}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-success">
                          ${user.amount.toLocaleString()}
                        </div>
                        {getStatusBadge(user.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Your Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">#3</div>
                  <div className="text-sm text-muted-foreground mb-4">You're in 3rd place!</div>
                  <Badge variant="warning" className="mb-4">🥉 Third Place</Badge>
                  <div className="text-lg font-semibold text-success">$15,750.00</div>
                  <div className="text-xs text-muted-foreground mt-2">Keep pushing for the top!</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Motivation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-sm">🎯 Close to #2!</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Only $3,150 away from Marcus Williams!
                    </p>
                  </div>
                  <div className="p-4 bg-success/5 rounded-lg">
                    <h4 className="font-medium text-sm">💪 Great Progress</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      You've raised more than 60% of our interns!
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

export default Leaderboard;