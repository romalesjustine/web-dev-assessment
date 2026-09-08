import "./styles/Footer.css";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.2 4.3c-2.13 0-3.6 1.3-3.6 3.68v2.46H8.05v2.96h2.55V21h2.9Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="1.8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r="0.9" fill="black" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="9" width="3" height="10" />
    <circle cx="5.5" cy="5.5" r="1.8" />
    <path d="M10.5 9h2.9v1.5h.04c.4-.76 1.4-1.56 2.86-1.56 3.06 0 3.62 2 3.62 4.6V19h-3v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V19h-3V9Z" />
  </svg>
);

const SOCIALS = [
  { icon: <FacebookIcon />, label: "Facebook", href: "#" },
  { icon: <InstagramIcon />, label: "Instagram", href: "#" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
];

export default function Footer({
  name = "Marci Metzger Homes",
  tagline = "The Ridge Realty Group \u00b7 Pahrump, Nevada",
  socials = SOCIALS,
  copyrightName = "Marci Metzger",
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="footer">
      <h2 className="footer-name">{name}</h2>
      <p className="footer-tagline">{tagline}</p>

      <div className="footer-socials">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="footer-social"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="footer-copyright">
        {`\u00a9 ${year} ${copyrightName} \u00b7 All rights reserved`}
      </p>
    </footer>
  );
}