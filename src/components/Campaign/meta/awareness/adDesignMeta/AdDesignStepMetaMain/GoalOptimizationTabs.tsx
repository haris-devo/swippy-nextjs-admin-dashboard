// src/components/AdDesignStepMeta/GoalOptimizationTabs.tsx

import React from "react";
import { Tabs, Tab } from "@mui/material";

interface GoalOptimizationTabsProps {
  currentGoal: string;
  goalOptions: string[];
  onChange: (newGoal: string) => void;
}

const GoalOptimizationTabs: React.FC<GoalOptimizationTabsProps> = ({
  currentGoal,
  goalOptions,
  onChange,
}) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(goalOptions[newValue]);
  };

  const currentIndex = goalOptions.indexOf(currentGoal);
  const tabIndex = currentIndex !== -1 ? currentIndex : 0;

  return (
    <div className="mb-5">
      <p className="mb-2 font-medium">Goal Optimization</p>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        {goalOptions.map((goal) => (
          <Tab key={goal} label={goal} />
        ))}
      </Tabs>
    </div>
  );
};

export default GoalOptimizationTabs;
