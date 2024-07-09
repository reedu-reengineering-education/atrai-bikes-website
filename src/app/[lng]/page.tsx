import { i18n } from "@/app/[lng]/i18n";
import H1 from "@/components/ui/typography/H1";
import H3 from "@/components/ui/typography/H3";
import H4 from "@/components/ui/typography/H4";
import { redirect } from "next/navigation";
import PageDialog from "./page-dialog";

export default async function Page({
  params,
}: {
  params: { lng: "de" | "en" | "pt" };
}) {
  if (!params.lng || !["de", "en", "pt"].includes(params.lng)) redirect("/de");

  return (
    <div className="flex flex-col items-center w-full gap-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:auto-rows-[16rem] md:auto-rows-[14rem] grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[12rem]">
          <div className="h-full w-full col-span-2 relative flex flex-col items-start justify-center px-4 md:px-8">
            <H1 className="py-0">Atrai Bikes</H1>
            <H4>
              transforms bike commuting by providing real-time data insights,
              fostering collaboration for cyclist-friendly cities.
            </H4>
          </div>
          <PageDialog
            lng={params.lng}
            content="project"
            animatedBackground="beams"
          >
            <div className="absolute bottom-0 left-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].project}
              </H3>
            </div>
          </PageDialog>

          <PageDialog
            lng={params.lng}
            content="news"
            animatedBackground="glowing-stars"
          >
            <div className="absolute bottom-0 left-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].news}
              </H3>
            </div>
          </PageDialog>

          <PageDialog
            lng={params.lng}
            content="product"
            className="col-span-2 md:col-span-3"
            image="https://cloud.reedu.de/s/zRccjmGC5c3HB89/download"
          >
            <div className="absolute bottom-0 left-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].product}
              </H3>
            </div>
          </PageDialog>

          <PageDialog
            lng={params.lng}
            content="connect"
            className="col-span-2 md:col-span-1"
          >
            <div className="absolute bottom-0 left-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].connect}
              </H3>
            </div>
          </PageDialog>

          <PageDialog
            lng={params.lng}
            content="documents"
            animatedBackground="grid"
          >
            <div className="absolute bottom-0 left-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].documents}
              </H3>
            </div>
          </PageDialog>

          <PageDialog
            lng={params.lng}
            content="faq"
            animatedBackground="glowing-stars"
          >
            <div className="absolute bottom-0 left-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].faq}
              </H3>
            </div>
          </PageDialog>

          <PageDialog
            lng={params.lng}
            content="insights"
            image="https://cloud.reedu.de/s/ZePFfYBETGWDNmn/download"
            className="col-span-2 md:row-span-2"
          >
            <div className="absolute bottom-0 right-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].insights}
              </H3>
            </div>
          </PageDialog>

          <PageDialog lng={params.lng} content="partner" className="col-span-2">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between py-10 md:py-16">
              <img
                src={"https://cloud.reedu.de/s/BSt4PwxEqBiK9fS/download"}
                className="h-full w-auto"
              />
              <img
                src={"https://cloud.reedu.de/s/mYk9oe45eKFCW6a/download"}
                className="h-full w-auto"
              />
              <img
                src={"https://cloud.reedu.de/s/D8KoCXaqQibF3kL/download"}
                className="h-full w-auto"
              />
            </div>
            <div className="absolute bottom-0 left-0 p-4">
              <H3 className="font-bold py-0 border-none">
                {i18n[params.lng].partner}
              </H3>
            </div>
          </PageDialog>
        </div>
      </div>
    </div>
  );
}
