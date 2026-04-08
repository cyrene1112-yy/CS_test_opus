// InstantDB Schema 定义
// 文档：https://www.instantdb.com/docs/schema
// @instantdb/core app-id: f633fd9a-3334-4703-9104-a3ceb3e488b5
import { i } from '@instantdb/core';

const schema = i.schema({
  entities: {
    // 地图表：只读，由管理员通过 seed 脚本写入
    maps: i.entity({
      name: i.string(),          // 地图名称，如 "Dust Protocol"
      description: i.string(),   // 地图描述
      createdAt: i.number(),     // 创建时间戳
    }),
  },
});

export default schema;
