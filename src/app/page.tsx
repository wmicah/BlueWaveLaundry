import { getHomepageData } from "@/lib/data"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import ScrollAnimation, {
  StaggeredAnimation,
} from "@/components/ScrollAnimation"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  CreditCard,
  Star,
  Droplets,
  Thermometer,
  Wind,
  Filter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/components/Logo"

export default async function HomePage() {
  const data = await getHomepageData()
  const { settings, services, amenities, ozonePoints, media } = data

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-royal-blue via-teal-900 to-slate-800'>
      {/* Hero Section - Transparent to show unified gradient */}
      <section className='relative py-32 overflow-hidden'>
        {/* Subtle Background Pattern */}
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <MaxWidthWrapper>
          <div className='relative text-center space-y-12'>
            {/* Logo */}
            <ScrollAnimation
              delay={0.2}
              direction='scale'
              duration={0.8}
            >
              <div className='flex justify-center'>
                <Logo
                  size='hero'
                  variant='white'
                  className='mb-8'
                />
              </div>
            </ScrollAnimation>

            {/* Trust Badge */}
            <ScrollAnimation
              delay={0.4}
              direction='fade'
              duration={0.8}
            >
              <div className='inline-flex items-center gap-3 bg-teal/20 backdrop-blur-sm border border-teal/30 rounded-full px-6 py-3 text-sm font-semibold text-teal-100'>
                <Star className='h-5 w-5 text-yellow-400' />
                24/7 Open • Expert Service • Premium Equipment
              </div>
            </ScrollAnimation>

            {/* Main Headline - Bold and Modern */}
            <ScrollAnimation
              delay={0.6}
              direction='slideLeft'
              duration={0.8}
            >
              <h1 className='text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight'>
                WASH CLEANER.
                <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-200'>
                  WITH OZONE!
                </span>
              </h1>
            </ScrollAnimation>

            {/* Subheadline */}
            <ScrollAnimation
              delay={0.8}
              direction='slideRight'
              duration={0.8}
            >
              <p className='text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium'>
                Text Placeholder for future
                <br />
                <span className='text-lg text-teal-200 mt-2 block'>
                  Expert Same Day Laundry Service • Powered by Technology •
                  Premium Results
                </span>
              </p>
            </ScrollAnimation>

            {/* Primary CTA */}
            <ScrollAnimation
              delay={1.0}
              direction='bounce'
              duration={0.8}
            >
              <div className='flex flex-col sm:flex-row gap-6 justify-center pt-8'>
                <Button
                  asChild
                  size='lg'
                  className='border-0 border-white text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-lg font-bold shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:text-teal-400'
                >
                  <Link
                    href='/contact'
                    className='flex items-center gap-3'
                  >
                    GET STARTED TODAY
                    <ArrowRight className='h-6 w-6 group-hover:translate-x-1 transition-transform' />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='border-0 border-white text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-lg font-bold shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:text-teal-400'
                >
                  <Link
                    href='/services'
                    className='flex items-center gap-3'
                  >
                    EXPLORE SERVICES
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            {/* Key Stats - More Prominent */}
            <StaggeredAnimation
              delay={1.2}
              staggerDelay={0.1}
              direction='rotate'
              className='grid grid-cols-2 md:grid-cols-4 gap-8 pt-16'
            >
              <div className='text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                <div className='text-4xl md:text-5xl font-black text-teal-500 mb-2'>
                  100 LB
                </div>
                <div className='text-sm font-semibold text-white/90 uppercase tracking-wide'>
                  Max Load Capacity
                </div>
              </div>
              <div className='text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                <div className='text-4xl md:text-5xl font-black text-teal-500 mb-2'>
                  200G
                </div>
                <div className='text-sm font-semibold text-white/90 uppercase tracking-wide'>
                  Spin Force
                </div>
              </div>
              <div className='text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                <div className='text-4xl md:text-5xl font-black text-teal-500 mb-2'>
                  365
                </div>
                <div className='text-sm font-semibold text-white/90 uppercase tracking-wide'>
                  Days Open
                </div>
              </div>
              <div className='text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                <div className='text-4xl md:text-5xl font-black text-teal-500 mb-2'>
                  24/7
                </div>
                <div className='text-sm font-semibold text-white/90 uppercase tracking-wide'>
                  Always Available
                </div>
              </div>
            </StaggeredAnimation>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Water System Features - Transparent to show unified gradient */}
      <section className='py-32 relative'>
        <MaxWidthWrapper>
          <ScrollAnimation
            direction='scale'
            duration={0.8}
          >
            <div className='text-center mb-20'>
              <h2 className='text-5xl md:text-7xl font-black text-white mb-8 leading-tight'>
                WASH CLEANER.
                <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-600'>
                  WITH OZONE!
                </span>
              </h2>
              <p className='text-xl text-white/90 max-w-4xl mx-auto font-medium'>
                The Best Just Got Better: We are so committed to being the best,
                we even perfected water for a legendary wash.
              </p>
            </div>
          </ScrollAnimation>

          <StaggeredAnimation
            direction='slideLeft'
            staggerDelay={0.15}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {/* Water System */}
            <div className='group text-center space-y-8 p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-100 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-100 hover:border-blue-200 hover:shadow-2xl'>
              <div className='w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <Droplets className='h-12 w-12 text-white' />
              </div>
              <div>
                <h3 className='text-2xl font-black text-white mb-4'>
                  WATER SYSTEM
                </h3>
                <p className='text-white/90 leading-relaxed font-medium'>
                  High-efficient laundry with Blue Wave&apos;s exclusive ozone water
                  system
                </p>
              </div>
            </div>

            {/* Best Boilers */}
            <div className='group text-center space-y-8 p-10 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-50 hover:from-orange-100 hover:to-orange-100 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-100 hover:border-orange-200 hover:shadow-2xl'>
              <div className='w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <Thermometer className='h-12 w-12 text-white' />
              </div>
              <div>
                <h3 className='text-2xl font-black text-white mb-4'>
                  BEST BOILERS
                </h3>
                <p className='text-white/90 leading-relaxed font-medium'>
                  Heating to Perfection with State-of-the-Art Intelligence =
                  Super Hot Water
                </p>
              </div>
            </div>

            {/* Ozone */}
            <div className='group text-center space-y-8 p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-50 hover:from-purple-100 hover:to-purple-100 transition-all duration-500 hover:-translate-y-3 border-2 border-purple-100 hover:border-purple-200 hover:shadow-2xl'>
              <div className='w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <Wind className='h-12 w-12 text-white' />
              </div>
              <div>
                <h3 className='text-2xl font-black text-white mb-4'>OZONE</h3>
                <p className='text-white/90 leading-relaxed font-medium'>
                  The Game Changer in Sanitization and Softness
                </p>
              </div>
            </div>

            {/* Filtration */}
            <div className='group text-center space-y-8 p-10 rounded-3xl bg-gradient-to-br from-green-50 to-green-50 hover:from-green-100 hover:to-green-100 transition-all duration-500 hover:-translate-y-3 border-2 border-green-100 hover:border-green-200 hover:shadow-2xl'>
              <div className='w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                <Filter className='h-12 w-12 text-white' />
              </div>
              <div>
                <h3 className='text-2xl font-black text-white mb-4'>
                  FILTRATION
                </h3>
                <p className='text-white/90 leading-relaxed font-medium'>
                  Filtration for a Safer, Cleaner Wash
                </p>
              </div>
            </div>
          </StaggeredAnimation>
        </MaxWidthWrapper>
      </section>

      {/* Services Section */}
      {services.length > 0 && (
        <section className='py-24 relative'>
          <MaxWidthWrapper>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Our <span className='text-teal-400'>Services</span>
              </h2>
              <p className='text-xl text-white/90 max-w-3xl mx-auto'>
                Cutting-edge laundry solutions designed for modern life
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map((service: any, index: number) => (
                <div
                  key={service.id}
                  className='group bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-600'
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg'>
                      {index + 1}
                    </div>
                    <h3 className='text-xl font-bold text-white'>
                      {service.title}
                    </h3>
                  </div>
                  <p className='text-white/90 leading-relaxed'>
                    {service.blurb}
                  </p>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* Ozone Benefits */}
      {ozonePoints.length > 0 && (
        <section className='py-24 relative overflow-hidden'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2309c4f2' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <MaxWidthWrapper>
            <div className='text-center mb-16'>
              <div className='inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 rounded-full px-4 py-2 text-sm font-medium mb-6 border border-teal-400/30'>
                <Shield className='h-4 w-4' />
                Ozone Technology
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                The <span className='text-teal-400'>Ozone Advantage</span>
              </h2>
              <p className='text-xl text-white/90 max-w-3xl mx-auto'>
                Experience the power of chemical-free sanitization that
                transforms your laundry experience
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {ozonePoints.map((point: any, index: number) => (
                <div
                  key={point.id}
                  className='group flex items-start space-x-4 p-6 bg-gray-700/70 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:bg-gray-600 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-white text-sm font-bold'>✓</span>
                  </div>
                  <p className='text-white/90 font-medium leading-relaxed'>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <div className='text-center mt-12'>
              <div className='inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold'>
                <Sparkles className='h-5 w-5' />
                Chemical-Free • Environmentally Safe • More Effective
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* Amenities */}
      {amenities.length > 0 && (
        <section className='py-24 relative'>
          <MaxWidthWrapper>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Modern <span className='text-teal-400'>Amenities</span>
              </h2>
              <p className='text-xl text-white/90 max-w-3xl mx-auto'>
                Designed for comfort, convenience, and accessibility
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {amenities.map((amenity: any, index: number) => (
                <div
                  key={amenity.id}
                  className='group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300'>
                      <span className='text-2xl group-hover:text-white transition-colors duration-300'>
                        {index === 0
                          ? "📶"
                          : index === 1
                          ? "🚗"
                          : index === 2
                          ? "♿"
                          : index === 3
                          ? "💡"
                          : index === 4
                          ? "🔒"
                          : "⭐"}
                      </span>
                    </div>
                    <p className='font-semibold text-white text-lg'>
                      {amenity.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* Photo Gallery */}
      {media.length > 0 && (
        <section className='py-24 relative'>
          <MaxWidthWrapper>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Our <span className='text-teal-400'>Facility</span>
              </h2>
              <p className='text-xl text-white/90 max-w-3xl mx-auto'>
                Step inside our modern, clean, and welcoming laundry facility
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {media.slice(0, 6).map((item: any, index: number) => (
                <div
                  key={item.id}
                  className='group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'
                >
                  <Image
                    src={item.url}
                    alt={item.alt || "Blue Wave Laundry facility"}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-4 left-4 right-4'>
                      <p className='text-white font-medium'>
                        {item.alt || "Facility View"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* WASH HAPPY - Facility Showcase */}
      <section className='py-32 bg-white relative'>
        <MaxWidthWrapper>
          <ScrollAnimation
            direction='fade'
            duration={0.8}
          >
            <div className='text-center mb-20'>
              <h2 className='text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight'>
                WASH HAPPY
              </h2>
              <p className='text-xl text-gray-600 max-w-4xl mx-auto font-medium'>
                We have created the most beautiful laundry in the world. Where
                your comfort is our priority.
                <br />
                Here you will find the cleanest laundry you've ever seen. With
                massive TVs, lots of seating, Big Ass fans.
              </p>
              <div className='mt-6 text-2xl font-bold text-gray-800'>
                Our big secret. Premium Tech Washers!
              </div>
            </div>
          </ScrollAnimation>

          {/* Facility Features Grid */}
          <StaggeredAnimation
            direction='scale'
            staggerDelay={0.1}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'
          >
            <div className='text-center space-y-4 p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl border-2 border-teal-100'>
              <div className='w-16 h-16 bg-gradient-to-br from-royal-blue to-teal rounded-2xl flex items-center justify-center mx-auto'>
                <Zap className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-xl font-black text-gray-900'>Blue Wave</h3>
              <p className='text-gray-700 font-medium'>
                EASIER. FASTER. CLEANER. BETTER.
              </p>
            </div>

            <div className='text-center space-y-4 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-100'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto'>
                <Sparkles className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-xl font-black text-gray-900'>
                Our big secret.
              </h3>
              <p className='text-gray-700 font-medium'>Premium Tech Washers</p>
            </div>

            <div className='text-center space-y-4 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border-2 border-green-100'>
              <div className='w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto'>
                <Wind className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-xl font-black text-gray-900'>
                Premium Tech Washers
              </h3>
              <p className='text-gray-700 font-medium'>Genius Series Washers</p>
            </div>

            <div className='text-center space-y-4 p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border-2 border-orange-100'>
              <div className='w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto'>
                <Thermometer className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-xl font-black text-gray-900'>
                Speed, Speed, Speed
              </h3>
              <p className='text-gray-700 font-medium'>
                Extract speeds of up to 200G-force.
              </p>
            </div>
          </StaggeredAnimation>

          {/* Trust Indicators */}
          <StaggeredAnimation
            direction='bounce'
            staggerDelay={0.2}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'
          >
            <div className='space-y-4 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-gray-200'>
              <Clock className='h-12 w-12 text-teal mx-auto' />
              <h3 className='text-2xl font-black text-gray-900'>24 HOURS</h3>
              <p className='text-gray-700 font-medium'>
                Come wash at Blue Wave anytime, anyday.
              </p>
            </div>

            <div className='space-y-4 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-gray-200'>
              <CreditCard className='h-12 w-12 text-teal mx-auto' />
              <h3 className='text-2xl font-black text-gray-900'>
                PAY WITH APP
              </h3>
              <p className='text-gray-700 font-medium'>
                Pay with our App, Credit, Debit, EBT or Cash
              </p>
            </div>

            <div className='space-y-4 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-gray-200'>
              <Star className='h-12 w-12 text-teal mx-auto' />
              <h3 className='text-2xl font-black text-gray-900'>
                BEST SERVICE
              </h3>
              <p className='text-gray-700 font-medium'>
                Best Customer Service • Always SUPER HOT!
              </p>
            </div>
          </StaggeredAnimation>
        </MaxWidthWrapper>
      </section>

      {/* Contact Info - Transparent to show unified gradient */}
      <section className='py-32 text-white relative overflow-hidden'>
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <MaxWidthWrapper>
          <ScrollAnimation
            direction='slideLeft'
            duration={0.8}
          >
            <div className='text-center mb-20'>
              <h2 className='text-5xl md:text-7xl font-black mb-8 leading-tight'>
                FULL SERVICE 24/7
              </h2>
              <p className='text-xl text-teal-200 max-w-3xl mx-auto font-medium'>
                Come wash at Blue Wave anytime, anyday.
              </p>
            </div>
          </ScrollAnimation>

          <StaggeredAnimation
            direction='slideRight'
            staggerDelay={0.2}
            className='grid grid-cols-1 md:grid-cols-3 gap-12'
          >
            <div className='text-center space-y-6 p-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2'>
              <div className='w-20 h-20 bg-gradient-to-br from-royal-blue to-teal rounded-3xl flex items-center justify-center mx-auto'>
                <MapPin className='w-10 h-10 text-white' />
              </div>
              <div>
                <h3 className='text-2xl font-black mb-4'>WHERE</h3>
                <p className='text-teal-100 leading-relaxed text-lg'>
                  {settings?.address || "545 SE Baseline St"}
                </p>
              </div>
            </div>

            <div className='text-center space-y-6 p-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2'>
              <div className='w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto'>
                <Mail className='w-10 h-10 text-white' />
              </div>
              <div>
                <h3 className='text-2xl font-black mb-4'>CONTACT US</h3>
                <p className='text-teal-100 leading-relaxed text-lg'>
                  {settings?.email || "info@bluewavelaundry.net"}
                </p>
              </div>
            </div>

            <div className='text-center space-y-6 p-10 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2'>
              <div className='w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto'>
                <Phone className='w-10 h-10 text-white' />
              </div>
              <div>
                <h3 className='text-2xl font-black mb-4'>CALL US</h3>
                <p className='text-teal-100 leading-relaxed text-lg'>
                  {settings?.phone || "Contact for details"}
                </p>
              </div>
            </div>
          </StaggeredAnimation>

          <ScrollAnimation
            delay={0.5}
            direction='scale'
          >
            <div className='text-center mt-20'>
              <Button
                asChild
                size='lg'
                className='bg-gradient-to-r from-royal-blue to-teal hover:from-royal-blue/90 hover:to-teal/90 text-white px-16 py-6 text-xl font-black shadow-2xl hover:shadow-teal/25 transition-all duration-300 transform hover:-translate-y-1 group'
              >
                <Link
                  href='/contact'
                  className='flex items-center gap-3'
                >
                  GET DIRECTIONS
                  <ArrowRight className='h-6 w-6 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
