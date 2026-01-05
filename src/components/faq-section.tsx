"use client";

import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    className?: string;
}

export function FAQSection({ items, className }: FAQSectionProps) {
    return (
        <Accordion type="single" collapsible className={cn("w-full", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-border/50 data-[state=open]:bg-card/50 rounded-lg px-4 transition-colors"
                >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-4 gap-4">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pr-8">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
