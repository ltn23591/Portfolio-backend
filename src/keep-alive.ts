/**
 * Keep-alive: tự gọi /api/health mỗi 14 phút để Render free tier không ngủ (ngủ sau 15 phút không có request).
 * Chỉ chạy khi có RENDER_EXTERNAL_URL (Render tự set) hoặc SELF_PING_URL.
 */
const PING_INTERVAL_MS = 14 * 60 * 1000;

export function startKeepAlive() {
  const baseUrl = process.env.SELF_PING_URL || process.env.RENDER_EXTERNAL_URL;
  if (!baseUrl) {
    console.log('⏭️  Keep-alive disabled (no RENDER_EXTERNAL_URL / SELF_PING_URL)');
    return;
  }

  const url = `${baseUrl.replace(/\/$/, '')}/api/health`;

  const ping = async () => {
    try {
      const res = await fetch(url);
      console.log(`🏓 Keep-alive ping ${url} -> ${res.status}`);
    } catch (err) {
      console.error('Keep-alive ping failed:', (err as Error).message);
    }
  };

  setInterval(() => void ping(), PING_INTERVAL_MS);
  console.log(`⏰ Keep-alive enabled: ${url} every 14 minutes`);
}

