/* Restyled with the shared service kit (src/serviceKit). Content unchanged. */
import { SkTestimonials } from "../serviceKit/ServiceKit";

const clients = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechSolutions Pvt. Ltd.",
      review: "The website delivered exceeded our expectations. Perfect blend of design and functionality.",
      rating: 5,
      image: "client1.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Digital Marketing Hub",
      review: "Incredible attention to detail and on-time delivery. Will definitely work with them again!",
      rating: 4,
      image: "client2.jpg"
    },
    {
      id: 3,
      name: "Amit Verma",
      company: "FinTech Corp",
      review: "They truly understand user experience. Loved the interface and performance!",
      rating: 5,
      image: "client3.jpg"
    },
    {
      id: 4,
      name: "Neha Desai",
      company: "EduSmart",
      review: "Professional team and great support throughout the project.",
      rating: 4,
      image: "client4.jpg"
    }
  ];

const items = clients.map(({ name, company, review }) => ({ name, role: company, review }));

const HappyClients = () => (
  <SkTestimonials
    heading={{ eyebrow: "Client words", title: "Happy clients.", accent: "Real feedback.", copy: "What teams say after launching with NexaTech." }}
    items={items}
  />
);

export default HappyClients;
