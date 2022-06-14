import AboutPageImage from "../../Assets/Images/aboutPage.png";

export const SideMenu = {
  about_us: {
    id: 1,
    value: "about_us",
    type: "image_text",
    className: "commonClass",
    label: "About Us",
    path: "/about",
    title: "About Us",
    subtitle: `We are growing as a leading information and communication service
    provider and we help organizations in developing next generation
    infrastructure which keeps them operational without any
    disruption. We Design, Deliver & Manage Services that helps our
    customers in improving their customer experience, empower their
    people, create competitive edge and immediately respond to
    changing scenario. We Design, Deliver & Manage Services that helps
    our customers in improving their customer experience, empower
    their people, create competitive edge and immediately respond to
    changing scenario.`,
    image: AboutPageImage,
    alt: "About Us",
  },
  why_choose_us: {
    id: 2,
    value: "why_choose_us",
    type: "image_text_list",
    className: "commonClass",
    label: "Why Choose Us",
    path: "/whyChoose",
  },
  industries: {
    id: 3,
    value: "industries",
    type: "grid",
    className: "commonClass",
    label: "Industries",
    path: "/industries",
  },
  our_presence: {
    id: 4,
    value: "our_presence",
    type: "map",
    className: "commonClass",
    label: "Our Presence",
    path: "/about",
  },
  our_customers: {
    id: 5,
    values: "our_customers",
    type: "grid",
    className: "commonClass",
    label: "Our Customers",
    path: "/about",
  },
  blog: {
    id: 6,
    value: "blog",
    type: "coming_soon",
    className: "commonClass",
    label: "Blog",
    path: "/blogs",
  },
  career: {
    id: 7,
    value: "career",
    type: "coming_soon",
    className: "commonClass",
    label: "Career",
    path: "/career",
  },
  contact_us: {
    id: 8,
    type: "coming_soon",
    value: "contact_us",
    className: "commonClass",
    label: "Contact Us",
    path: "/contact",
  },
};
