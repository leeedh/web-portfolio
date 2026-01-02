export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  points: string[];
  link?: string;
  image?: string;
}

export interface AutomationItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  iconName: string; // lucide-react icon name for the card header
  statIconName: string; // lucide-react icon name for the stat box
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}