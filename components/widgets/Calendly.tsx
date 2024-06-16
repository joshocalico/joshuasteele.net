"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useMemo } from "react";

export interface WindowWithCalendly extends Window {
    Calendly?: any;
}

declare let window: WindowWithCalendly;

export const CalendlyWidget = () => {
    const [
        backgroundColor,
        textColor,
    ] = useTheme().resolvedTheme !== "dark" ? [
        "ffffff",
        "000000",
    ] : [
        "000000",
        "ffffff",
    ];

    const deps = useMemo(() => <>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
            <style>{".calendly-overlay { color-scheme: light; }"}</style>
        </>, []);

    return <>
        {deps}
        <Button onClick={() => {
            if (window.Calendly) {
                const Calendly = window.Calendly;
                Calendly.initPopupWidget({url: `https://calendly.com/hello-joshuasteele/30min?hide_event_type_details=1&background_color=${backgroundColor}&text_color=${textColor}&primary_color=7c3aed`})
            }
        }} size={"default"} className="w-min space-x-2">
            <span>Schedule time with me</span>
            <Calendar className="w-4 h-4" />
        </Button>
    </>
};