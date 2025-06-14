import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { Trophy, Star, Users, LogOut, Settings, User } from "lucide-react";

export default function Home() {
  const { user, isLoading } = useAuth();

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const displayName = user?.firstName && user?.lastName 
    ? `${user.firstName} ${user.lastName}` 
    : user?.email?.split('@')[0] || 'Player';

  const initials = user?.firstName && user?.lastName
    ? `${user.firstName[0]}${user.lastName[0]}`
    : displayName[0]?.toUpperCase() || 'P';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-6 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black tracking-tight">OSG</div>
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 border-2 border-orange-500">
              <AvatarImage 
                src={user?.profileImageUrl || undefined} 
                alt={displayName}
                className="object-cover"
              />
              <AvatarFallback className="bg-orange-500 text-white font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <span className="font-bold">{displayName}</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-4">
            Welcome back, <span className="text-orange-500">{displayName.split(' ')[0] || displayName}</span>!
          </h1>
          <p className="text-xl text-gray-600">Ready to level up your open source contributions?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 border-4 border-black hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-black" />
              </div>
              <div>
                <div className="text-2xl font-black text-black">Level 1</div>
                <div className="text-sm text-gray-600">New Player</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border-4 border-black hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-black">0 XP</div>
                <div className="text-sm text-gray-600">Experience Points</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border-4 border-black hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-black">0</div>
                <div className="text-sm text-gray-600">Commits Today</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border-4 border-black hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-black">0</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="bg-white p-8 border-4 border-black">
            <h2 className="text-2xl font-black mb-6">Player Profile</h2>
            
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="h-20 w-20 border-4 border-orange-500">
                <AvatarImage 
                  src={user?.profileImageUrl || undefined} 
                  alt={displayName}
                  className="object-cover"
                />
                <AvatarFallback className="bg-orange-500 text-white text-2xl font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl font-bold text-black">{displayName}</p>
                {user?.email && (
                  <p className="text-gray-600">{user.email}</p>
                )}
                <p className="text-sm text-orange-500 font-bold">
                  Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Today'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 border-2 border-black">
                <h3 className="font-bold text-black mb-2">Status</h3>
                <p className="text-sm text-green-600 font-bold">✓ Active Player</p>
              </div>
              <div className="bg-gray-50 p-4 border-2 border-black">
                <h3 className="font-bold text-black mb-2">Rank</h3>
                <p className="text-sm text-gray-600">Beginner</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-8 border-4 border-black">
            <h2 className="text-2xl font-black mb-6">Quick Actions</h2>
            
            <div className="space-y-4">
              <Button 
                className="w-full h-12 bg-white border-2 border-black text-black hover:bg-orange-500 hover:text-white font-bold justify-start"
                onClick={() => console.log('Connect GitHub')}
              >
                <User className="mr-3" size={18} />
                Connect GitHub Repository
              </Button>
              
              <Button 
                className="w-full h-12 bg-white border-2 border-black text-black hover:bg-blue-500 hover:text-white font-bold justify-start"
                onClick={() => console.log('View Leaderboard')}
              >
                <Trophy className="mr-3" size={18} />
                View Global Leaderboard
              </Button>
              
              <Button 
                className="w-full h-12 bg-white border-2 border-black text-black hover:bg-gray-800 hover:text-white font-bold justify-start"
                onClick={() => console.log('Account Settings')}
              >
                <Settings className="mr-3" size={18} />
                Account Settings
              </Button>
              
              <Button 
                className="w-full h-12 bg-white border-2 border-black text-red-600 hover:bg-red-500 hover:text-white font-bold justify-start"
                onClick={handleLogout}
              >
                <LogOut className="mr-3" size={18} />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-yellow-500 p-8 border-4 border-black text-white">
          <h2 className="text-3xl font-black mb-4">Ready to Start Gaming?</h2>
          <p className="text-lg mb-6">Connect your GitHub account and start earning XP for every commit, pull request, and contribution!</p>
          <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black font-bold px-8 py-3">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}