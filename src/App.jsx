import React from 'react'
import { Link } from 'react-scroll'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { FaBalanceScale, FaClipboardCheck } from 'react-icons/fa'
import { BsShieldLock } from 'react-icons/bs'
import { MdHighQuality } from 'react-icons/md'
import { IoRocket } from 'react-icons/io5'
import { RiTeamLine } from 'react-icons/ri'

const navigation = [
  { name: 'Inicio', href: 'hero' },
  { name: 'Nosotros', href: 'about' },
  { name: 'Valores', href: 'values' },
  { name: 'Servicios', href: 'services' },
  { name: 'Por qué elegirnos', href: 'why-us' },
  { name: 'Contacto', href: 'contact' },
]

const services = [
  { name: 'Contabilidad General', description: 'Manejo integral de tu contabilidad empresarial' },
  { name: 'Declaraciones fiscales', description: 'Cumplimiento oportuno de obligaciones fiscales' },
  { name: 'Nómina y sueldos', description: 'Gestión completa de nómina y prestaciones' },
  { name: 'Auditoría interna', description: 'Revisión y control de procesos contables' },
  { name: 'Planeación fiscal', description: 'Estrategias para optimización fiscal' },
  { name: 'Emprendedores', description: 'Asesoría para nuevos negocios' },
  { name: 'Trámites ante el SAT', description: 'Gestión de trámites y representación' },
  { name: 'Contabilidad electrónica', description: 'Sistemas de contabilidad digital' },
]

const values = [
  { name: 'Ética profesional', description: 'Actuamos siempre con integridad y transparencia' },
  { name: 'Responsabilidad', description: 'Cumplimos en tiempo y forma con los compromisos' },
  { name: 'Confidencialidad', description: 'Protegemos la información sensible de clientes' },
  { name: 'Calidad', description: 'Servicios técnicos con altos estándares' },
  { name: 'Innovación', description: 'Utilizamos herramientas digitales modernas' },
  { name: 'Trabajo en equipo', description: 'Fomentamos la colaboración efectiva' },
]

const whyChooseUs = [
  { title: '+10', description: 'Empresas satisfechas' },
  { title: '24/7', description: 'Atención personalizada' },
  { title: '100%', description: 'Especialistas certificados' },
  { title: '1, 2 y 3', description: 'Respuesta rápida garantizada' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-nexus-bg">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img src="/images/logo.png" alt="Nexus Contadores" className="h-16" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-sm font-semibold leading-6 text-nexus-text hover:text-nexus-accent cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              Agenda una asesoría
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="section-padding pt-32 text-center relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-black/40" style={{ backgroundImage: 'url("/images/herobg2.png")', backgroundSize: 'cover', backgroundPosition: 'center top 100px', opacity: 0.4 }}></div>
          <div className="relative z-10 max-w-8xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              ¿Harto de hacer contabilidad?
              <span className="block text-[#e2c88a] mt-4 drop-shadow-lg">Somos la experiencia que se traduce en resultados</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 font-medium drop-shadow-md max-w-3xl mx-auto">
              Tu tranquilidad fiscal comienza con nosotros
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn-primary inline-block text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Contáctanos hoy mismo
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">Quiénes Somos</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Nexus Contadores nació en 2022 con la misión de ofrecer un servicio contable cercano,
              confiable y útil para personas y empresas. Lo que comenzó como un pequeño despacho hoy
              es un equipo de 20 profesionales comprometidos con ayudarte a crecer con orden,
              claridad y tranquilidad fiscal.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-[#ebe4dc]">
                <FaBalanceScale className="w-8 h-8 text-nexus-accent mb-4" />
                <h3 className="text-xl font-semibold text-nexus-accent mb-3">Ética profesional</h3>
                <p className="text-nexus-text/80">Actuamos siempre con integridad y transparencia</p>
              </div>
              <div className="card bg-[#a28c6f] text-white">
                <FaClipboardCheck className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">Responsabilidad</h3>
                <p className="text-white/80">Cumplimos en tiempo y forma con los compromisos</p>
              </div>
              <div className="card bg-[#484742] text-white">
                <BsShieldLock className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">Confidencialidad</h3>
                <p className="text-white/80">Protegemos la información sensible de clientes</p>
              </div>
              <div className="card bg-[#ebe4dc]">
                <MdHighQuality className="w-8 h-8 text-nexus-accent mb-4" />
                <h3 className="text-xl font-semibold text-nexus-accent mb-3">Calidad</h3>
                <p className="text-nexus-text/80">Servicios técnicos con altos estándares</p>
              </div>
              <div className="card bg-[#a28c6f] text-white">
                <IoRocket className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovación</h3>
                <p className="text-white/80">Utilizamos herramientas digitales modernas</p>
              </div>
              <div className="card bg-[#484742] text-white">
                <RiTeamLine className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trabajo en equipo</h3>
                <p className="text-white/80">Fomentamos la colaboración efectiva</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.name} className="card">
                  <h3 className="text-lg font-semibold text-nexus-accent mb-2">{service.name}</h3>
                  <p className="text-sm text-nexus-text/80">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="btn-primary">
                Solicita una cotización personalizada
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">Por Qué Elegirnos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="card text-center">
                  <div className="text-3xl font-bold text-nexus-accent mb-2">{item.title}</div>
                  <div className="text-nexus-text/80">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title">Contacto</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="h-6 w-6 text-nexus-accent" />
                  <span>+52 (123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-nexus-accent" />
                  <span>contacto@nexuscontadores.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPinIcon className="h-6 w-6 text-nexus-accent" />
                  <span>Av. Principal #123, Col. Centro, Ciudad de México</span>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nexus-text">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexus-accent focus:ring-nexus-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nexus-text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexus-accent focus:ring-nexus-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nexus-text">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexus-accent focus:ring-nexus-accent"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-nexus-text text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Nexus Contadores. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}