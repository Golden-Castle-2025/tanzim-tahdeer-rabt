
import { useState, useEffect } from "react";

interface Stat {
  value: number;
  label: string;
  suffix: string;
  color: string;
  target: number;
}

const Statistics = () => {
  const stats: Stat[] = [
    { value: 0, label: "استثمارات", suffix: "مليار دينار", color: "text-gov-blue", target: 250 },
    { value: 0, label: "مشاريع", suffix: "مشروع", color: "text-gov-green", target: 150 },
    { value: 0, label: "شركات", suffix: "شركة", color: "text-gov-gold", target: 450 },
    { value: 0, label: "وظائف", suffix: "ألف وظيفة", color: "text-gov-blue", target: 65 }
  ];

  const [counters, setCounters] = useState<Stat[]>(stats);

  useEffect(() => {
    const interval = setInterval(() => {
      let allCompleted = true;
      
      setCounters(prevCounters => 
        prevCounters.map(counter => {
          if (counter.value < counter.target) {
            allCompleted = false;
            const increment = Math.ceil(counter.target / 50);
            const newValue = Math.min(counter.value + increment, counter.target);
            return { ...counter, value: newValue };
          }
          return counter;
        })
      );
      
      if (allCompleted) clearInterval(interval);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gov-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">الأثر الاقتصادي</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            يساهم المجلس في تحقيق النمو الاقتصادي من خلال دعم وتطوير القطاع الخاص
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {counters.map((stat, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-lg font-medium">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.suffix}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
