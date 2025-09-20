type SpecRowProps = {
  label: string;
  values: React.ReactNode[];
};

export const SpecRow: React.FC<SpecRowProps> = ({ label, values }) => {
  return (
    <div
      className={`grid gap-4 py-4 border-b border-gray-200`}
      style={{
        gridTemplateColumns: `200px repeat(${values.length}, minmax(120px,1fr))`,
      }}
    >
      <div className="text-center font-medium">{label}</div>
      {values.map((v, i) => (
        <div
          key={i}
          className="text-center"
        >
          {v}
        </div>
      ))}
    </div>
  );
};
