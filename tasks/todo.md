# 地图列表页改造计划

## 执行步骤

- [x] 1. 创建 `instant.schema.ts`：定义 `maps` namespace（name, description, createdAt）
- [x] 2. 创建 `instant.perms.ts`：view=true，create/update/delete=false
- [x] 3. 运行 `npx instant-cli@latest push` 推送 schema + 权限
- [x] 4. 创建 `tasks/seed-maps.js`：Admin SDK 写入 5 张地图
- [x] 5. 运行 seed 脚本，验证数据写入成功
- [x] 6. 修改 `index.html`：添加地图列表页 HTML 结构 + CSS 多边形风格
- [x] 7. 修改 `index.html`：添加 JS 逻辑（fetchMaps + 地图选择流程）
- [x] 8. 修改 `index.html`：`joinRoom` 改用 `mapId` 替换 `'arena-1'`
- [x] 9. 浏览器验证：地图列表正常加载、选择后进入游戏、多人同一地图同步

## 地图数据

| 名称 | 描述 |
|---|---|
| Dust Protocol | Arid desert industrial compound, scarred by gunfire |
| Neon Vertigo | Cyberpunk rooftop district, neon fog and narrow catwalks |
| Iron Bastion | Abandoned military fortress, reinforced concrete ruins |
| Hollow Ridge | Mountain canyon outpost, echoes carry every shot |
| Static Void | Derelict space station, zero-gravity corridors |

## Review

所有步骤完成，浏览器验证通过。

**交付内容：**
- `instant.schema.ts` + `instant.perms.ts`：maps namespace，view=true，写权限全关
- `tasks/seed-maps.js`：Admin SDK 种子脚本，写入 5 张地图
- `index.html`：两步进入流程（名字 → 地图选择 → 游戏），CS 多边形风格 UI，joinRoom 改用 mapId
