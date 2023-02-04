const init = (option?: { key: string; value: string }) => {
  if (!option) {
    console.info("初始化成功");
    return;
  }

  const { key, value } = option;
  console.info(`初始化成功{${key}: ${value}}`);
};

export default init;
