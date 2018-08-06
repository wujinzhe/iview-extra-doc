module.exports = {
  title: 'iview-extra',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'github', link: 'https://github.com/wujinzhe/iview-extra' },
    ],
    sidebar: [
      '/',
      {
        title: '组件',
        collapsable: false,
        children: [
          '/number/',
          '/area/'
        ]
      },
    ]
  }
}