export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Missing text or targetLang' });
  }

  try {
    const response = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: targetLang,
        format: 'text',
      }),
    });

    if (!response.ok) {
      console.error('LibreTranslate returned error:', response.status);
      return res.status(500).json({ error: 'Translation failed' });
    }

    const data = await response.json();
    res.status(200).json({ translatedText: data.translatedText });
  } catch (err) {
    console.error('Translation error:', err);
    res.status(500).json({ error: 'Translation failed' });
  }
}
