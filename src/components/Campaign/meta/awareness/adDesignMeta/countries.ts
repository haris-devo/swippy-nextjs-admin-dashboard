// countries.ts
export interface Country {
  name: string;
  code: string; // ISO_A3 code
}

export const countries: Country[] = [
  { name: "United States", code: "USA" },
  { name: "Canada", code: "CAN" },
  { name: "Mexico", code: "MEX" },
  { name: "United Kingdom", code: "GBR" },
  { name: "France", code: "FRA" },
  { name: "Germany", code: "DEU" },
  { name: "Australia", code: "AUS" },
  { name: "India", code: "IND" },
  { name: "China", code: "CHN" },
  { name: "Japan", code: "JPN" },
  // Add more countries as needed
];
