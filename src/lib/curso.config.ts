// A CONFIG DE CURSO — o que muda entre SKUs mora AQUI e só aqui.

export const curso = {
  sku: 'curso-eua-fr',
  /** Idioma do comprador (a voz-guia). Francês — o turista francês nos EUA. */
  buyerLang: 'fr',
  /** Idioma do destino (a fala nativa ensinada). Inglês AMERICANO — reusa a
   * camada-alvo criada em curso-eua-es. Derivação: só a camada de guia
   * (francesa) é nova. */
  targetLang: 'en',
  translatorPair: { sl: 'fr', tl: 'en' },
  destCurrency: 'USD',
  /** O comprador francês usa euro; o destino, dólar. Conversão real. */
  homeCurrencies: ['EUR'] as string[],
  timeZone: 'America/New_York',
  cidadeExibicao: 'New York',
  /**
   * Faixas do dia, narradas em FRANCÊS, sobre o ritmo AMERICANO. Aqui o
   * choque É real: o francês janta ~20h30, o americano janta cedo (~18h) —
   * quase três horas de diferença. PROVISÓRIO, revisar antes de tratar como
   * padrão.
   */
  faixasNow: [
    { de: 0, linha: 'Les cuisines sont fermées, mais un diner ouvert 24h/24 ou un food truck te dépannent encore.' },
    { de: 5 * 60, linha: "Presque rien n'est ouvert. Les cafés et les coffee shops ouvrent vers six heures." },
    { de: 7 * 60, linha: 'Breakfast : café à emporter, bagel ou œufs. Ici on prend un vrai petit-déjeuner, et tôt.' },
    { de: 9 * 60 + 30, linha: 'Matinée calme. Les cafés servent encore — tu es en avance, pas en retard.' },
    { de: 11 * 60 + 30, linha: "Le lunch commence. Beaucoup d'endroits ont un menu de midi jusqu'en fin d'après-midi." },
    { de: 12 * 60, linha: "C'est l'heure du lunch : ça se remplit vite jusqu'à 13h. Plus léger que le repas à la maison." },
    { de: 14 * 60, linha: 'Le lunch retombe. Les cafés restent ouverts pour un café et quelque chose de sucré.' },
    { de: 16 * 60 + 30, linha: 'Le creux tranquille entre les repas. Un café ou un happy hour précoce font patienter.' },
    { de: 17 * 60, linha: 'Happy hour : boissons et snacks à prix réduit, généralement jusqu\'à 19h.' },
    { de: 18 * 60, linha: 'Dinnertime : ici on dîne TÔT — presque trois heures avant la France. Les restaurants sont déjà pleins.' },
    { de: 21 * 60, linha: 'Le dîner se termine. Beaucoup de cuisines ferment plus tôt que tu crois — demande les horaires.' },
    { de: 22 * 60 + 30, linha: "Tard. Un diner ou une pizzeria sont encore ouverts, mais beaucoup de cuisines ont déjà fermé." }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
