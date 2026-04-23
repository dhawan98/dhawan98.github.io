export interface SectionLink {
  id: string;
  label: string;
}

export const navigationItems: SectionLink[] = [
  { id: 'bio', label: 'Bio' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'opensource', label: 'Open Source' },
  { id: 'beyond', label: 'Beyond the Lab' },
];
