import { Header } from './SectionHeader.styles';
import { SectionHeaderProps } from './SectionHeader.types';

export const SectionHeader = ({ text }: SectionHeaderProps) => (
  <Header>{text}</Header>
);
