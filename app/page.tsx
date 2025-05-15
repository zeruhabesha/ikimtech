import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Building2,
  CheckCircle,
  ChevronRight,
  Code,
  Headphones,
  Laptop,
  LayoutGrid,
  MessageSquare,
  Palette,
  Phone,
  Printer,
  Smartphone,
  Video,
  CuboidIcon as Cube,
  Mail,
  MapPin,
} from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectsSection } from "@/components/projects/projects-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-[#033D54] text-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">IKIM Tech</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#home" className="text-sm font-medium transition-colors hover:text-white/80">
                Home
              </Link>
              <Link href="#services" className="text-sm font-medium transition-colors hover:text-white/80">
                Services
              </Link>
              <Link href="#projects" className="text-sm font-medium transition-colors hover:text-white/80">
                Projects
              </Link>
              <Link href="#team" className="text-sm font-medium transition-colors hover:text-white/80">
                Team
              </Link>
              <Link href="#why-us" className="text-sm font-medium transition-colors hover:text-white/80">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button className="bg-white text-[#033D54] hover:bg-white/90">Contact Us</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full bg-[#033D54] py-12 md:py-24 lg:py-32 xl:py-36 text-white">
          <div className="container px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Innovative Tech Solutions for Your Business
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    We combine innovation, expertise, and dedication to deliver exceptional results for your digital
                    needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#services">
                    <Button className="bg-white text-[#033D54] hover:bg-white/90">
                      Our Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#033D54]">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive tech solutions tailored to your business needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Code className="h-10 w-10" />}
                title="Web Development"
                description="Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance user experience and engagement."
              />
              <ServiceCard
                icon={<Smartphone className="h-10 w-10" />}
                title="Mobile App Development"
                description="Custom iOS and Android applications tailored to your business needs, along with efficient cross-platform solutions."
              />
              <ServiceCard
                icon={<Palette className="h-10 w-10" />}
                title="UI/UX Design"
                description="Emphasizing user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts."
              />
              <ServiceCard
                icon={<Laptop className="h-10 w-10" />}
                title="Web Hosting"
                description="Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily."
              />
              <ServiceCard
                icon={<LayoutGrid className="h-10 w-10" />}
                title="Graphics Design"
                description="Creating logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise."
              />
              <ServiceCard
                icon={<Printer className="h-10 w-10" />}
                title="Printing"
                description="Our printing design service specializes in creating high-quality graphics for print media like brochures, business cards, and posters."
              />
              <ServiceCard
                icon={<Cube className="h-10 w-10" />}
                title="3D Designing"
                description="Offers innovative solutions for creating detailed three-dimensional models and visualizations. Whether for product design, architectural visualization, or animation."
              />
              <ServiceCard
                icon={<Video className="h-10 w-10" />}
                title="Video Editing"
                description="Transforms raw footage into polished, engaging content. We specialize in creating captivating videos for promotional materials, social media, events, and more."
              />
              <ServiceCard
                icon={<Building2 className="h-10 w-10" />}
                title="Market Consultancy"
                description="Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make data-driven decisions for growth and success."
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          id="why-us"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#033D54] text-white relative overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        >
          <div className="absolute inset-0 bg-[#033D54]/90 backdrop-blur-sm"></div>
          <div className="container px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px] relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At IKIM Tech, we combine innovation, expertise, and dedication to deliver exceptional results. Here's
                  why we stand out:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard icon={<CheckCircle className="h-12 w-12" />} title="Quality" description="Services" />
              <FeatureCard icon={<Palette className="h-12 w-12" />} title="Creative" description="Designers" />
              <FeatureCard icon={<MessageSquare className="h-12 w-12" />} title="Free" description="Consultation" />
              <FeatureCard icon={<Headphones className="h-12 w-12" />} title="Customer" description="Support" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-[#033D54] text-white">
          <div className="container px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Team Members</h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet our talented team of professionals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <TeamMemberCard
                image="/placeholder.svg?height=200&width=200"
                name="Mikiyas Taye"
                role="CEO & Website Developer"
              />
              <TeamMemberCard
                image="/placeholder.svg?height=200&width=200"
                name="Amen Dereje"
                role="Website Developer"
              />
              <TeamMemberCard
                image="/placeholder.svg?height=200&width=200"
                name="Betselot Bezuayehu"
                role="Software Developer"
              />
              <TeamMemberCard
                image="/placeholder.svg?height=200&width=200"
                name="Jecoliah Menberu"
                role="Sales Agent"
              />
              <TeamMemberCard
                image="/placeholder.svg?height=200&width=200"
                name="Bisrat Kifle"
                role="Graphics Designer and Video Editor"
              />
              <TeamMemberCard
                image="/placeholder.svg?height=200&width=200"
                name="Tesfahun Gibitan"
                role="3D and VFX Artist"
              />
              <TeamMemberCard
                image="/placeholder.svg?height=200&width=200"
                name="Mikyas Seffi"
                role="Marketing Consultant"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#033D54]">
                  Let's Work
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're excited to help bring your ideas to life! Whether you have a project in mind or need assistance
                  with your existing applications, we're here to collaborate. Let's discuss how we can contribute to
                  your success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full grid-cols-1 gap-8 py-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Input type="text" placeholder="Your Name" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Your Email" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Input type="tel" placeholder="Your Mobile" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select A Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="ui">UI/UX Design</SelectItem>
                      <SelectItem value="hosting">Web Hosting</SelectItem>
                      <SelectItem value="graphics">Graphics Design</SelectItem>
                      <SelectItem value="printing">Printing</SelectItem>
                      <SelectItem value="3d">3D Designing</SelectItem>
                      <SelectItem value="video">Video Editing</SelectItem>
                      <SelectItem value="consultancy">Market Consultancy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Special Note" className="min-h-[120px] border-gray-300" />
                </div>
                <Button className="w-full bg-[#033D54] hover:bg-[#033D54]/90">Submit</Button>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#033D54] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#033D54]">Address</h3>
                    <p className="text-gray-500">Jemo, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#033D54] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#033D54]">Phone</h3>
                    <p className="text-gray-500">+251951207168</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#033D54] flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#033D54]">Email</h3>
                    <p className="text-gray-500">ikimtechco@gmail.com</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden mt-6">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Map"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-[#033D54] text-white py-12">
        <div className="container px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1400px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">IKIM Tech Co.</h3>
              <p className="text-white/80">Innovative tech solutions for your business needs.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white">
                    Graphics Design
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-white/80 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white/80 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-white/80 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-white/80 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/80 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-white/80">Jemo, Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-white/80">+251951207168</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-white/80">ikimtechco@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">© IKIM Tech Co. All Right Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-0 space-y-4">
        <div className="rounded-full bg-[#033D54]/10 p-4 text-[#033D54]">{icon}</div>
        <h3 className="text-xl font-bold text-[#033D54]">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="rounded-full bg-white/10 p-4">{icon}</div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  )
}

function TeamMemberCard({ image, name, role }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="rounded-full overflow-hidden w-32 h-32 border-4 border-white/20">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-white/80">{role}</p>
      </div>
    </div>
  )
}
