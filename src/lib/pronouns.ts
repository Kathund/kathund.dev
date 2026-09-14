export interface PronounsLegendItem {
  icon: string;
  title: string;
  style: string;
}

export const PronounsLegend: Record<string, PronounsLegendItem> = {
  Love: { icon: '💜', title: 'I love this!', style: 'font-bold text-ctp-mauve' },
  Like: { icon: '👍', title: 'I like this', style: '' },
  Joke: { icon: '😛', title: 'Only jokingly', style: 'text-ctp-peach' },
  Close: { icon: '🫂', title: 'Only if we are close', style: 'pronouns-close-hover-gradient' },
  No: { icon: '👎', title: 'No.', style: 'text-ctp-red' }
} as const;
export type PronounsLegendKey = keyof typeof PronounsLegend;

export interface PronounsListComponentDataItem {
  title: string;
  key: PronounsLegendKey;
}

export interface PronounsListComponentData {
  title: string;
  big: boolean;
  items: PronounsListComponentDataItem[];
}

export const GenericPronounGruop: PronounsListComponentData[] = [
  {
    title: 'Names',
    big: true,
    items: [
      { title: 'Amber', key: 'Love' },
      { title: 'Kathund', key: 'Love' },
      { title: 'Kath', key: 'No' }
    ]
  },
  { title: 'Pronouns', big: true, items: [{ title: 'she/her', key: 'Love' }] }
] as const;

export const PronounDescriptionsGruop: PronounsListComponentData[] = [
  {
    title: 'Generic',
    big: false,
    items: [
      { title: 'person', key: 'Like' },
      { title: 'man', key: 'No' },
      { title: 'women', key: 'Love' },
      { title: 'boy', key: 'No' },
      { title: 'girl', key: 'Love' },
      { title: 'buddy', key: 'No' },
      { title: 'pal', key: 'Joke' },
      { title: 'sis', key: 'Love' },
      { title: 'bro', key: 'No' }
    ]
  },
  {
    title: 'Relationship',
    big: false,
    items: [
      { title: 'friend', key: 'Love' },
      { title: 'partner', key: 'Close' },
      { title: 'boyfriend', key: 'Close' },
      { title: 'girlfriend', key: 'Close' },
      { title: 'husband', key: 'Close' },
      { title: 'wife', key: 'Close' },
      { title: 'darling', key: 'No' },
      { title: 'beloved', key: 'Close' }
    ]
  }
] as const;
