import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col justify-center container space-y-2 pb-72">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hi! I'm Josh 👋
      </h1>

      <p className="text-muted-foreground text-xl">
        I&apos;m a Software Engineer at Canva
      </p>

      <p>
        I work on advanced web applications and other cool stuff. <br />
        For more about what I'm up to check out my blog, or my projects page.
      </p>

      <strong>Want to schedule a coffee with me? ☕️</strong>

      <span>
        Chuck a{" "}
        <a href="/contact" className="underline">
          meeting invite in my calendar
        </a>
        .
      </span>

      <div className="pt-10">
        <Label>Socials</Label>
        <div className="flex w-min p-2 bg-card rounded-sm shadow-sm border space-x-2">
          <Button variant={"outline"} size={"icon"} asChild>
            <a href={"https://github.com/joshocalico"}>
              <SiGithub className="h-4 w-4" />
            </a>
          </Button>
          <Button variant={"outline"} size={"icon"} asChild>
            <a href={"https://linkedin.com/in/joshuasteele0"}>
              <SiLinkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant={"outline"} size={"icon"} asChild>
            <a href={"mailto:hello@joshuasteele.net"}>
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
