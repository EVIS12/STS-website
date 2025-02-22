import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const nonce = crypto.randomUUID();

export function middleware(request: NextRequest) {
  const csp = `object-src 'none'; base-uri 'none'; `;

  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Set the CSP header so that Next.js can read it and generate tags with the nonce
  requestHeaders.set('content-security-policy', csp);
  requestHeaders.set('nonce', nonce);

  // Create new response
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Also set the CSP header in the response so that it is outputted to the browser
  response.headers.set('content-security-policy', csp);
  response.headers.set('nonce', nonce);

  return response;
}
