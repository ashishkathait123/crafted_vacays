import 'next';

declare module 'next' {
  interface PageProps {
    params: {
      slug: string;
    };
    searchParams?: Record<string, string | string[] | undefined>;
  }
}