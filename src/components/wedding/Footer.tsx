import { useWeddingData } from "@/hooks/useWeddingData";

const Footer = () => {
  const data = useWeddingData();
  const { bride, groom } = data.couple || {};
  const weddingDate = data.weddingDate || '';
  const { address, contacts = [], madeWith } = data.footer || {};

  return (
    <footer
      className="py-20 md:py-28 px-4 text-center"
      style={{ background: "linear-gradient(180deg, hsl(20 40% 30%), hsl(38 50% 22%))" }}
    >
      <div className="font-script text-5xl md:text-7xl mb-4" style={{ color: "hsl(43 72% 55%)" }}>
        {groom} & {bride}
      </div>

      <div className="w-20 h-px mx-auto mb-6" style={{ background: "hsla(43, 72%, 55%, 0.5)" }} />

      <p className="font-heading text-xl md:text-2xl mb-2" style={{ color: "hsl(36 33% 90%)" }}>
        {weddingDate}
      </p>

      <p className="font-body text-sm mb-8" style={{ color: "hsla(36, 33%, 90%, 0.7)" }}>
        Thank you for being a part of our special day
      </p>

      <div className="font-body text-sm mb-4" style={{ color: "hsl(36 33% 90%)" }}>
        {address && (
          <p className="mb-4" style={{ color: "hsla(36, 33%, 90%, 0.9)" }}>
            📍 {address}
          </p>
        )}
        {contacts.map((contact: any, index: number) => (
          <p key={index} className="text-sm cursor-pointer phone-glow mb-1" style={{ color: "hsla(36, 33%, 90%, 0.8)" }}>
            <a href={`tel:${contact.phone}`}>📞 {contact.phone}</a>
          </p>
        ))}
      </div>

      <div className="w-16 h-px mx-auto mb-4" style={{ background: "hsla(43, 72%, 55%, 0.3)" }} />

      {madeWith && (
        <p className="font-body text-xs" style={{ color: "hsla(36, 33%, 90%, 0.5)" }}>
          {madeWith}
        </p>
      )}
    </footer>
  );
};

export default Footer;
