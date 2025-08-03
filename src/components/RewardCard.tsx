import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reward } from "@/lib/mockData";

interface RewardCardProps {
  reward: Reward;
}

const RewardCard = ({ reward }: RewardCardProps) => {
  return (
    <Card className={`transition-all duration-200 hover:shadow-md ${
      reward.unlocked ? "bg-gradient-to-br from-primary/5 to-purple-50" : "bg-muted/30"
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{reward.icon}</div>
          <Badge variant={reward.unlocked ? "success" : "secondary"}>
            {reward.unlocked ? "Unlocked" : "Locked"}
          </Badge>
        </div>
        <h3 className={`font-semibold text-lg mb-2 ${
          reward.unlocked ? "text-foreground" : "text-muted-foreground"
        }`}>
          {reward.title}
        </h3>
        <p className={`text-sm mb-3 ${
          reward.unlocked ? "text-muted-foreground" : "text-muted-foreground/70"
        }`}>
          {reward.description}
        </p>
        <p className={`text-xs font-medium ${
          reward.unlocked ? "text-primary" : "text-muted-foreground"
        }`}>
          Required: ${reward.requiredAmount.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
};

export default RewardCard;