import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {

  title: { default: 'Shruthi Homoeopathy | K.G.F', template: '%s | Shruthi Homoeopathy' },
  description: 'Personalized homoeopathic consultation and pharmacy services near Five Lights, K.G.F.',
  icons: { icon: '/image/Shruthi_Homoeopathy-fevicon/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /><div className="floating"><a href="tel:+919632117374" aria-label="Call Shruthi Homoeopathy">Call Now</a></div></body></html>;
}
