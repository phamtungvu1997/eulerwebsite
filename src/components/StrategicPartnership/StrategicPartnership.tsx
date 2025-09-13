import Section from "../UI/Section";

export default function StrategicPartnership() {
  const BENEFITS = [
    "Access to elite technical talent across 26 countries",
    "Proven offshore/nearshore delivery centers",
    "25+ years of enterprise software experience",
    "700+ global clients served",
    "ISO 27001 certified security practices",
  ];

  return (
    <Section
      title="Strategic Partnership with FPT Software"
      description="Through our exclusive partnership with FPT Software — Vietnam’s leading technology provider with over 30,000 engineers — we deliver:"
      className="bg-white font-sans text-black flex"
    >
      <div className="flex flex-col md:flex-row">
        {/* Logo */}
        <div className="flex w-full md:w-1/2 md:mb-0">
          <img
            src="https://fptsoftware.com/-/media/project/fpt-software/fso/wp-content/uploads/sites/2/2021/07/183439207_3916297748466624_5844825440439178098_n.jpeg"
            alt="FPT Software Logo"
            className="w-auto mx-auto md:mx-0"
          />
        </div>

        {/* Bullet list */}
        <div className="flex w-full md:w-1/2 p-[5px]">
          <ul className=" grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">
                  ✓
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
