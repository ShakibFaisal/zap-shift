import { TruckIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <TruckIcon className="w-10 h-10 text-[#003F38]" />,
  },
  {
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <TruckIcon className="w-10 h-10 text-[#003F38]" />,
  },
  {
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <TruckIcon className="w-10 h-10 text-[#003F38]" />,
  },
  {
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <TruckIcon className="w-10 h-10 text-[#003F38]" />,
  },
];

export default function HowItWork() {
  return (
    <section className="py-10 my-5 bg-[#F3F6F7]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#003F38] mb-6">
          How it Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-[#003F38] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
