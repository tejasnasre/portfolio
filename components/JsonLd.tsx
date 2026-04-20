export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Tejas Nasre",
      alternateName: "Builder",
      jobTitle: "Full Stack Engineer",
      description:
        "Full Stack Engineer building impactful mobile and web products with React Native, Next.js, and modern web technologies.",
      url: "https://tejasnasre.is-a.dev",
      email: "tejasnasre.dev@gmail.com",
      image: "https://tejasnasre.is-a.dev/profile.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nagpur",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/tejasnasre",
        "https://linkedin.com/in/tejasnasre",
      ],
      knowsAbout: [
        "React Native",
        "Expo",
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "PostgreSQL",
        "Supabase",
        "Web3",
        "TailwindCSS",
      ],
      worksFor: {
        "@type": "Organization",
        name: "RewiPay — FinBridge Innovations",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tejas Nasre — Software Engineer",
    url: "https://tejasnasre.is-a.dev",
    description:
      "Full Stack Engineer building impactful products with React Native, Next.js, and modern web technologies.",
    author: {
      "@type": "Person",
      name: "Tejas Nasre",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
