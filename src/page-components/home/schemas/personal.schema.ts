
const PERSONAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  url: "http://www.stanislavpanchenko.de",
  name: "Stanislav Panchenko",
  familyName: "Panchenko",
  gender: "male",
  birthDate: "03/13/1992",
  jobTitle: "Software Engineer",
  knowsLanguage: [
    {
      "@type": "Language",
      name: "German",
    },
    {
      "@type": "Language",
      name: "Russian",
    },
    {
      "@type": "Language",
      name: "English",
    },
  ],
  affiliation: {
    "@type": "Organization",
    brand: {
      "@type": "Brand",
      description: "",
      name: "Prym",
      url: "https://prym.de/",
      logo:
        "https://center-smart-services.com/wp-content/uploads/sites/9/2017/11/prym_logo.png",
    },
  },
  image: {
    "@type": "ImageObject",
    thumbnail:
      "https://avatars1.githubusercontent.com/u/28537457?s=460&u=46c3ae998f6493ecc346c45209f8762e0856d41f&v=4",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Germany",
  },
}
export {PERSONAL_SCHEMA}
