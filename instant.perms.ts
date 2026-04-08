// InstantDB 权限配置
// 规则：任何人可查看地图，但不能创建/编辑/删除
export default {
  maps: {
    allow: {
      view: 'true',    // 公开可读
      create: 'false', // 禁止创建
      update: 'false', // 禁止更新
      delete: 'false', // 禁止删除
    },
  },
};
