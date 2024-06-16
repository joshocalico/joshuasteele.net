import { CalendlyWidget } from "@/components/widgets/Calendly";

export default function Contact() {
    return (
      <main className="flex-grow flex container flex-col space-y-4">
        <h1 className="font-extrabold text-6xl pt-8">Contact</h1>
        <h2 className="text-muted-foreground text-xl">Email me, or schedule a chat</h2>
  
        <p>
          I live in Adelaide, Australia which has a timezone of GMT+9:30 or GMT+10:30 in the Southern Hemisphere Summer.<br />
          You can email me at <a href="mailto:hello@joshuasteele.net" className="underline">hello@joshuasteele.net</a> or book a time with me using the form below.
        </p>
        <p>
            I'm always open to meeting new interesting people.
        </p>

        <CalendlyWidget />
        
      </main>
    );
  }