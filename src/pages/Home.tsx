import { Link } from "react-router-dom";
import { ArrowRight, Code, LucideMonitor, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Full Stack Developer specializing in building exceptional
                digital experiences
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I offer a range of services to help your business succeed online
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Building responsive and performant websites and web applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I create custom websites that are fast, secure, and built with best practices. From simple landing pages to complex web applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <LucideMonitor className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>
                  Crafting beautiful, intuitive user interfaces and experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I design interfaces that are not only visually appealing but also provide a seamless user experience across all devices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessagesSquare className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Consultation</CardTitle>
                <CardDescription>
                  Technical advice and planning for your digital projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I provide expert consultation on web technologies, development strategies, and best practices to help you make informed decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;