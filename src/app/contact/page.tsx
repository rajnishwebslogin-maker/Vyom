"use client";

import LeadForm from "@/components/LeadForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center mb-6">
          Have a question or want to book a site visit? Fill out the form below and we'll get back to you shortly.
        </p>
        {/* Re-use the LeadForm component for contact inquiries */}
        <div className="max-w-2xl mx-auto">
          <LeadForm />
        </div>
      </section>
      <Footer />
    </>
  );
}