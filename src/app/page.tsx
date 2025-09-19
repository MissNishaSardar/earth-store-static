import { HeartPlus, LockKeyhole, Package, Quote } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Home | Planet Earth Store",
	description: "Home page of Planet Earth Store",
};

const page = () => {
	return (
		<>
			<section className="grid place-items-center bg-[url(/home-banner.jpg)] bg-center bg-cover py-64">
				<div className="grid place-items-center gap-4">
					<h1 className="font- text-8xl tracking-widest text-green-900">
						EARTH
					</h1>
					<p className="text-4xl font-light tracking-widest uppercase">
						Multipurpose Store
					</p>
					<button className="mt-4 flex items-center justify-center rounded-sm bg-earth-light px-6 py-2 text-2xl text-white uppercase hover:bg-earth-dark">
						shop now
					</button>
				</div>
			</section>

			{/* sec-1 */}

			<section className="grid grid-cols-3 place-items-center justify-center gap-6 border-b border-gray-400 px-36 py-28">
				<div className="grid gap-1">
					<Image
						src="/poster1.jpg"
						alt="poster1.jpg"
						height={350}
						width={350}
					/>
					<p className="font-normal">Posters</p>
					<h2 className="text-2xl font-medium">Poster V1</h2>
					<p className="">₹239.00</p>
				</div>
				<div className="grid gap-1">
					<Image
						src="/poster2.jpg"
						alt="poster2.jpg"
						height={350}
						width={350}
					/>
					<p className="font-normal">Posters</p>
					<h2 className="text-2xl font-medium">Poster V2</h2>
					<p className="">₹219.00</p>
				</div>
				<div className="grid gap-1">
					<Image
						src="/poster3.jpg"
						alt="poster3.jpg"
						height={350}
						width={350}
					/>
					<p className="font-normal">Posters</p>
					<h2 className="text-2xl font-medium">Poster V3</h2>
					<p className="">₹254.00</p>
				</div>
			</section>

			{/* section-2 */}

			<section className="grid px-48 py-28">
				<div className="grid text-5xl font-semibold uppercase">
					What Our Customers Say
				</div>
				<div className="mt-10 grid grid-cols-3 place-items-center gap-28">
					<div className="grid space-y-5">
						<p className="">
							Fast shipping and excellent customer service. The
							product was even better than expected. I will
							definitely be a returning customer.
						</p>
						<div className="grid grid-cols-3 place-items-center justify-between">
							<Image
								src="/avatar-1.jpeg"
								alt="avatar-1.jpeg"
								height={40}
								width={40}
								className="h-10 w-10 rounded-full"
							/>
							<div className=""></div>
							<Quote className="text-earth-light fill-earth-light" />
						</div>
						<div className="font-bold uppercase">
							Jennifer Lewis
						</div>
					</div>

					<div className="grid space-y-5">
						<p className="">
							Thank you for the excellent shopping experience. It
							arrived quickly and was exactly as described. I will
							definitely be shopping with you again in the future.
						</p>
						<div className="grid grid-cols-3 place-items-center justify-between">
							<Image
								src="/avatar-2.jpeg"
								alt="avatar-2.jpeg"
								height={40}
								width={40}
								className="rounded-full"
							/>
							<div className=""></div>
							<Quote className="text-earth-light fill-earth-light" />
						</div>
						<div className="font-bold uppercase">Juan Carlos</div>
					</div>

					<div className="grid space-y-5">
						<p className="">
							Great user experience on your website. I found
							exactly what I was looking for at a great price. I
							will definitely be telling my friends.
						</p>
						<div className="grid grid-cols-3 place-items-center justify-between">
							<Image
								src="/avatar-3.jpeg"
								alt="avatar-3.jpeg"
								height={40}
								width={40}
								className="h-10 w-10 rounded-full"
							/>
							<div className=""></div>
							<Quote className="text-earth-light fill-earth-light" />
						</div>
						<div className="font-bold uppercase">Alicia Heart</div>
					</div>
				</div>
			</section>

			{/* <section-3> */}

			<section className="grid px-48 py-16">
				<div className="grid grid-cols-3 gap-20">
					<div className="flex items-center gap-4 border-r-1 border-gray-300">
						<div className="rounded-full bg-earth-light p-3">
							<LockKeyhole className="text-white" />
						</div>
						<div className="">
							<h1 className="text-lg font-semibold uppercase">
								Secure Payment
							</h1>
							<p className="">All our payments our SSL secured</p>
						</div>
					</div>

					<div className="flex items-center gap-4 border-r-1 border-gray-300">
						<div className="rounded-full bg-earth-light p-3">
							<Package className="text-white" />
						</div>
						<div className="">
							<h1 className="text-lg font-semibold uppercase">
								Delivered With Care
							</h1>
							<p className="">Super fast shipping to your door</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="rounded-full bg-earth-light p-3">
							<HeartPlus className="text-white" />
						</div>
						<div className="">
							<h1 className="text-lg font-semibold uppercase">
								Excellent Service
							</h1>
							<p className="">Live chat and phone support</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
