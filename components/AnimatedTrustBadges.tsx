'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function AnimatedTrustBadges() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      id: 1,
      number: 500,
      suffix: '+',
      label: 'Properties Sold',
      sublabel: 'Across 12 premium developments',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-600',
    },
    {
      id: 2,
      number: 2,
      prefix: 'AED ',
      suffix: 'B+',
      label: 'Total Transaction Value',
      sublabel: 'Since 2019',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-secondary-gold to-secondary-goldLight',
    },
    {
      id: 3,
      number: 8,
      suffix: '%',
      label: 'Average Annual ROI',
      sublabel: 'Rental yield performance',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      number: 15,
      suffix: '+',
      label: 'Years Licensed',
      sublabel: 'In UAE luxury real estate',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-bold uppercase tracking-wide">
                Trusted by Investors Worldwide
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-6">
              Investment Performance Metrics
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto font-medium">
              Proven track record of delivering exceptional results for high-net-worth investors
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-500/30 overflow-hidden">
                  
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} blur-xl opacity-20`} />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Number with CountUp */}
                    <div className="mb-4">
                      <div className="text-5xl font-black text-navy-900 mb-1 flex items-baseline">
                        {stat.prefix && (
                          <span className="text-3xl font-bold mr-1">{stat.prefix}</span>
                        )}
                        {inView && (
                          <CountUp
                            start={0}
                            end={stat.number}
                            duration={2.5}
                            delay={index * 0.2}
                            separator=","
                            decimals={0}
                            useEasing={true}
                          />
                        )}
                        {stat.suffix && (
                          <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-navy-600 font-medium">
                      {stat.sublabel}
                    </p>

                    {/* Progress Bar Animation */}
                    <motion.div
                      className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  ✓
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* As Featured In Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-10">
              <p className="text-sm font-bold text-navy-600 uppercase tracking-wide mb-6">
                As Featured In
              </p>
            </div>

            {/* Logo Carousel */}
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

              <motion.div
                className="flex items-center gap-12 py-6"
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-12 shrink-0">
                    {[
                      { name: 'Gulf News', width: 140 },
                      { name: 'Khaleej Times', width: 160 },
                      { name: 'Arabian Business', width: 150 },
                      { name: 'Forbes Middle East', width: 130 },
                      { name: 'Bloomberg', width: 140 },
                    ].map((logo, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        style={{ width: logo.width }}
                      >
                        <div className="bg-navy-900 text-white font-bold text-center py-4 px-6 rounded-lg">
                          {logo.name}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Credentials Banner */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  label: 'RERA Licensed',
                  sublabel: 'Broker #12345'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  label: 'Secure Transactions',
                  sublabel: 'Escrow Protected'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  label: 'Legal Compliance',
                  sublabel: 'DLD Registered'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  label: 'Investor Protection',
                  sublabel: 'Guaranteed'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-primary-500 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.label}</h4>
                  <p className="text-white/60 text-xs font-medium">{item.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
