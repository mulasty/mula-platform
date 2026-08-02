const messageModules: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  pl: () => import('../../messages/pl.json'),
  en: () => import('../../messages/en.json'),
  de: () => import('../../messages/de.json'),
  nl: () => import('../../messages/nl.json'),
  ru: () => import('../../messages/ru.json'),
  it: () => import('../../messages/it.json'),
  zh: () => import('../../messages/zh.json'),
}

export async function loadMessages(locale: string): Promise<Record<string, unknown>> {
  const loader = messageModules[locale]
  if (!loader) {
    const { default: defaultModule } = await import('../../messages/pl.json')
    return defaultModule as unknown as Record<string, unknown>
  }
  const { default: module } = await loader()
  return module as unknown as Record<string, unknown>
}
