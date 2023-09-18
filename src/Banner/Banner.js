'use client';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import Link from 'next/link';

const Banner = () => {
	return (
		<div className="bg-gray-800 overflow-hidden w-full max-h-[70vh] flex justify-center items-center relative">
			<CldVideoPlayer
				width="1920"
				height="1080"
				src="https://res.cloudinary.com/dt04ucbpl/video/upload/v1695045170/bg-video_h4p1qr.mp4"
				autoPlay="always"
				controls={false}
				loop={true}
				autoPlayMode="always"
			/>
			<div className="flex justify-center items-center text-white text-center absolute w-full h-full bg-[#00000076]">
				<div className="p-4 max-w-[660px] space-y-4">
					<h1 className="text-xl md:text-5xl md:leading-tight font-bold " data-aos="fade-in">
						Join Us on the Path to Effortless Scheduling
					</h1>
					<p className="text-xs md:text-base">
						MeetPlanr is the most flexible, comprehensive appointment scheduling software for professionals, SMEs, and
						enterprises.
					</p>
					<Link
						className="inline-block bg-[#465AF7] py-2 px-3 hover:bg-sky-950 active:scale-95 duration-200 text-white font-semibold rounded-md text-sm md:text-base"
						data-testid="createEvent"
						href="/my-account"
					>
						Create Event
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
