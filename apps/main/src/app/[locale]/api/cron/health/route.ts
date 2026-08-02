import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const status = {
    status: 'ok',
    service: 'mula-platform-main',
    timestamp: new Date().toISOString(),
    runtime: 'edge',
  };

  return NextResponse.json(status, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
