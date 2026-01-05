import React from 'react'

const items = [
  {
    label: 'React',
    href: 'https://reactjs.org',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="12" rx="6.5" ry="2.8" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="6.5" ry="2.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </g>
      </svg>
    ),
    bg: 'bg-[#61dafb]/20 text-[#61dafb]',
  },
  {
    label: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e" />
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#000">
          JS
        </text>
      </svg>
    ),
    bg: 'bg-[#f7df1e]/20 text-[#f7df1e]',
  },
  {
    label: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6" />
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          TS
        </text>
      </svg>
    ),
    bg: 'bg-[#3178c6]/20 text-[#3178c6]',
  },
  {
    label: 'Tailwind',
    href: 'https://tailwindcss.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          d="M2 16s5-4 10-2 10-2 10-2"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12s5-4 10-2 10-2 10-2"
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bg: 'bg-[#06b6d4]/20 text-[#06b6d4]',
  },

  // HTML (angle brackets)
  {
    label: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        aria-hidden
      >
        <title>HTML5</title>
        <path
          fill="#E34F26"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
        />
      </svg>
    ),
    bg: 'bg-[#E34F26]/20 text-[#E34F26]',
  },

  // CSS (curly braces)
  {
    label: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        aria-hidden
      >
        <title>CSS</title>
        <path
          fill="#663399"
          d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"
        />
      </svg>
    ),
    bg: 'bg-[#663399]/20 text-[#663399]',
  },

  // .NET
  {
    label: '.NET',
    href: 'https://dotnet.microsoft.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#512bd4" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">
          .NET
        </text>
      </svg>
    ),
    bg: 'bg-[#512bd4]/20 text-[#512bd4]',
  },

  // Bootstrap
  {
    label: 'Bootstrap',
    href: 'https://getbootstrap.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="none"
          stroke="#7952B3"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"
        />
      </svg>
    ),
    bg: 'bg-[#7952b3]/20 text-[#7952b3]',
  },

  // Sass
  {
    label: 'Sass',
    href: 'https://sass-lang.com',
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        aria-hidden
      >
        <title>Sass</title>
        <path
          fill="none"
          stroke="#CC6699"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"
        />
      </svg>
    ),
    bg: 'bg-[#cf649a]/20 text-[#cf649a]',
  },

  // YAML
  {
    label: 'YAML',
    href: 'https://yaml.org',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#00a2ff" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">
          YML
        </text>
      </svg>
    ),
    bg: 'bg-[#00a2ff]/20 text-[#00a2ff]',
  },

  // Git (branch)
  {
    label: 'Git',
    href: 'https://git-scm.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#f34f29" />
        <g
          transform="translate(4,4)"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <circle cx="3" cy="3" r="1.6" />
          <circle cx="9" cy="9" r="1.6" />
          <circle cx="3" cy="15" r="1.6" />
          <path d="M3 4.6L9 10" />
          <path d="M9 10v2.8" />
        </g>
      </svg>
    ),
    bg: 'bg-[#f34f29]/20 text-[#f34f29]',
  },
]

export default function ProLanguagesMarquee() {
  return (
    <div className="marquee" aria-hidden={false}>
      <div className="marquee-track">
        <div className="marquee-group flex items-center gap-4">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full shadow-sm ${it.bg}`}
              aria-label={it.label}
              title={it.label}
            >
              {it.icon}
              <span className="sr-only">{it.label}</span>
            </a>
          ))}
        </div>

        {/* duplicate for seamless loop */}
        <div className="marquee-group ml-4 flex items-center gap-4" aria-hidden>
          {items.map((it) => (
            <span
              key={`dup-${it.label}`}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full shadow-sm ${it.bg} opacity-90`}
              aria-hidden
            >
              {it.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
