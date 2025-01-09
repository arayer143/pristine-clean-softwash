interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    params?: Record<string, unknown>
  ) => void;
}

declare const gtag: (
  command: 'config' | 'event',
  targetId: string,
  params?: Record<string, unknown>
) => void;

