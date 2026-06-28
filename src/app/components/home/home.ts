import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechIcon {
  name: string;
  class: string; // Devicon class
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly icons: TechIcon[] = [
    { name: 'Angular',      class: 'devicon-angular-plain colored'        },
    { name: 'TypeScript',   class: 'devicon-typescript-plain colored'     },
    { name: 'React',        class: 'devicon-react-original colored'       },
    { name: 'Node.js',      class: 'devicon-nodejs-plain colored'         },
    { name: 'Docker',       class: 'devicon-docker-plain colored'         },
    { name: 'GitHub',       class: 'devicon-github-original colored'      },
    { name: 'Java',         class: 'devicon-java-plain colored'           },
    { name: 'PostgreSQL',   class: 'devicon-postgresql-plain colored'     },
    { name: 'Tailwind',     class: 'devicon-tailwindcss-original colored' },
    { name: 'AWS',          class: 'devicon-amazonwebservices-plain colored' },
    { name: 'Linux',        class: 'devicon-linux-plain colored'          },
    { name: 'Redux',        class: 'devicon-redux-original colored'       },
    { name: 'Next.js',      class: 'devicon-nextjs-plain colored'         },
    { name: 'Git',          class: 'devicon-git-plain colored'            },
    { name: 'Kubernetes',   class: 'devicon-kubernetes-plain colored'     },
  ];

  readonly orbitCount = 3;

  get orbits(): number[] {
    return Array.from({ length: this.orbitCount }, (_, i) => i);
  }

  getOrbitSize(idx: number): string {
    return `${8 + 6 * (idx + 1)}rem`;
  }

  getOrbitDuration(idx: number): string {
    return `${14 + idx * 7}s`;
  }

  getOrbitIcons(orbitIdx: number): TechIcon[] {
    const perOrbit = Math.ceil(this.icons.length / this.orbitCount);
    return this.icons.slice(orbitIdx * perOrbit, orbitIdx * perOrbit + perOrbit);
  }

  getIconPos(iconIdx: number, total: number): { x: number; y: number } {
    const angle = (iconIdx * 2 * Math.PI) / total;
    return { x: 50 + 50 * Math.cos(angle), y: 50 + 50 * Math.sin(angle) };
  }
}
