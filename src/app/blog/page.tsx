import BlogClient from "./BlogClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Vyom Regency Pvt Ltd - Farmhouse Living & Agriculture Land Guide",
  description:
    "Expert insights on farmhouse living, agriculture land investment, organic farming, and real estate in Rajasthan. Read our blog for tips and updates.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogClient />
      <Footer />
    </>
  );
}