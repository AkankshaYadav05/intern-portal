import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  currentPage: "dashboard" | "leaderboard";
}

const Header = ({ currentPage }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored auth state and redirect to login
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              InternConnect
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button
              variant={currentPage === "dashboard" ? "default" : "ghost"}
              onClick={() => navigate("/dashboard")}
              className="text-sm"
            >
              Dashboard
            </Button>
            <Button
              variant={currentPage === "leaderboard" ? "default" : "ghost"}
              onClick={() => navigate("/leaderboard")}
              className="text-sm"
            >
              Leaderboard
            </Button>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;