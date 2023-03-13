export const state = () => ({
  active: 0,
  navigations: [
    {
      link: '/',
      icon: 'mdi-home',
      name: 'Home',
    },
    {
      link: '/about-us',
      icon: 'mdi-account',
      name: 'About Us',
    },
    {
      link: '/our-brand-ambassador',
      icon: 'mdi-bullhorn-variant',
      name: 'Our Brand Ambassadors',
    },
  ],
})

export const mutations = {
  set_active(state, value) {
    state.active = value
  },
}
