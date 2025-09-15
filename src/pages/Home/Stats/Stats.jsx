const Stats = () => {
  const stats = [
    { id: 1, value: "37+", label: "Years of Hard Work" },
    { id: 2, value: "500k+", label: "Happy Customer" },
    { id: 3, value: "28", label: "Qualified Team Member" },
    { id: 4, value: "750k+", label: "Monthly Orders" },
  ];

  return (
    <section className="bg-green-900 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="text-white border border-green-700 rounded-lg py-6"
          >
            <h3 className="text-3xl font-bold text-green-400">{stat.value}</h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
