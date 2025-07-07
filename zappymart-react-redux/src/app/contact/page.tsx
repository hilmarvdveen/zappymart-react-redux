import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-gray-700 mb-8">
        Heb je vragen over deze demo webshop? Of ben je op zoek naar een
        developer met ervaring in moderne frontend-technologieën? Neem gerust
        contact op via het formulier hieronder.
      </p>

      <div className="mt-12 text-sm text-gray-600 space-y-3">
        <p className="flex items-center gap-2">
          <Mail size={16} />{" "}
          <a
            href="mailto:info@jouwdomein.nl"
            className="text-blue-600 hover:underline"
          >
            info@jouwdomein.nl
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Linkedin size={16} />{" "}
          <a
            href="https://linkedin.com/in/hilmarvdveen"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            linkedin.com/in/jouwprofiel
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Github size={16} />{" "}
          <a
            href="https://github.com/jouwgebruikersnaam"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            github.com/jouwgebruikersnaam
          </a>
        </p>
      </div>
    </section>
  );
}
