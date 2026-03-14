const SITE = {
  agentName: "Parker Stewart",
  agencyName: "Maximum Senior Benefits",
  cityState: "Arkansas, Oklahoma, Missouri",
  serviceArea: "Serving clients in Arkansas, Oklahoma, and Missouri",
  phoneDisplay: "(479) 351-0184",
  phoneHref: "tel:+14793510184",
  textHref: "sms:+14793510184",
  email: "parkerstewart@elitemsb.com",
  emailHref: "mailto:parkerstewart@elitemsb.com",
  calendlyUrl: "https://calendly.com/parkerjohnstewart/30min",
  enrollNowUrl: "https://www.sunfirematrix.com/app/consumer/yourmedicare/19049562/",
  formEndpoint: "",
  licenseInfo: "License No: 19049562 (AR, OK, MO)",
  disclaimerShort: "This website is not affiliated with or endorsed by the U.S. government or the federal Medicare program.",
  disclaimerLong: "",
  officeHours: "Monday-Friday, 9:00 a.m.-6:00 p.m.",
  logoImage: "assets/logo.png",
  headshotImage: "assets/headshot.jpg",
  heroImage: "assets/hero_parker2.png",
  familyImage: "assets/about-family.jpg",
  medicareImage: "assets/medicare-card.png"
};

window.SITE_DATA = {
  site: SITE,
  labels: {
    nav: {
      home: "Home",
      about: "About",
      medicare: "Medicare",
      contact: "Contact",
      book: "Book Consultation"
    },
    footer: {
      contact: "Contact"
    }
  },
  meta: {
    home: {
      title: "Medicare Help Made Simple | Maximum Senior Benefits",
      description: "Simple local Medicare guidance for people turning 65, reviewing plans, or helping a parent compare options.",
      ogTitle: "Medicare Help Made Simple | Maximum Senior Benefits",
      ogDescription: "Local Medicare guidance for Arkansas, Oklahoma, and Missouri with a simple path to book a consultation.",
      ogImage: SITE.heroImage
    },
    about: {
      title: "About | Maximum Senior Benefits",
      description: "Meet the local Medicare advisor behind Maximum Senior Benefits.",
      ogTitle: "About | Maximum Senior Benefits",
      ogDescription: "Meet Parker Stewart and learn about his personal approach to Medicare guidance.",
      ogImage: SITE.familyImage
    },
    medicare: {
      title: "Medicare | Maximum Senior Benefits",
      description: "A short, plain-English Medicare overview covering the main plan paths and enrollment timing.",
      ogTitle: "Medicare | Maximum Senior Benefits",
      ogDescription: "Plain-English Medicare guidance covering Advantage, Supplement, and Part D options.",
      ogImage: SITE.medicareImage
    },
    contact: {
      title: "Contact | Maximum Senior Benefits",
      description: "Book a Medicare consultation or reach out by phone, text, email, or Calendly.",
      ogTitle: "Contact | Maximum Senior Benefits",
      ogDescription: "Simple contact page with phone, headshot, and Calendly booking.",
      ogImage: SITE.headshotImage
    }
  },
  pages: {
    home: {
      hero: {
        eyebrow: "Local Medicare guidance",
        title: "Medicare Questions? We've Got Answers",
        body: `Work with a licensed Medicare agent to compare Medicare Advantage, Medicare Supplement, and Prescription Drug Plan options available in your area.`,
        primary: "Book a Free In-Home Consultation",
        secondary: "Call / Text ",
        note: SITE.serviceArea,
        imageAlt: "Photo of the advisor helping a local couple."
      },
      audiences: {
        eyebrow: "Who we help",
        // title: "Guidance for those who need Medicare help the most.",
        title: "Medicare Help for Every Stage",
        cards: [
          {
            title: "Turning 65",
            body: "Enrolling in Medicare for the first time."
          },
          {
            title: "Retiring",
            body: "Leaving employer coverage."
          },
          {
            title: "Annual Enrollment Period",
            body: "Reviewing plans during the Annual Enrollment Period."
          },
          {
            title: "Lower Prescription Costs",
            body: "Looking to lower prescription drug costs."
          }
        ]
      },
      basics: {
        eyebrow: "The basics",
        title: "Which Medicare plan is right for you?",
        subtitle: "Compare the main plan types side by side before you decide.",
        link: "View plan details",
        cards: [
          {
            title: "Medicare Advantage",
            body: "A bundled alternative to Original Medicare that may include medical, hospital, and prescription coverage in one plan."
          },
          {
            title: "Medicare Supplement",
            body: "Coverage designed to help pay out-of-pocket costs that Original Medicare does not fully cover."
          },
          {
            title: "Prescription Drug",
            body: "Standalone Part D plans that help cover medications and lower ongoing prescription costs."
          }
        ]
      },
      banner: {
        title: "Need help comparing plans?",
        body: "Book a consultation or call directly for a simple conversation about your situation.",
        primary: "Book Consultation",
        secondary: "Call Now"
      }
    },
    about: {
      hero: {
        eyebrow: "About the agent",
        title: "Local Medicare guidance with a simple, personal approach.",
        body1: "Parker Stewart earned his Bachelor’s degree in Economics from Utah State University. Parker has excelled in sales since 2020 and obtained his insurance license in 2023. He is married to his soulmate and is the proud father of two beautiful children.",
        body2: "He is passionate about helping seniors understand their options and maximize their insurance benefits, ensuring they receive the coverage and support they deserve.",
        primary: "Book Consultation",
        secondary: "Call / Text",
        imageAlt: "Photo of the advisor with his family."
      },
      banner: {
        title: "Questions are welcome.",
        body: "Parker takes a personal, educational approach so clients can understand their Medicare options and move forward with confidence.",
        primary: "Book Consultation"
      }
    },
    medicare: {
      hero: {
        eyebrow: "Medicare made simple",
        title: "A short overview of the main Medicare choices.",
        body: "Learn the basics of the main Medicare paths, then book a consultation for guidance tailored to your doctors, prescriptions, and budget."
      },
      overview: {
        cards: [
          {
            title: "Medicare Advantage",
            body: "Medicare Advantage, sometimes called “Part C” or “MA Plans,” are offered by Medicare-approved private companies that must follow rules set by Medicare. Most Medicare Advantage Plans include drug coverage (Part D). In most cases, you’ll need to use health care providers who participate in the plan’s network. These plans set a limit on what you’ll have to pay out-of-pocket each year for covered services and establish copayments you can expect based off of the covered service. These plans may include extra benefits including dental, vision, hearing, transportation, gym memberships, and/or over-the-counter products coverage. There are many MA plans that will also include a $0 premium. To find out which Medicare advantage plan has the benefits you need call (479)-351-0184 and get a free consultation."
          },
          {
            title: "Medicare Supplement",
            body: "Also known as \"Medigap\", Medicare Supplement Insurance that helps fill \"gaps\" in Original Medicare and is sold by private companies. Original Medicare pays for much, but not all, of the cost for covered health care services and supplies. A Medicare Supplement policy can help pay some or all of the remaining health care costs, like copayments, coinsurance, and deductibles. Medicare will pay its share of the Medicare-Approved Amount for covered health care costs. Then, your Medigap policy pays its share. There are 10 different Medicare Supplement plans approved by Medicare, each with a different level of provided benefits. These include G, F, N, and more. To find out which Medigap plan may fit you best call (479)-351-0184 and get a free consultation."
          },
          {
            title: "Prescription Drug",
            body: "Prescription drug coverage is also known as Part D or PDP. All plans must cover a wide range of prescription drugs that people with Medicare take, including most drugs in certain protected classes,” like drugs to treat cancer or HIV/AIDS. A plan’s list of covered drugs is called a “formulary,” and each plan has its own formulary. Many plans place drugs into different levels, called “tiers,” on their formularies. Drugs in each tier have a different cost. For example, a drug in a lower tier will generally cost you less than a drug in a higher tier. To find out which PDP plan will lower your out-of-pocket costs the most call (479)-351-0184 and get a free consultation."
          }
        ],
        imageAlt: "Medicare card and plan image.",
        enrollLabel: "Enroll Now"
      },
      help: {
        title: "When people usually need help",
        body: "Turning 65, still working past 65, or reviewing coverage after doctors, prescriptions, or costs change."
      },
      banner: {
        title: "Want help with your specific situation?",
        body: "Book a consultation for a simple one-on-one Medicare review.",
        primary: "Book Consultation"
      }
    },
    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Book a Free In-Home Consultation or Ask a Question",
        body: "Reach out by phone, email, or online booking. Questions are welcome, and there is no pressure."
      },
      cards: {
        headshotAlt: "Professional headshot of the advisor.",
        callTitle: "Call or text",
        emailTitle: "Email",
        bookTitle: "Book online",
        bookBody: "Use the booking link below if you prefer to open Calendly in a new window.",
        bookButton: "Book Consultation",
        directLink: "Open Calendly in a new window"
      }
    }
  }
};
