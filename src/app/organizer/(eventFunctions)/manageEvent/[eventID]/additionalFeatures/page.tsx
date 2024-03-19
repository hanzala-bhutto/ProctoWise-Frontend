'use client'
import React, { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const FeatureToggle = ({ feature, onChange }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex flex-col">
        <span className="text-lg font-medium">{feature.name}</span>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {feature.description}
        </p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={feature.enabled}
          onChange={() => onChange(feature)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {feature.enabled ? "Enabled" : "Disabled"}
        </span>
      </label>
    </div>
  );
};

const AdditionalFeatures = () => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      name: "Face Recognition",
      description: "Enable face recognition to take picture, companring with the stored picture for identity verification.",
      enabled: false,
    },
    {
      id: 2,
      name: "Webcam Access",
      description: "Allow access to the webcam for specific functionalities.",
      enabled: false,
    },
    {
      id: 3,
      name: "Browser Restrictions",
      description: "Apply restrictions to enhance browser security like prevent right clicks, stop copy pasting etc and tab switching etc.",
      enabled: false,
    },
    {
      id: 4,
      name: "Screenshot Prevention",
      description: "Prevent users from taking screenshots for privacy.",
      enabled: false,
    },
  ]);

  const handleFeatureToggle = (selectedFeature) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === selectedFeature.id
          ? { ...feature, enabled: !feature.enabled }
          : feature
      )
    );
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h1 className="text-3xl font-semibold mb-4">Additional Features</h1>
      {features.map((feature) => (
        <FeatureToggle
          key={feature.id}
          feature={feature}
          onChange={handleFeatureToggle}
        />
      ))}

      <div className="flex justify-center mt-10">
      <Link
        href="/organizer/dashboard" 
        className={buttonVariants({
            size: "sm",
        })}
        >
        Finish
        </Link>
      </div>
    </div>
  );
};

export default AdditionalFeatures;
