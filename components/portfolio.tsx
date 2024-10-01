'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="John Doe"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div>
              <h2 className="text-4xl font-bold mb-4">Hello, I'm John Doe</h2>
              <p className="text-xl mb-4">A passionate full-stack developer with a love for creating beautiful and functional web applications.</p>
              <Button>Download CV</Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"].map((skill) => (
              <Card key={skill}>
                <CardHeader>
                  <CardTitle>{skill}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "E-commerce Platform", description: "A full-stack e-commerce solution built with React and Node.js" },
              { title: "Task Management App", description: "A productivity app created with React Native and Firebase" },
              { title: "Data Visualization Dashboard", description: "An interactive dashboard using D3.js and Vue.js" }
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <p className="text-center mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}