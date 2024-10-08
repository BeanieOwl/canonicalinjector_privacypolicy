import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'BeanieOwl Dev'
    }
};

export default function RootLayout({ children }) {
    return (
      <html lang="en" data-theme="lofi">
        <head>
          <link rel="icon" href="/Favicon.png" sizes="any" />
        </head>
        <body className="antialiased text-white bg-blue-900">
          <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
            <div className="flex flex-col w-full max-w-5xl mx-auto grow">
              <Header />
              {/* Render the page content here */}
              <main>{children}</main> {/* This was missing */}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    );
}
