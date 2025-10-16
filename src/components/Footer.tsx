import { getSiteSettings } from "@/lib/data"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import Logo from "./Logo"

export default async function Footer() {
  const settings = await getSiteSettings()

  return (
    <footer className='bg-gradient-to-br from-slate-900 via-royal-blue to-slate-900 text-white relative overflow-hidden'>
      {/* Subtle Background Pattern */}
      <div
        className='absolute inset-0 opacity-5'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <MaxWidthWrapper>
        <div className='py-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Business Info */}
          <div className='space-y-4'>
            <Logo
              size='3xl'
              variant='white'
            />
            <p className='text-white/90 text-sm leading-relaxed justify-center'>
              {settings?.tagline || "Fast, clean, and built for big loads."}
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-base font-bold text-white uppercase tracking-wide'>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/'
                  className='text-white/90 hover:text-teal-300 transition-colors text-sm font-medium'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-white/90 hover:text-teal-300 transition-colors text-sm font-medium'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-white/90 hover:text-teal-300 transition-colors text-sm font-medium'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-white/90 hover:text-teal-300 transition-colors text-sm font-medium'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-white/90 hover:text-teal-300 transition-colors text-sm font-medium'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-base font-bold text-white uppercase tracking-wide'>
              Contact Info
            </h4>
            <div className='space-y-3 text-white/90'>
              <p className='text-sm font-medium leading-relaxed'>
                {settings?.address}
              </p>
              {settings?.zip && (
                <p className='text-sm font-medium'>{settings.zip}</p>
              )}
              <p className='text-sm'>
                <a
                  href={`mailto:${settings?.email}`}
                  className='hover:text-teal-300 transition-colors font-medium'
                >
                  {settings?.email}
                </a>
              </p>
              {settings?.phone && (
                <p className='text-sm'>
                  <a
                    href={`tel:${settings.phone}`}
                    className='hover:text-teal-300 transition-colors font-medium'
                  >
                    {settings.phone}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Hours */}
          <div className='space-y-4'>
            <h4 className='text-base font-bold text-white uppercase tracking-wide'>
              Hours
            </h4>
            <div className='space-y-3 text-white/90'>
              <p className='text-sm font-medium leading-relaxed'>
                {settings?.hours}
              </p>
              <p className='text-sm font-medium'>Open 365 days a year</p>
            </div>
          </div>
        </div>

        <div className='border-t border-white/20 py-6 text-center'>
          <p className='text-white/70 text-xs font-medium uppercase tracking-wide'>
            &copy; {new Date().getFullYear()} {settings?.name}. All rights
            reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
