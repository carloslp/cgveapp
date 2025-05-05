import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  rating,
  image,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
      <div className="md:w-1/4 flex-shrink-0">
        <img
          src={image}
          alt={author}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-4 border-blue-50"
        />
      </div>
      <div className="md:w-3/4">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-gray-700 italic mb-4">"{quote}"</blockquote>
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-gray-600 text-sm">
          {position}, {company}
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: t('testimonials.items.1.quote'),
      author: t('testimonials.items.1.author'),
      position: t('testimonials.items.1.position'),
      company: t('testimonials.items.1.company'),
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: t('testimonials.items.2.quote'),
      author: t('testimonials.items.2.author'),
      position: t('testimonials.items.2.position'),
      company: t('testimonials.items.2.company'),
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: t('testimonials.items.3.quote'),
      author: t('testimonials.items.3.author'),
      position: t('testimonials.items.3.position'),
      company: t('testimonials.items.3.company'),
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <Container>
        <SectionTitle
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                display: 'flex',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;