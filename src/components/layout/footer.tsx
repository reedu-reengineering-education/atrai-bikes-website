export default function Footer() {
  return (
    <footer className="w-full bg-white text-background p-2 md:p-6 text-center flex items-center justify-between text-sm flex-col md:flex-row">
      <p>© {new Date().getFullYear()} Atrai Bikes</p>
      <div className="flex justify-center items-center gap-6 mt-2 flex-wrap">
        <img
          src={"https://cloud.reedu.de/s/kgCBLmrHENwx2HS/download"}
          className="w-40 h-auto"
          alt={""}
        />
        <img
          src={"https://cloud.reedu.de/s/ykrJWwjbYTNE4nD/download"}
          className="w-auto h-10"
          alt={""}
        />
      </div>
      <p className="text-left">
        Reedu GmbH & Co. KG
        <br />
        Von-Steuben-Str. 21 - 48143 Münster
        <br />
        +49 251 98119797
        <br />
        kontakt@reedu.de
      </p>
    </footer>
  );
}
