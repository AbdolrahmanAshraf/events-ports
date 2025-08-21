import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaUsers, 
  FaThumbsUp, 
  FaBullhorn, 
  FaCloudDownloadAlt 
} from 'react-icons/fa';

interface Counts {
  customers: number;
  projects: number;
  code: number;
  downloads: number;
}

interface TargetCounts {
  customers: number;
  projects: number;
  code: number;
  downloads: number;
}

interface StatItem {
  icon: React.ReactNode;
  count: number;
  label: string;
  gradient: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  gradient: string;
  index: number;
  controls: any; // You might want to use a more specific type from framer-motion
}

const Stats = () => {
  const [counts, setCounts] = useState<Counts>({
    customers: 0,
    projects: 0,
    code: 0,
    downloads: 0
  });

  const targetCounts: TargetCounts = {
    customers: 850,
    projects: 230,
    code: 9450,
    downloads: 780
  };

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      startCounting();
    }
  }, [inView, controls]);

  const startCounting = () => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    const increment = {
      customers: targetCounts.customers / steps,
      projects: targetCounts.projects / steps,
      code: targetCounts.code / steps,
      downloads: targetCounts.downloads / steps
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      setCounts((prev) => ({
        customers: currentStep >= steps ? targetCounts.customers : Math.ceil(prev.customers + increment.customers),
        projects: currentStep >= steps ? targetCounts.projects : Math.ceil(prev.projects + increment.projects),
        code: currentStep >= steps ? targetCounts.code : Math.ceil(prev.code + increment.code),
        downloads: currentStep >= steps ? targetCounts.downloads : Math.ceil(prev.downloads + increment.downloads)
      }));

      if (currentStep >= steps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  };

  const stats: StatItem[] = [
    { 
      icon: <FaUsers />, 
      count: counts.customers, 
      label: 'Happy Customers',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: <FaThumbsUp />, 
      count: counts.projects, 
      label: 'Complete Projects',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <FaBullhorn />, 
      count: counts.code, 
      label: 'Lines of Code',
      gradient: 'from-amber-500 to-orange-500'
    },
    { 
      icon: <FaCloudDownloadAlt />, 
      count: counts.downloads, 
      label: 'Files Downloaded',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900 mb-2">
            Our Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Numbers that speak for our commitment and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
              gradient={stat.gradient}
              index={index}
              controls={controls}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<StatCardProps> = ({ icon, count, label, gradient, index, controls }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        delay: index * 0.15,
        duration: 0.6,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="relative group h-full"
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{ y: -10 }}
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="h-full p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden">
        <div className={`text-4xl mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {icon}
        </div>
        
        <motion.h3 
          className="text-4xl font-bold text-white mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {count.toLocaleString()}+
        </motion.h3>
        
        <p className="text-gray-400">{label}</p>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default Stats;