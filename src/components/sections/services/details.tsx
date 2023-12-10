"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardOverlay,
  CardOverlayBorder,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const applicationService = [
  {
    title: "Internet of Things (IoT)",
    description:
      "Achieve swifter business responses using devices capable of self-reporting with minimal human intervention, thereby improving efficiency in delivering crucial information seamlessly as if there were no distance constraints.",
  },
  {
    title: "OS and Virtualization",
    description:
      "Elevating the agility, flexibility, and scalability of Information Technology through significant cost efficiencies across diverse domains, fostering business continuity and disaster recovery.",
    list: [
      { title: "OS Server" },
      { title: "Server Virtualization" },
      { title: "Infrastructure Virtualization" },
    ],
  },
  {
    title: "Database Platform",
    description:
      "This solution aids your company in achieving faster and more secure access, storage, and transformation of data, along with an improved system for managing extensive business data volumes.",
    list: [
      { title: "Database Replication" },
      { title: "Database Clustering Solution" },
      { title: "Solution Database Software" },
    ],
  },
];

const infraService = [
  {
    title: "ICT Infrastructure",
    description:
      "Mitigate the risks of downtime and reduce costs through the utilization of a bespoke, high-performance infrastructure meticulously crafted by our certified experts, boasting extensive experience in managing large-scale and intricate projects. Elements to incorporate in resilient physical infrastructure designs include:",
    list: [
      { title: "Topologies and protocols" },
      { title: "Switching and routing" },
      { title: "Wireless LAN Controllers (WLC)" },
      { title: "Firewalls" },
      { title: "Network and device management" },
    ],
  },
  {
    title: "Cloud Services (IaaS, PaaS, SaaS)",
    description:
      "We Delivers a comprehensive range of Cloud services, spanning public, private, and hybrid Cloud categories. Tailoring solutions to meet specific customer needs, we leverage service models such as Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), and Infrastructure-as-a-Service (IaaS).",
    list: [
      {
        title: "Public Cloud",
        subtilte:
          "Public cloud provides rapid deployment of IT resources and offers a cost-effective pay-as-you-go model, enabling users to pay only for the server resources utilized. By distributing infrastructure costs among multiple users, a low-cost provisioning approach becomes accessible to each user.",
      },
      {
        title: "Private Cloud",
        subtitle:
          "Immerse yourself in the transparency and openness of the public cloud from the secure confines of your data center. When the public cloud becomes congested, opt to independently build, manage, and oversee your resources.",
      },
      {
        title: "Hybrid Cloud",
        subtitle:
          "This is the convergence of the best from both worlds: on-premise data centers for consistent workloads and flexible cloud infrastructure for fluctuating IT demands. The objective is to amalgamate services and technologies from diverse cloud models, creating a unified, automated, and efficiently managed computing environment. It serves as a bridge connecting private cloud infrastructure with the ever-available accessibility and dynamically scalable nature of the public cloud.",
      },
    ],
  },
];

const servicesData = [
  {
    id: "application-service",
    title: "Application Service",
    subtitle:
      "Tailored solutions for application development and maintenance, ensuring optimal performance and functionality. With the expertise and experience of our specialists, we are committed to assisting you in maximizing the return on your information systems investment by providing comprehensive integration platforms and services.",
    content: applicationService,
  },
  {
    id: "infrastructure-service",
    title: "Infrastructure Service",
    subtitle:
      "Comprehensive solutions for designing, implementing, and managing robust network infrastructures, emphasizing standardization and cybersecurity. We offer the essential IT infrastructure required to underpin your business, spanning from personal computers, network hardware, and servers to cutting-edge data storage facilities.",
    content: infraService,
  },
  {
    id: "managed-service",
    title: "Managed Service",
    subtitle:
      "Proactive management and support to optimize IT operations and enhance overall business efficiency. In essence, Managed IT Services encapsulate a comprehensive suite of IT support services proffered by a third-party entity, notably an IT Managed Service Provider (MSP), adept at addressing diverse or comprehensive IT requirements. These services are available on-demand, for short-term exigencies, or structured through long-term contractual commitments. Essentially, it involves the outsourcing of a spectrum of IT needs encompassing infrastructure, applications, security, and maintenance to specialized managed IT service providers.",
  },
];

function Section(props: {
  id: string;
  title: string;
  subtitle: string;
  content?: Array<{
    title: string;
    description: string;
    list?: Array<{ title: string; subtitle?: string }>;
  }>;
}) {
  const { id, title, subtitle, content } = props;

  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    cardsRef.current.forEach((cardRef) => {
      if (!cardRef) return;

      const rect = cardRef.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.style.setProperty("--cursorX", `${x}px`);
      cardRef.style.setProperty("--cursorY", `${y}px`);
    });
  };

  return (
    <section
      id={id}
      className="container space-y-6 py-8 bg-slate-50/30 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
          {title}
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {subtitle}
        </p>
      </div>
      <div
        className={`groupborder mx-auto grid justify-center gap-4 sm:grid-cols-3 
        md:${content && content.length >= 3 ? "grid-cols-3" : "grid-cols-2"} `}
        onMouseMove={onMouseMove}
      >
        {content
          ? content.map((service, i) => (
              <Card
                className="p-0 m-0 groupcontent relative"
                key={i}
                ref={(element) => (cardsRef.current[i] = element)}
              >
                <CardOverlay />
                <CardOverlayBorder />
                <div className="bg-card text-card-foreground h-[calc(100%-2px)] w-[calc(100%-2px)] [border-radius:inherit] m-[1px] mt-[1.2px] z-[2] relative">
                  <CardHeader className="gap-4 pb-0"></CardHeader>
                  <CardContent>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-3">
                      {service.description}
                    </CardDescription>
                    {service.list ? (
                      <div className="mt-2">
                        {service.list.map((listing, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="p-1 rounded-sm dark:text-[#FDBB58] ">
                              <RocketIcon />
                            </div>
                            <div className="space-y-1 mt-1">
                              <p className="text-sm font-medium leading-none">
                                {listing.title}
                              </p>
                              {listing.subtitle ? (
                                <p className="text-sm text-muted-foreground">
                                  {listing.subtitle}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </div>
              </Card>
            ))
          : null}
      </div>
    </section>
  );
}

export default function ServicesDetails() {
  return (
    <>
      {servicesData.map((data, index) => (
        <Section key={index} {...data} />
      ))}
      <div className="container text-center space-y-6 pb-8 md:pb-12 lg:pb-24">
        <Button
          variant="outline"
          className={cn(
            "h-11 px-8 font-bold relative  hover:border-[#FDBB58]  hover:bg-background",
            "before:absolute before:-z-20 before:flex before:content-[''] before:bg-[#FDBB58] before:blur-md before:opacity-0 hover:before:opacity-50 before:w-full before:h-full"
          )}
          asChild
        >
          <Link href={"/#our-services"} className="flex items-center gap-3">
            <ArrowLeftIcon />
            Back
          </Link>
        </Button>
      </div>
    </>
  );
}
