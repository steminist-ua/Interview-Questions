import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Interview-Questions",
  title: "Interview-Questions",
  description: "📚 🎓 Ресурс для як новачків, так і досвідчених розробників, які прагнуть підготуватися до співбесід на посади розробників програмного забезпечення 💼💻",
  themeConfig: {
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Всі питання', link: '/iq/index' }
    ],

    sidebar: [
      {
        text: 'Всі питання',
        items: [
          { text: 'Загальний перелік', link: '/iq/index' },
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'Junior', link: '/iq/javascript/junior' },
          { text: 'Middle', link: '/iq/javascript/middle' },
          { text: 'Senior', link: '/iq/javascript/senior' },
          { text: 'Додатково', link: '/iq/javascript/bonus-js' }
        ]
      },
      {
        text: 'FrontEnd',
        items: [
          { text: 'Додаткові матеріали', link: '/iq/javascript/frontend' },
        ]
      },
      {
        text: 'C++',
        items: [
          { text: 'Junior', link: '/iq/cpp/junior-cpp' },
          { text: 'Middle', link: '/iq/cpp/middle-cpp' },
          { text: 'Senior', link: '/iq/cpp/senior-cpp' },
          { text: 'Додатково', link: '/iq/cpp/bonus' }
        ]
      },
      {
        text: 'Python',
        items: [
          { text: 'Junior', link: '/iq/python/junior-py' },
          { text: 'Middle', link: '/iq/python/middle-py' },
          { text: 'Senior', link: '/iq/python/senior-py' },
          { text: 'Додатково', link: '/iq/python/bonus-py' }
        ]
      },
      {
        text: '.NET',
        items: [
          { text: 'Junior', link: '/iq/net/junior-net' },
          { text: 'Middle', link: '/iq/net/middle-net' },
          { text: 'Senior', link: '/iq/net/senior-net' },
          { text: 'Додатково', link: '/iq/net/bonus-net' }
        ]
      },
      {
        text: 'Бази даних',
        items: [
          { text: 'Додаткові матеріали', link: '/iq/db/bonus-db' },
        ]
      },
      {
        text: 'Операційні системи',
        items: [
          { text: 'Додаткові матеріали', link: '/iq/os/bonus-os' },
        ]
      },
      {
        text: 'DevOps',
        items: [
          { text: 'Додаткові матеріали', link: '/iq/etc/dev-ops' },
        ]
      },
      {
        text: 'Алгоритми',
        items: [
          { text: 'Додаткові матеріали', link: '/iq/etc/algorithms' },
        ]
      },
      {
        text: 'Blockchain',
        items: [
          { text: 'Додаткові матеріали', link: '/iq/etc/blockchain' },
        ]
      },
      {
        text: 'Патерни проєктування та Структури даних',
        items: [
          { text: 'Додаткові матеріали', link: '/iq/etc/design-patterns' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/steminist-ua/Interview-Questions' },
      { icon: 'instagram', link: 'https://www.instagram.com/steminist.ua' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/anastasiia-iskandarova-mala/' }
    ]
  }
})
