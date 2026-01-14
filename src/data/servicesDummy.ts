export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export const servicesDummy: ServiceItem[] = [
  {
    iconName: 'RiSearchLine',
    title: 'Luxury Home Buying',
    description:
      'A highly curated search process tailored to your specific taste. From off-market access to expert negotiation, we ensure you secure the finest residence at the best value.',
  },
  {
    iconName: 'RiExchangeLine',
    title: 'Strategic Home Selling',
    description:
      'Our marketing approach combines high-end staging with sophisticated digital strategy to position your property as a premier offering and maximize your return.',
  },
  {
    iconName: 'RiBarChart2Line',
    title: 'Investment Consulting',
    description:
      'Deep market analysis and portfolio optimization for savvy investors. We identify emerging opportunities and provide data-driven insights for long-term growth.',
  },
];
