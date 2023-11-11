import TopNav from "@/components/layout/top-nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="flex-1">
        <section className="space-y-6 py-24 md:py-32 lg:py-64">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              ⚡ Engineering - Design - Networking ⚡
            </span>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Karya Tekno Solusi
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Trusted IT solutions for your digital transformation
            </p>
            <div className="space-x-4">
              <Button
                className="h-11 px-8"
                title="Email: info@karyateknosolusi.com"
                asChild
              >
                <a href="mailto:info@karyateknosolusi.com">Contact Us</a>
              </Button>
              <Button
                variant="outline"
                className="h-11 px-8 hover:bg-[#075e54] hover:text-white"
                title="WhatsApp: +6281908195855"
                asChild
              >
                <a href="https://wa.me/6281908195855" target="_blank">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We specialize in delivering tailored services to meet the diverse
              needs of our clients. Our service offerings include:
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>Application Services</CardTitle>
                <CardDescription>
                  Tailored solutions for application development and
                  maintenance, ensuring optimal performance and functionality.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>Infrastructure Services</CardTitle>
                <CardDescription>
                  Comprehensive solutions for designing, implementing, and
                  managing robust network infrastructures, emphasizing
                  standardization and cybersecurity.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>Managed Services</CardTitle>
                <CardDescription>
                  Proactive management and support to optimize IT operations and
                  enhance overall business efficiency.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="container space-y-6 py-8 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
              Resources
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our team comprises skilled professionals dedicated to delivering
              excellence in various domains
            </p>
          </div>
          <div className="mx-auto flex flex-wrap justify-center gap-4 md:max-w-[64rem] ">
            <Card className="md:max-w-[32.2%]">
              <CardHeader className="gap-4">
                <CardTitle>Network Engineers</CardTitle>
                <CardDescription>
                  Designing, implementing, and managing local and wide area
                  networks with a focus on standardization and cybersecurity.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full md:max-w-[32.2%]">
              <CardHeader className="gap-4">
                <CardTitle>Software Engineers</CardTitle>
                <CardDescription>
                  Building, installing, and maintaining applications with a
                  commitment to professionalism and cutting-edge technologies.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full md:max-w-[32.2%]">
              <CardHeader className="gap-4">
                <CardTitle>Support Engineers</CardTitle>
                <CardDescription>
                  Providing expert support for the products and technologies
                  developed by our company.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full md:max-w-[32.2%]">
              <CardHeader className="gap-4">
                <CardTitle>Project Management</CardTitle>
                <CardDescription>
                  Efficient allocation and management of resources to ensure
                  successful project completion.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full md:max-w-[32.2%]">
              <CardHeader className="gap-4">
                <CardTitle>QA Engineers</CardTitle>
                <CardDescription>
                  Specialized in QA testing tools and technologies to ensure
                  product quality and reliability.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="container space-y-6 py-8 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
              Our Products
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Elevate your business with our innovative products designed to
              meet the demands of the modern digital landscape:
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>Managed Services</CardTitle>
                <CardDescription>
                  Drive business growth through seamless digital transformation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>FTTx (Fiber to the x)</CardTitle>
                <CardDescription>
                  Deliver multimedia services, including broadcast and streaming
                  IP video, internet data, and VoIP, to multiple devices from a
                  single subscriber.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>Cloud Services</CardTitle>
                <CardDescription>
                  Leverage the power of cloud computing for scalable and
                  flexible solutions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>IT Consulting</CardTitle>
                <CardDescription>
                  We offer consulting services in the field of information
                  technology, covering network infrastructure, applications, and
                  a cybersecurity perspective to provide optimal solutions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="container space-y-6 py-8  md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
              We Are Karya Tekno Solusi
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Turning Challenges into Opportunities: Karya Tekno Solusi, <br />{" "}
              Your Trusted Partner in Digital Transformation
            </p>
          </div>
        </section>
      </main>
      <footer className="container mx-auto text-center p-4 text-muted-foreground text-sm">
        © 2023 Karya Tekno Solusi. All Rights Reserved.
      </footer>
    </>
  );
}
