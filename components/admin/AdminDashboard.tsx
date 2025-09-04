// ==================== Admin Dashboard Component Start ====================
"use client";

import React from "react";
import { MapPin, Calendar, Camera, Users, TrendingUp, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Attractions",
      value: "24",
      icon: MapPin,
      change: "+12%",
      changeType: "positive",
    },
    {
      title: "Active Tours",
      value: "18",
      icon: Calendar,
      change: "+8%",
      changeType: "positive",
    },
    {
      title: "Gallery Items",
      value: "156",
      icon: Camera,
      change: "+23%",
      changeType: "positive",
    },
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      change: "+15%",
      changeType: "positive",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New attraction added",
      item: "Nine Arch Bridge",
      time: "2 hours ago",
      user: "Admin User",
    },
    {
      id: 2,
      action: "Tour updated",
      item: "Sigiriya Rock Tour",
      time: "4 hours ago",
      user: "Admin User",
    },
    {
      id: 3,
      action: "Gallery item uploaded",
      item: "Ella Rock View",
      time: "6 hours ago",
      user: "Admin User",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here&apos;s what&apos;s happening with your travel platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}:{" "}
                      <span className="text-blue-600">{activity.item}</span>
                    </p>
                    <p className="text-xs text-gray-500">by {activity.user}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ==================== Admin Dashboard Component End ====================
