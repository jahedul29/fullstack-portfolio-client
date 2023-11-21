"use  client";

type ISectionHeaderProps = {
  classNames?: string;
  title: string;
};

const SectionHeader = ({ classNames = "", title }: ISectionHeaderProps) => {
  return (
    <div className={`w-full ${classNames}`}>
      <h2 className="text-4xl text-ternaryText font-semibold mb-10">{title}</h2>
    </div>
  );
};

export default SectionHeader;
