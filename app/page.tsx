"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Shield, Zap, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import hero from "../public/heroo.jpg"
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

 

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                Next-Gen KYC Solution
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
            >
              Echo AI
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
              Seamless identity verification through advanced facial recognition technology
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50">
                Learn More
              </Button> */}
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => router.push('/demo')}>Schedule a Demo</Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="animate-bounce">
            <ChevronRight className="h-8 w-8 text-blue-400 rotate-90" />
          </div>
        </motion.div>
      </section>

       {/* Features Section */}
       <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="flex-1 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-xl" />
                <div className="relative bg-blue-950/30 border border-blue-800/50 rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={hero.src}
                      alt="Echo ID Verification Process"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-green-400">Verification in progress</span>
                      </div>
                      <div className="h-1 bg-blue-900/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                          className="h-full bg-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex-1 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secure <span className="text-blue-400">Identity Verification</span> in Seconds
              </h2>
              {/* <motion.p variants={fadeIn} className="text-gray-400 max-w-2xl mx-auto">
              Our advanced facial recognition technology makes identity verification simple, secure, and lightning-fast.
            </motion.p> */}

              <div className="space-y-6">
                {[
                  {
                    title: "Facial Recognition",
                    description: "Advanced AI algorithms that accurately match facial features with stored data.",
                  },
                  {
                    title: "Multiple ID Support",
                    description: "Works with NIN, voter's card, driver's license, and international passport.",
                  },
                  {
                    title: "Instant Results",
                    description: "Get verification results and user details immediately after successful matching.",
                  },
                  {
                    title: "Bank-Grade Security",
                    description: "Advanced encryption and security protocols protect all user data.",
                  },
                  {
                    title: "Liveness Detection",
                    description: "Ensures the person being verified is physically present and not a photo or video.",
                  },
                  {
                    title: "Easy Integration",
                    description: "Simple API integration with your existing systems and workflows.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1">
                      <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How Echo AI <span className="text-blue-400">Works</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-400 max-w-2xl mx-auto">
              Our simple three-step process makes identity verification quick and painless.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Scan Your Face",
                description: "Our AI-powered system scans and analyzes facial features with precision.",
                icon: <Users className="h-10 w-10 text-blue-400" />,
                delay: 0.1,
              },
              {
                title: "Match with Database",
                description: "Echo AI matches your face with existing government ID databases.",
                icon: <Zap className="h-10 w-10 text-blue-400" />,
                delay: 0.2,
              },
              {
                title: "Instant Verification",
                description: "On successful match, user details are displayed and verification is complete.",
                icon: <CheckCircle className="h-10 w-10 text-blue-400" />,
                delay: 0.3,
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} transition={{ delay: item.delay }} className="relative">
                <Card className="bg-blue-950/20 border-blue-900/50 overflow-hidden group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6 p-3 bg-blue-900/30 rounded-lg inline-block">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose <span className="text-blue-400">Echo AI</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-400 text-xl max-w-2xl mx-auto">
              Our facial KYC solution offers unparalleled advantages for businesses and users alike.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "99.9% Accuracy",
                description: "Industry-leading facial recognition accuracy for reliable verification.",
                icon: <CheckCircle className="h-8 w-8" />,
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Fraud Prevention",
                description: "Advanced anti-spoofing technology prevents identity fraud attempts.",
                icon: <Shield className="h-8 w-8" />,
                color: "from-indigo-600 to-indigo-400",
              },
              {
                title: "Fast Onboarding",
                description: "Reduce onboarding time from days to seconds with instant verification.",
                icon: <Zap className="h-8 w-8 text-blue-400" />,
                color: "from-purple-600 to-purple-400",
              },
              {
                title: "Compliance Ready",
                description: "Meets global KYC and AML regulatory requirements for financial services.",
                icon: <CheckCircle className="h-8 w-8" />,
                color: "from-cyan-600 to-cyan-400",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <Card className="h-full bg-blue-950/10 border-blue-900/30 overflow-hidden group-hover:border-blue-700/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className={`p-3 rounded-lg mb-4 inline-block bg-gradient-to-br ${benefit.color} text-white`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Use Cases for <span className="text-blue-400">Echo AI</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-400 text-xl max-w-2xl mx-auto">
            Echo AI is versatile and can be used across various industries for secure identity verification.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Financial Services",
                description: "Streamline customer onboarding and KYC processes for banks and fintech companies.",
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Telecom Services",
                description: "Simplifies SIM registration and customer identity validation",
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Healthcare",
                description: "Verify patient identity for secure access to medical records and services.",
                color: "from-indigo-600 to-indigo-400",
              },
              {
                title: "Government Services",
                description: "Simplify citizen verification for accessing government services and benefits.",
                color: "from-purple-600 to-purple-400",
              },
              {
                title: "Travel and Hospitality",
                description: "Facilitates seamless check-ins and compliance with travel regulations",
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Corporate Security",
                description: "Enhance workplace security with reliable employee identification.",
                color: "from-cyan-600 to-cyan-400",
              },
              {
                title: "E-commerce",
                description: "Verifies sellers and buyers to build trust and reduce fraud",
                color: "from-blue-600 to-blue-400",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <Card className="h-full bg-blue-950/10 border-blue-900/30 overflow-hidden group-hover:border-blue-700/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    {/* <div className={`p-3 rounded-lg mb-4 inline-block bg-gradient-to-br ${benefit.color} text-white`}>
                      {benefit.icon}
                    </div> */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your <span className="text-blue-400">Onboarding Process</span>?
            </motion.h2>

            {/* <motion.p variants={fadeIn} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses that trust Echo ID for secure, fast, and reliable identity verification.
            </motion.p> */}

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50">
                Request Demo
              </Button> */}
              <div className="mt-8">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-600 text-blue-400 hover:bg-blue-950/50"
                  onClick={() => router.push('/demo')}
                >
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-950/20 border-t border-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">
                Echo <span className="text-blue-400">AI</span>
              </h2>
              <p className="text-gray-400 mt-2">Next-generation facial KYC solution</p>
            </div>

            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-blue-900/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Echo AI. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
