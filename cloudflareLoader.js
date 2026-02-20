export default function cloudflareLoader({ src, width, quality }) {
  // src is the original URL: https://cdn.shopifyapp.shop/path/to/image.png
  // We extract the path after the domain
  const relativePath = src.replace('https://cdn.shopifyapp.shop', '');
  const params = `width=${width},quality=${quality || 50},format=auto`;
  
  return `https://cdn.shopifyapp.shop/cdn-cgi/image/${params}${relativePath}`;
}