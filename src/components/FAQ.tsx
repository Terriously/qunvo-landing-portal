import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the process to implement Qunvo to my business?",
    answer: "We start with a 30 day pilot where we work closely with your business to customise your AI phone operator. During this time we deploy our software incrementally to first only handle a few calls before gradually increasing the load. We are building something cutting edge and our goal is to get you comfortable with it before we manage 100% of your calls."
  },
  {
    question: "Can Qunvo integrate with our existing systems?",
    answer: "Yes, Qanvo seamlessly integrates with leading systems. For any bespoke platforms, our technical team will work closely with you to optimize integrations."
  },
  {
    question: "What languages does Qunvo support?",
    answer: "Qanvo supports multiple languages including English, Spanish, French, German, and Chinese, with more languages being added regularly."
  },
  {
    question: "How secure is visitor data with Qunvo?",
    answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data storage, and regular security audits to protect all visitor data."
  },
  {
    question: "How expensive is Qunvo?",
    answer: "We charge a flat fee for every business we work with based on thier volume of calls"
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about Qunvo
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;