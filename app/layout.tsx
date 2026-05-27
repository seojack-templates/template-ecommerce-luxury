import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://ecommerce-luxury.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Luxury E-Commerce',
    description: 'Premium e-commerce experience with elegant serif type, gold accents, product grid, quick view, and collections.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Luxury E-Commerce',
        description: 'Premium e-commerce experience with elegant serif type, gold accents, product grid, quick view, and collections.',
        url: BASE_URL,
        siteName: 'Luxury E-Commerce',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_ecommerce_luxury.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luxury E-Commerce',
        description: 'Premium e-commerce experience with elegant serif type, gold accents, product grid, quick view, and collections.',
        images: ['https://cdn.seojack.website/templates/tpl_ecommerce_luxury.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: 'Luxury E-Commerce',
    description: 'Premium e-commerce experience with elegant serif type, gold accents, product grid, quick view, and collections.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_ecommerce_luxury.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}