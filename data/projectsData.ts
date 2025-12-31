interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'University Portal built with Power Pages',
    description: `A comprehensive university portal developed using Microsoft Power Pages, enabling seamless access to academic resources, course management, and student services through an intuitive web interface.`,
    imgSrc: '/static/images/university-portal-project.png',
    href: 'https://youtu.be/fEFLGTSNYss?si=2aBWoeZEj5Gv2pdb',
  },
]
export default projectsData
