import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const status = {
    status: 'ok',
    service: 'mula-platform-main',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage() ? {
      heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
    } : null,
    node: process.version,
  };

  return NextResponse.json(status, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
