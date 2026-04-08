// 地图数据种子脚本
// 用法：INSTANT_ADMIN_TOKEN=<token> node tasks/seed-maps.js
// Admin token 在 InstantDB Dashboard -> App Settings 中获取
import { init } from '@instantdb/admin';
import { randomUUID } from 'crypto';

const INSTANT_APP_ID = 'f633fd9a-3334-4703-9104-a3ceb3e488b5';
const ADMIN_TOKEN = process.env.INSTANT_ADMIN_TOKEN;

if (!ADMIN_TOKEN) {
  console.error('❌ 缺少 INSTANT_ADMIN_TOKEN 环境变量');
  console.error('   用法: INSTANT_ADMIN_TOKEN=<token> node tasks/seed-maps.js');
  process.exit(1);
}

// 初始化 Admin 客户端
const db = init({ appId: INSTANT_APP_ID, adminToken: ADMIN_TOKEN });

// 5 张地图数据
const maps = [
  {
    id: randomUUID(),
    name: 'Dust Protocol',
    description: 'Arid desert industrial compound, scarred by years of gunfire',
    createdAt: Date.now(),
  },
  {
    id: randomUUID(),
    name: 'Neon Vertigo',
    description: 'Cyberpunk rooftop district, neon fog and narrow catwalks',
    createdAt: Date.now(),
  },
  {
    id: randomUUID(),
    name: 'Iron Bastion',
    description: 'Abandoned military fortress, reinforced concrete ruins',
    createdAt: Date.now(),
  },
  {
    id: randomUUID(),
    name: 'Hollow Ridge',
    description: 'Mountain canyon outpost, echoes carry every shot',
    createdAt: Date.now(),
  },
  {
    id: randomUUID(),
    name: 'Static Void',
    description: 'Derelict space station, zero-gravity corridors and silence',
    createdAt: Date.now(),
  },
];

// 批量写入
async function seed() {
  console.log('🌱 开始写入地图数据...');

  const txns = maps.map((map) =>
    db.tx.maps[map.id].update({
      name: map.name,
      description: map.description,
      createdAt: map.createdAt,
    })
  );

  await db.transact(txns);

  console.log('✅ 写入成功！共写入', maps.length, '张地图：');
  maps.forEach((m) => console.log(`   - [${m.id}] ${m.name}`));
}

seed().catch((err) => {
  console.error('❌ 写入失败：', err.message);
  process.exit(1);
});
