import * as React from "react";
import { MapPin, Users, Calendar, Phone } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="grid grid-cols-4 py-2">
        <button className="flex flex-col items-center py-2 px-1">
          <MapPin className="w-5 h-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">Attractions</span>
        </button>
        <button className="flex flex-col items-center py-2 px-1">
          <Users className="w-5 h-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">Tours Plans</span>
        </button>
        <button className="flex flex-col items-center py-2 px-1">
          <Calendar className="w-5 h-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">Gallery</span>
        </button>
        <button className="flex flex-col items-center py-2 px-1">
          <Phone className="w-5 h-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">Contact Us</span>
        </button>
      </div>
    </div>
  );
}
