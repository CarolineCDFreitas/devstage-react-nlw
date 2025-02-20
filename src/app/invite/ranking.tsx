import Image from "next/image";

import cooper from "../../assets/medal-cooper.svg";
import gold from "../../assets/medal-gold.svg";
import silver from "../../assets/medal-silver.svg";

function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-4">
				<div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none ">
						<span className="font-semibold">1º</span> | Kim Jungwo
					</span>
					<span className="font-heading font-semibold text-2xl leading-none text-gray-200">
						980219
					</span>

					<Image
						src={gold}
						alt="medalha de ouro"
						width={56}
						height={85}
						className="absolute top-0 right-8"
					/>
				</div>

				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">2º</span> | Jeong Jaehyun
					</span>
					<span className="font-heading font-semibold text-2xl leading-none text-gray-200">
						970214
					</span>
					<Image
						src={silver}
						alt=""
						width={65}
						height={85}
						className="absolute top-0 right-8"
					/>
				</div>
				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">3º</span> | Kim Doyoung
					</span>
					<span className="font-heading font-semibold text-2xl leading-none text-gray-200">
						960201
					</span>
					<Image
						src={cooper}
						alt=""
						width={65}
						height={86}
						className="absolute top-0 right-8"
					/>
				</div>
			</div>
		</div>
	);
}

export default Ranking;
