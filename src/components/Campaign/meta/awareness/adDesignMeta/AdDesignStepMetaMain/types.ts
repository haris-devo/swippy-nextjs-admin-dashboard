// src/components/AdDesignStepMeta/types.ts

export interface AdData {
  id: number;
  brandName?: string;
  headline?: string;
  media?: File | null;
  mediaUrl?: string;
  goalOptimization?: string;
  placements?: string[];
  attachmentTab?: number;
  attachmentData?: any;
  content?: {
    primaryText: string;
    headlineText: string;
    description: string;
    websiteUrl: string;
    cta: string;
  };
}

export interface AdDesignStepProps {
  data?: any;
  updateData?: (newData: any) => void;
}
