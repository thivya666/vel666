import { motion } from 'framer-motion';

export const ButterflySVG = ({ size, color, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} fill={color} style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))' }}>
    {/* Body */}
    <ellipse cx="32" cy="36" rx="2" ry="12" fill="#5c3a58" />
    {/* Antennae */}
    <path d="M30 24 Q26 16 22 18" fill="none" stroke="#5c3a58" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M34 24 Q38 16 42 18" fill="none" stroke="#5c3a58" strokeWidth="1.5" strokeLinecap="round" />
    {/* Left Wings */}
    <path d="M30 30 C 15 10, -5 25, 15 42 C 5 55, 20 60, 30 46 Z" fill={color} />
    {/* Right Wings */}
    <path d="M34 30 C 49 10, 69 25, 49 42 C 59 55, 44 60, 34 46 Z" fill={color} />
    {/* Wing patterns (lighter spots) */}
    <circle cx="20" cy="30" r="4" fill="rgba(255,255,255,0.4)" />
    <circle cx="44" cy="30" r="4" fill="rgba(255,255,255,0.4)" />
    <circle cx="22" cy="46" r="2.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="42" cy="46" r="2.5" fill="rgba(255,255,255,0.3)" />
  </svg>
);

export default function Butterflies() {
  // Aesthetically placed butterflies across the screen
  const butterflies = [
    { top: '22%', right: '12%', size: 35, color: '#F48FB1', delay: 1.5 },
    { top: '75%', right: '18%', size: 40, color: '#F48FB1', delay: 2 },
    { top: '40%', left: '85%', size: 30, color: '#D8B4E2', delay: 1 },
    { top: '85%', left: '45%', size: 38, color: '#F06292', delay: 2.5 },
    { top: '10%', left: '55%', size: 28, color: '#D173C0', delay: 0.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {butterflies.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ 
            top: b.top, 
            ...(b.left ? { left: b.left } : {}),
            ...(b.right ? { right: b.right } : {}) 
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        >
          {/* Subtle wing flap animation */}
          <motion.div
            animate={{ scaleX: [1, 0.7, 1] }}
            transition={{ duration: 0.5 + (i * 0.1), repeat: Infinity, ease: "easeInOut" }}
          >
            <ButterflySVG size={b.size} color={b.color} className="opacity-80" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
