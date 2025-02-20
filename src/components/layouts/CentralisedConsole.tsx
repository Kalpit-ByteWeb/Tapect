import { Image } from "../../libs/Index";

const IconListdata = [
  {
    IconsListTitle: "Bulk Update",
    IconListImageUrl: "/Icons/Bulk-Update.svg",
    IconListImageAlt: "Bulk Update",
  },
  {
    IconsListTitle: "CRM Integration",
    IconListImageUrl: "/Icons/Bulk-Update.svg",
    IconListImageAlt: "CRM Integration",
  },
  {
    IconsListTitle: "Centralised Contacts",
    IconListImageUrl: "/Icons/Bulk-Update.svg",
    IconListImageAlt: "Centralised Contacts",
  },
  {
    IconsListTitle: "Profile Design",
    IconListImageUrl: "/Icons/Bulk-Update.svg",
    IconListImageAlt: "Profile Design",
  },
];

const CentralisedConsole = () => {
  return (
    <section className="py-60">
      <div className="container mx-auto space-y-12">
        <div className="max-w-[878px] space-y-4">
          <h2 className="TitleHeading">Centralised management console</h2>
          <p className="Description-dark">
            Tapect's Centralised Management Console gives you complete control
            over your digital business cards. Easily update your card details
            and customize the design to match your brand, all from one
            convenient, user-friendly dashboard.
          </p>
        </div>
        <div className="bg-secondary rounded-16 flex flex-col justify-center p-12 space-y-12">
          <Image
            src="/Features/tapectConsole.webp"
            width={885}
            alt="Tapect Console"
            className="mx-auto"
          />
          <div className="flex gap-10 justify-center">
            {IconListdata.map((Iconlist, index) => (
              <div key={index} className="flex gap-2">
                <Image
                  src={Iconlist.IconListImageUrl}
                  alt={Iconlist.IconListImageAlt}
                />
                <span className="Description">{Iconlist.IconsListTitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentralisedConsole;
