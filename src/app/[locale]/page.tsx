import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>Title</h1>
      <p>Text</p>
    </div>
  );
}