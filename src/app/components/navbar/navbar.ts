import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  icon: 'home' | 'user' | 'briefcase' | 'mail' | 'book';
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // ─── Ajouter / supprimer un lien ici uniquement ───────────
  navLinks: NavLink[] = [
    { label: 'Accueil',  path: '/',         icon: 'home'      },
    { label: 'Projets',  path: '/projets',  icon: 'briefcase' },
    { label: 'Blog',     path: '/blog',     icon: 'book'      },
    { label: 'À propos', path: '/a-propos', icon: 'user'      },
    { label: 'Contact',  path: '/contact',  icon: 'mail'      },
  ];
  // ──────────────────────────────────────────────────────────
}

