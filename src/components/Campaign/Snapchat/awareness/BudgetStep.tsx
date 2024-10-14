import React from "react";

const BudgetStep = ({
  data,
  updateData,
}: {
  data?: any;
  updateData?: (newData: any) => void;
}) => (
  <div>
    <h2>Step 3: Budget</h2>
    {/* Add your budget form fields here */}
  </div>
);

export default BudgetStep;
