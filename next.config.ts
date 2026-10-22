import type { NextConfig } from 'next';

// Preview hosts are cross-origin to the dev server; Next blocks /_next/hmr and its fonts from them unless listed here.
const previewDomain = process.env.KOSUKE_PREVIEW_DOMAIN ?? 'previews.kosuke.ai';

const nextConfig: NextConfig = {allowedDevOrigins: [`*.${previewDomain}`]};

export default nextConfig;
