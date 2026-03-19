export type SolutionTabIcon =
  | 'lightning'
  | 'location'
  | 'document'
  | 'paper-plane'
  | 'gear';

export interface SolutionItem {
  id: string;
  label: string;
  icon: SolutionTabIcon;
}

export interface SolutionContent {
  title: string;
  description: string;
  image: string;
  badge?: string;
}
