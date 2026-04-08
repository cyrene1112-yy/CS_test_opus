# Instant Multiplayer 改造计划

## 执行步骤

- [x] 1. HTML 结构改造：`<script type="module">`，添加 Instant CDN import，开始界面加入名称输入框
- [x] 2. 删除所有 AI 逻辑：`enemies[]`、`spawnEnemy()`、`spawnAllEnemies()`、`updateEnemies()`、`respawnEnemy()` 及相关调用
- [x] 3. 新增多人状态管理：`peerMeshes{}`、`peerTargets{}`、`myPeerId`、`myName` 等变量
- [x] 4. 实现 `initMultiplayer()`：`joinRoom` + `subscribePresence`（peer 增删 mesh）+ `subscribeTopic`（shoot/hit/kill）
- [x] 5. 实现 `syncPresence()`：50ms 节流发布本地玩家 pos/rot/hp/alive
- [x] 6. 改造 `shoot()`：Raycast 检测命中远端玩家 mesh → `publishTopic('hit', ...)`
- [x] 7. 实现命中接收：收到 hit topic 且 targetId === 自己 → 扣血/死亡/重生
- [x] 8. 远端玩家渲染：subscribePresence 回调中插值更新位置/朝向，alive=false 时播放死亡动画
- [x] 9. 验证：浏览器双开测试多人同步

## Review

所有步骤完成，测试通过。

**踩坑记录：**
- `@instantdb/core` 通过 esm.sh 的命名导入（`import { init }`）在浏览器中失效，需改为 namespace import（`import * as InstantCore`）再访问 `InstantCore.init()`
