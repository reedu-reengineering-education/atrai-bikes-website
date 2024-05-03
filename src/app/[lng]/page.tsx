import { i18n } from "@/components/pages/home/i18n";
import H1 from "@/components/ui/typography/H1";
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
				<div className="grid md:auto-rows-[18rem] grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[10rem]">
					<div className="h-full w-full col-span-2 bg-dot-fuchsia-400/50 relative flex items-center justify-center">
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]" />
						<H1 className="bg-clip-text text-transparent bg-gradient-to-b from-muted-foreground to-foreground">
							Atrai Bikes
						</H1>
					</div>
					<PageDialog
						lng={params.lng}
						content="about"
						animatedBackground="beams"
					>
						<div className="absolute bottom-0 left-0 p-4">
							<h2 className="text-2xl font-bold">{i18n[params.lng].about}</h2>
						</div>
					</PageDialog>
					<PageDialog
						lng={params.lng}
						content="hardware"
						animatedBackground="glowing-stars"
						size="large"
					>
						<div className="absolute top-0 right-0 p-4">
							<h2 className="text-2xl font-bold">
								{i18n[params.lng].hardware}
							</h2>
						</div>
					</PageDialog>

					<PageDialog
						lng={params.lng}
						content="partner"
						animatedBackground="grid"
					>
						<div className="absolute top-0 right-0 p-4">
							<h2 className="text-2xl font-bold">{i18n[params.lng].partner}</h2>
						</div>
					</PageDialog>

					<PageDialog lng={params.lng} content="faq" animatedBackground="beams">
						<div className="absolute top-0 right-0 p-4">
							<h2 className="text-2xl font-bold">{i18n[params.lng].faq}</h2>
						</div>
					</PageDialog>

					<PageDialog
						lng={params.lng}
						content="blog"
						animatedBackground="beams"
					>
						<div className="absolute top-0 right-0 p-4">
							<h2 className="text-2xl font-bold">{i18n[params.lng].blog}</h2>
						</div>
					</PageDialog>

					<PageDialog
						lng={params.lng}
						content="results"
						animatedBackground="beams"
					>
						<div className="absolute top-0 right-0 p-4">
							<h2 className="text-2xl font-bold">{i18n[params.lng].results}</h2>
						</div>
					</PageDialog>

					<PageDialog
						lng={params.lng}
						content="analytics"
						animatedBackground="beams"
						size="large"
					>
						<div className="absolute top-0 right-0 p-4">
							<h2 className="text-2xl font-bold">
								{i18n[params.lng].analytics}
							</h2>
						</div>
					</PageDialog>

					{/* <BentoCard href={"/about"} animatedBackground="beams">
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-2xl font-bold">{i18n[lng].about}</h2>
            </div>
          </BentoCard>
          <BentoCard
            href={"/analytics"}
            image={DataAnalyticsImage}
            size="large"
          >
            <h2 className="text-2xl font-bold">{i18n[lng].analytics}</h2>
          </BentoCard>
          <BentoCard href={"/results"} animatedBackground="glowing-stars">
            <h2 className="text-2xl font-bold">{i18n[lng].results}</h2>
          </BentoCard>
          <BentoCard href={"/blog"} animatedBackground="grid">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
              <h2 className="text-2xl font-bold">{i18n[lng].blog}</h2>
            </div>
          </BentoCard>
          <BentoCard size="large" image={HardwareImage} href={"/hardware"}>
            <div className="absolute top-0 right-0 p-4">
              <h2 className="text-2xl font-bold">{i18n[lng].hardware}</h2>
            </div>
          </BentoCard>

          <BentoCard href={"/partner"} size="large" animatedBackground="beams">
            <div className="w-full h-full flex flex-col">
              <h2 className="text-2xl font-bold">{i18n[lng].partner}</h2>
              <div className="w-full h-full  flex items-center justify-around group-hover:scale-105 transition-all">
                <div className="relative h-full aspect-square ">
                  <Image
                    src={ICImage}
                    alt="Instituto Cordial"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-full aspect-square">
                  <Image
                    src={ReeduImage}
                    alt="Reedu"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative h-full aspect-square">
                  <Image
                    src={Image52N}
                    alt="52n"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </BentoCard>
          <BentoCard href={"/faq"} animatedBackground="glowing-stars">
            <h2 className="text-2xl font-bold">{i18n[lng].faq}</h2>
          </BentoCard> */}
				</div>
			</div>
		</div>
	);
	//   return <Home />;
}
