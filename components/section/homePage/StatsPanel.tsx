import * as React from "react";
import { Card } from "@/components/ui/card";
import Statistic from "./Statistic";

export default function StatsPanel() {
  return (
    <div className="py-8">
      <Card className="hidden md:block p-8 shadow-lg">
        <div className="grid grid-cols-3 gap-8">
          <Statistic number="130" label="Happy Travellers" />
          <Statistic number="20" label="Travel Location" />
          <Statistic number="10" label="Year Experience" />
        </div>
      </Card>
    </div>
  );
}
