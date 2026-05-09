'use client';

interface FilterTabsProps {
  languages: string[];
  selected: string;
  onSelect: (language: string) => void;
}

export function FilterTabs({ languages, selected, onSelect }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => onSelect(language)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            selected === language
              ? 'border-brand-500 bg-brand-500/15 text-brand-200'
              : 'border-slate-800 bg-slate-950/90 text-slate-300 hover:border-slate-600 hover:text-white'
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
