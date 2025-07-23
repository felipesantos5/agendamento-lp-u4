"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Users,
  CreditCard,
  Smartphone,
  Clock,
  MessageSquare,
  Menu,
  X,
  Scissors,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  LifeBuoy,
  BarChart3,
  CalendarDays,
  Palette,
  CalendarCheck,
  MessageCircleReply,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-site.png";
import Image from "next/image";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1e293b] to-[#0f172a] text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center px-4 sm:px-6 py-4 max-w-7xl mx-auto relative"
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div> */}
          {/* <span className="font-bold text-lg sm:text-xl">BarberBook</span> */}
          <Image src={logo} alt="" className="w-52" />
        </motion.div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8">
          {["Features", "Demo", "Pricing", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav> */}

        {/* Desktop CTA Buttons */}
        {/* <motion.div
          className="hidden sm:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant="outline"
            className="border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 bg-transparent text-sm px-4 py-2 transition-all duration-300"
          >
            Free Trial
          </Button>
          <Button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white text-sm px-4 py-2 transition-all duration-300 hover:scale-105">
            Get Started
          </Button>
        </motion.div> */}

        {/* Mobile Menu Button */}
        {/* <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button> */}

        {/* Mobile Menu */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            y: mobileMenuOpen ? 0 : -20,
            display: mobileMenuOpen ? "block" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-slate-800 border border-slate-600 rounded-lg mt-2 p-4 md:hidden z-50"
        >
          <nav className="flex flex-col gap-4 mb-4">
            {["Features", "Demo", "Pricing", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 sm:hidden">
            <Button
              variant="outline"
              className="border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 bg-transparent w-full"
            >
              Free Trial
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white w-full">
              Get Started
            </Button>
          </div>
        </motion.div> */}
      </motion.header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 pt-6 sm:py-20 max-w-7xl mx-auto text-center relative md:pb-4">
        {/* Background gradient blob */}
        <motion.div
          className="absolute top-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-red-500 to-blue-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 text-xs sm:text-sm"
            {...fadeInUp}
          >
            <span className="text-slate-300">
              🎉 Now serving 500+ barbershops nationwide
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Agenda lotada, gestão simplificada.
            <br />
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              O sistema que sua barbearia merece.
            </span>
          </motion.h1>

          <motion.p
            className="text-slate-300 text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Chega de perder tempo com anotações em papel e telefonemas. O
            BarberBook é o sistema tudo-em-um que organiza seus agendamentos,
            reduz as faltas e te dá o controle total do seu negócio. Mais
            clientes, menos dor de cabeça.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 w-full transition-all duration-300 max-w-96">
                Fale com um Especialista
              </Button>
            </motion.div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto mb-12 sm:mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                value: "100%",
                label: "de Satisfação dos Clientes",
                color: "text-red-500",
              },
              {
                value: "60%",
                label: "de Aumento nos Agendamentos",
                color: "text-blue-500",
              },
              {
                value: "24/7",
                label: "de Agendamento Online",
                color: "text-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      {/* <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            {...fadeInUp}
          >
            Tudo o que você precisa para ter
            <br />
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              uma barbearia de sucesso.
            </span>
          </motion.h2>
          <motion.p
            className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Do agendamento ao pagamento, nós cuidamos de tudo para que você
            possa focar no que faz de melhor: a arte de barbear.
          </motion.p>
        </div>


        <motion.div
          className="gap-8 sm:gap-12 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >

          <motion.div className="space-y-6" variants={fadeInLeft}>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Aumente seu Faturamento em até 40%:
                </h3>
                <p className="text-slate-300">
                  buracos na sua agenda e envia lembretes automáticos,
                  diminuindo drasticamente as faltas e aumentando seu lucro
                  diário.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Ganhe 10+ Horas por Semana:
                </h3>
                <p className="text-slate-300">
                  Pare de interromper seu trabalho para atender o telefone.
                  Deixe que o BarberBook gerencie seus agendamentos de forma
                  automática e inteligente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Fidelize seus Clientes:
                </h3>
                <p className="text-slate-300">
                  Ofereça a conveniência que eles amam. Agendamento online 24h,
                  reagendamento fácil e uma comunicação profissional que os fará
                  voltar sempre.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Gestão Financeira sem Complicação:
                </h3>
                <p className="text-slate-300">
                  Tenha uma visão clara dos seus ganhos, comissões dos barbeiros
                  e serviços mais populares. Tome decisões baseadas em dados,
                  não em achismos.
                </p>
              </div>
            </div>
          </motion.div>


         <motion.div className="space-y-4" variants={fadeInRight}>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 p-6 hover:border-slate-500 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Smart Scheduling</h3>
                    <p className="text-slate-300 text-sm">
                      AI-powered appointment optimization
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 text-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Today's Schedule</span>
                    <span className="text-green-400">24 appointments</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-red-400">2:00 PM</span>
                      <span>John - Haircut</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-400">2:30 PM</span>
                      <span>Mike - Beard Trim</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 p-6 hover:border-slate-500 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Instant Payments</h3>
                    <p className="text-slate-300 text-sm">
                      Accept all payment methods
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 text-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Today's Revenue</span>
                    <span className="text-green-400">$1,840</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-blue-500 h-2 rounded flex-1"></div>
                    <div className="bg-red-500 h-2 rounded flex-1"></div>
                    <div className="bg-slate-600 h-2 rounded flex-1"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 p-6 hover:border-slate-500 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Auto Reminders</h3>
                    <p className="text-slate-300 text-sm">
                      Reduce no-shows by 85%
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">
                      SMS sent to John Smith
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    "Hi John! Reminder: Haircut tomorrow at 2:00 PM with Mike.
                    Reply C to confirm or R to reschedule."
                  </div>
                </div>
              </CardContent>
            </Card>

        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              E claro, tudo mais que você precisa.
            </h3>
            <p className="text-slate-300">
              As ferramentas completas para gerenciar sua barbearia como um
              profissional.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Users, text: "Cadastro de Clientes e Histórico" },
              // { icon: Smartphone, text: "Mobile App for iOS & Android" },
              { icon: Clock, text: "Gestão de Barbeiros e Horários" },
              { icon: TrendingUp, text: "Relatórios e Análise de Desempenho" },
              { icon: Zap, text: "Controle de Férias e Dias de Folga" },
              { icon: Shield, text: "Segurança Total dos seus Dados" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
              See All Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section> */}

      {/* Trust Section */}
      {/* <motion.section
        className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base"
          {...fadeInUp}
        >
          Trusted by <span className="text-white font-semibold">500+</span>{" "}
          barbershops across the country
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 opacity-60"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            "CLASSIC CUTS",
            "MODERN BARBER",
            "STYLE LOUNGE",
            "SHARP EDGES",
            "THE BARBER SHOP",
          ].map((brand, index) => (
            <motion.span
              key={brand}
              className="text-sm sm:text-xl font-bold"
              variants={fadeInUp}
              whileHover={{ scale: 1.1, opacity: 1 }}
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </motion.section> */}

      {/* Demo Video Section */}
      <motion.section
        id="demo"
        className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4"
            {...fadeInUp}
          >
            Veja o App em Ação
          </motion.h2>
          <motion.p
            className="text-slate-300 text-base sm:text-xl md:text-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Veja como é fácil gerenciar sua barbearia com nosso sistema de
            agendamento intuitivo
          </motion.p>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-600">
            <motion.div
              className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-600/10"></div>
              <div className="relative z-10 text-center px-4">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Vídeo demosntração
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  Clique para ver o vídeo de demostração
                </p>
              </div>
              <div className="absolute inset-0 cursor-pointer hover:bg-white/5 transition-colors"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4"
            {...fadeInUp}
          >
            Tudo o que sua barbearia precisa
            <br />
            para ter sucesso
          </motion.h2>
          {/* <motion.p
            className="text-slate-300 text-base sm:text-xl md:text-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From online booking to payment processing, we've got every aspect of
            your business covered
          </motion.p> */}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: CalendarCheck,
              title: "Agenda Online 24h",
              description:
                "Sua barbearia aberta para agendamentos 24/7. Deixe que seus clientes marquem o horário perfeito, mesmo com a porta fechada, e veja sua agenda encher sem precisar atender o telefone.",
              gradient: "from-blue-500 to-cyan-400",
            },
            {
              icon: MessageCircleReply,
              title: "Lembretes via WhatsApp",
              description:
                "Acabe com os 'furos' na agenda. Nosso sistema envia lembretes automáticos, garantindo que seus clientes nunca mais esqueçam o horário e reduzindo o não comparecimento a zero.",
              gradient: "from-green-500 to-teal-400",
            },
            {
              icon: Palette,
              title: "Painel de Controle Total",
              description:
                "Sua barbearia, suas regras. Personalize tudo: serviços, preços, horários, profissionais, planos e até as cores da sua página. Gerencie seu negócio de forma simples e visual.",
              gradient: "from-purple-500 to-indigo-400",
            },
            {
              icon: CalendarDays,
              title: "Agenda Inteligente para Barbeiros",
              description:
                "Uma visão clara e organizada do seu dia. Visualize seus agendamentos por dia ou semana, com cores para cada profissional e detalhes do cliente a um clique. Menos confusão, mais produtividade.",
              gradient: "from-orange-500 to-amber-400",
            },
            {
              icon: BarChart3,
              title: "Métricas que Geram Lucro",
              description:
                "Entenda a saúde do seu negócio em segundos. Tenha acesso a gráficos claros sobre receita bruta, comissões e serviços mais lucrativos. Tome decisões com base em dados, não em achismos.",
              gradient: "from-red-500 to-rose-400",
            },
            {
              icon: LifeBuoy,
              title: "Suporte que Resolve",
              description:
                "Estamos aqui para ajudar você a crescer. Conte com um suporte rápido e humanizado, disponível todos os dias, para tirar dúvidas e garantir que sua barbearia aproveite 100% da plataforma.",
              gradient: "from-gray-600 to-slate-500",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 p-4 sm:p-6 h-full hover:border-slate-500 transition-all duration-300">
                <CardContent className="p-0">
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            {...fadeInUp}
          >
            O que os donos de barbearia dizem.
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Roberto Filho",
              image:
                "https://res.cloudinary.com/de1f7lccc/image/upload/v1750433551/barber_profiles/elmby8i19wcjwjhfyhoa.jpg",
              title: "Dono, Barbearia Imperial",
              testimonial:
                "O BarberBook mudou o jogo para mim. Os agendamentos online aumentaram 60% e as faltas caíram para quase zero. Os lembretes automáticos são a melhor função!",
              gradient: "from-red-500 to-blue-600",
            },
            {
              name: "Jedaias",
              image:
                "https://res.cloudinary.com/de1f7lccc/image/upload/v1750433551/barber_profiles/elmby8i19wcjwjhfyhoa.jpg",
              title: "Dono, Barbearia Prime",
              testimonial:
                "O controle de comissões e o histórico de cada cliente são incríveis. Sei exatamente o que cada um gosta e consigo gerenciar a equipe de forma justa. Meus clientes amam a facilidade de agendar online.",
              gradient: "from-blue-500 to-red-500",
            },
          ].map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 p-6 sm:p-8 h-full hover:border-slate-500 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <motion.img
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full`}
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.image}
                    />
                    <div>
                      <div className="text-slate-200 font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm">
                        {testimonial.title}
                        <div className="flex text-yellow-400 text-sm">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 text-sm sm:text-base">
                    {testimonial.testimonial}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 rounded-xl sm:rounded-2xl p-8 sm:p-12 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Barber pole inspired accent */}
          <motion.div
            className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 via-white to-blue-600"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-blue-600 via-white to-red-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sua barbearia
            <br />
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              pode ser muito mais.
            </span>
          </motion.h2>
          <motion.p
            className="text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Continue com a agenda de papel e as incertezas, ou experimente a
            tranquilidade de ter uma operação profissional, lucrativa e 100% sob
            seu controle. A escolha é sua.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto transition-all duration-300">
                Falar com um Especialista
              </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 bg-transparent text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </motion.div> */}
          </motion.div>
          {/* <motion.p
            className="text-slate-400 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p> */}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        id="contact"
        className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl">BarberBook</span>
            </div>
            <p className="text-slate-300 text-sm">
              The modern scheduling solution for barbershops and salons.
            </p>
          </motion.div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Mobile App", "Integrations"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact Us", "Training", "API Docs"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Press"],
            },
          ].map((section, index) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">
                {section.title}
              </h4>
              <div className="space-y-2 text-slate-300 text-sm">
                {section.links.map((link) => (
                  <p key={link}>
                    <motion.a
                      href="#"
                      className="hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-600 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-300 text-xs sm:text-sm">
            <span>
              © 2025 BarbeariAgendamento. Todos os direito reservados.
            </span>
            {/* <div className="flex gap-4">
              <motion.a
                href="#"
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div> */}
          </div>

          <div className="flex items-center gap-4">
            {["Instagram"].map((social) => (
              <motion.a
                key={social}
                href="https://www.instagram.com/barbeariagendamento/"
                className="text-slate-300 hover:text-white text-sm transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
}
