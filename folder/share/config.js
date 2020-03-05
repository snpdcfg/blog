const fs = require('fs')
function getSidebar (dir) {
  const files = fs.readdirSync(`${__dirname}/../${dir}`)
  const sidebar = files.map(file => {
    let fileName = file.split('.')[0]
    if (fileName.toUpperCase() === 'README') {
      return ''
    }
    else {
      return fileName
    }
  })
  return sidebar
}


module.exports = {
  base: '/blog/',
  logo: '/assets/img/logo.jpg',
  title: 'Snpdcfg',
  description: '一个没有灵魂的稻草人',
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5']
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ],
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '笔记',
        link: '/frontend/'
      },
      {
        text: '博客',
        link: '/note/'
      },
      {
        text: '乱写',
        link: '/gossip/'
      }
    ],
    sidebar: {
      '/frontend/': [
        '',
      ],
      '/gossip/': getSidebar('gossip'),
      '/note/': getSidebar('note')
    }
  }
}
