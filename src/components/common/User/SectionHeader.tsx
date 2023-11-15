type ISectionHeaderProps = {
  classNames?: string;
  title: string;
};

const SectionHeader = ({ classNames = "", title }: ISectionHeaderProps) => {
  return (
    <div className={`w-full ${classNames}`}>
      <h1 className="text-4xl text-ternaryText font-semibold mb-10">{title}</h1>
    </div>
  );
};

export default SectionHeader;
