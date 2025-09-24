import React, { useState, useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import DeleteButton from '@/components/atoms/buttons/DeleteButton';
import { useTranslation } from 'react-i18next';

interface ProductSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  query,
  onQueryChange,
}) => {
  const [localQuery, setLocalQuery] = useState(query);
  const [placeholder, setPlaceholder] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useTranslation();

  const phrases = [
    `${t('search')}`,
    'iPhone 14 128GB Midnight',
    'iPad Pro 11 (2021) 128GB Space Gray',
    'Watch Series 3 42mm Gold',
  ];

  useEffect(() => {
    if (!localQuery && !isFocused) {
      setStartTyping(true);
    }
  }, []);

  useEffect(() => {
    if (localQuery || isFocused || !startTyping) return;

    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (charIndex < currentPhrase.length + 20) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
    } else if (charIndex < currentPhrase.length * 2 + 20) {
      timeout = setTimeout(() => {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex(charIndex + 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phraseIndex, localQuery, isFocused, startTyping]);

  useEffect(() => {
    const handler = setTimeout(() => {
      onQueryChange(localQuery.trim());
    }, 500);
    return () => clearTimeout(handler);
  }, [localQuery, onQueryChange]);

  useEffect(() => {
    if (!localQuery && !isFocused) {
      setPlaceholder('');
      setCharIndex(0);
      setPhraseIndex(0);
      setStartTyping(true);
    }
  }, [localQuery, isFocused]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLocalQuery(e.target.value);

  const handleFocus = () => {
    setIsFocused(true);
    setPlaceholder('');
    setStartTyping(false);
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    blurTimeoutRef.current = setTimeout(() => setStartTyping(true), 1500);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="text-elements w-4 h-4" />
      </div>
      <input
        value={localQuery}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="block w-full p-[9px] ps-10 outline-none text-sm border border-elements rounded-lg bg-transparent focus:border-custom-secondary"
        placeholder={placeholder}
      />
      {localQuery && (
        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          <DeleteButton onDelete={() => setLocalQuery('')} />
        </div>
      )}
    </div>
  );
};
