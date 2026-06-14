interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
      <span
        className={`text-xs font-semibold tracking-[0.2em] uppercase ${
          dark ? "text-[#c8a84b]" : "text-[#c8a84b]"
        }`}
      >
        {children}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
    </div>
  );
}
