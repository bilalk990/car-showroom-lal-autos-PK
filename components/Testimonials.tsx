"use client";
import { Star, Quote } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

const reviews = [
  {
    name: "Zubair Ahmed",
    role: "Collector",
    text: "The acquisition of my GT3 RS through Laal Motors was seamless. Their attention to detail and transparency in PKR pricing is unmatched in Pakistan.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Malik",
    role: "Business Executive",
    text: "Finally, a showroom in Karachi that understands true luxury. Their concierge service handled everything from custom imports to doorstep delivery.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Fawad Khan",
    role: "Enthusiast",
    text: "Most professional experience I've had. The AI concierge helped me find a specific SF90 that I'd been searching for months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

function TestimonialCard({ review, delay }: { review: (typeof reviews)[0]; delay: number }) {
  return (
    <RevealWrapper animation="reveal-up" delay={delay}>
      <div className="glass card-shine p-6 md:p-8 rounded-[2rem] border border-white/5 relative h-full">
        <div className="absolute top-5 right-6 opacity-10">
          <Quote size={40} className="text-neon" />
        </div>

        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={13} className="text-neon fill-neon" />
          ))}
        </div>

        <p className="text-white/80 text-base leading-relaxed mb-6 italic">
          &quot;{review.text}&quot;
        </p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-neon/30 flex-shrink-0">
            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">{review.name}</h4>
            <p className="text-xs text-muted font-bold uppercase tracking-widest">{review.role}</p>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <RevealWrapper animation="reveal-up" className="text-center mb-12 md:mb-16">
          <p className="text-neon text-xs tracking-[0.4em] uppercase mb-4">Client Stories</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
            The <span className="neon-text">Laal Motors</span> Experience
          </h2>
        </RevealWrapper>

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {reviews.map((review, i) => (
            <TestimonialCard key={i} review={review} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
