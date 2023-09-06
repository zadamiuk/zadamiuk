export type SectionContainerProps = {
  id: string;
  ref?: React.LegacyRef<HTMLDivElement>;
  header: string;
  children: string | JSX.Element | JSX.Element[];
};
