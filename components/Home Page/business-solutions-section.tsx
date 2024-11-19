import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/section-title'

export default function BusinessSolutionsSection() {
  return (
    <section id="business-solutions" className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/staff-photo-pristineclean.webp"
              alt="Pristine Clean Staff Photo"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12" data-aos="fade-up" data-aos-delay="200">
            <div className="max-w-lg mx-auto lg:mx-0">
              <SectionTitle
                title="Schedule our Commercial Washing Service Today!"
                className="text-left mb-6"
              />
              <p className="text-lg text-muted-foreground mb-8">
                We offer a wide range of pressure and soft washing services to meet the unique needs of commercial properties. From storefronts and sidewalks to parking lots and building facades, our team handles it all.
              </p>
              <div className="flex justify-start">
                <Button asChild className="group">
                  <a href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

