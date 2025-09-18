export async function translateText(
  text: string,
  targetLang: string,
): Promise<string> {
  const res = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, targetLang }),
  });

  if (!res.ok) {
    throw new Error('Translation failed');
  }

  const data = await res.json();
  return data.translatedText;
}
