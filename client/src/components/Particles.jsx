function Particles() {

  const particles = Array.from(
    { length: 30 },
    (_, i) => i
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {particles.map((particle) => (

        <div
          key={particle}
          className="absolute w-1 h-1 bg-red-900 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
        />

      ))}

    </div>
  );
}

export default Particles;