interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'University Portal built with Power Pages',
    description: `A university portal built with Power Pages.`,
    imgSrc: '/static/images/university-portal-project.png',
    href: 'https://youtu.be/fEFLGTSNYss?si=2aBWoeZEj5Gv2pdb',
  },
  {
    title: 'Generic booking single-page application built with Power Pages',
    description: `A generic booking application built with local data for Power Pages.`,
    imgSrc: '/static/images/booking-app.png',
    href: 'https://github.com/calsora/power-pages-react-startup/',
  },
]
export default projectsData
