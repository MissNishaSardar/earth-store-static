import PostCard from "@/components/PostCard";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About | Planet Earth Store",
	description: "About page of Planet Earth Store",
};

const page = () => {
	return (
		<>
			<section className="grid place-items-center bg-[url(/about/about-banner.jpg)] bg-cover bg-center px-48 py-78">
				<div className="grid place-items-center justify-center">
					<h1 className="text-7xl font-semibold tracking-wider text-earth-dark uppercase">
						who are we ?
					</h1>
				</div>
			</section>

			<section className="grid place-items-center px-48 py-28">
				<div className="grid grid-cols-2 gap-24">
					<Image
						src="/about/our-mission.jpg"
						alt="logo"
						height={538}
						width={401}
						className="h-auto w-auto"
					/>

					<div className="space-y-4 p-16">
						<h1 className="text-4xl font-semibold uppercase">
							our mission
						</h1>
						<p>
							Hello, my name is Tyler Moore and with the help of
							many people I made this template. I made it so it is
							super easy to update and so that it flows perfectly
							with my tutorials. Lots of love and hundreds of
							hours went into making it. I hope you love it as
							much as I do. <br />
							<br />I wish you the best of luck with your
							business, enjoy the adventure.
						</p>
					</div>
				</div>
			</section>

			<PostCard />
		</>
	);
};

export default page;
