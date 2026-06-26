import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface LegalLink {
  label: string;
  path: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin';
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  brandName = 'Martzcode';

  // ─── Liens légaux ──────────────────────────────────────────
  legalLinks: LegalLink[] = [
    { label: 'Politique de confidentialité', path: '/confidentialite'       },
    { label: "Conditions d'utilisation",     path: '/conditions'            },
    { label: 'Politique des cookies',        path: '/cookies'               },
    { label: 'Mentions légales',             path: '/mentions-legales'      },
  ];

  // ─── Réseaux sociaux ───────────────────────────────────────
  socialLinks: SocialLink[] = [
    { label: 'GitHub',   href: 'https://github.com/Martzcode',                        icon: 'github'   },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/martzcode',                   icon: 'linkedin' },
  ];

  currentYear = new Date().getFullYear();
}
