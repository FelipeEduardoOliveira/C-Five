import type { NextConfig } from 'next';

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

const nextConfig: NextConfig = {
  output: isExport ? 'export' : undefined, // Apenas define 'export' se for exportação
  trailingSlash: true,
  images: {
    unoptimized: isExport, // Desabilita otimização apenas no export
  },
  /* config options here */
};

export default nextConfig;
