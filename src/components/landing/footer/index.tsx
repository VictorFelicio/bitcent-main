import { Logo } from "../common/Logo";
import { Wrapper } from "../common/Wrapper";
import { SocialMediaContainer } from "./SocialMediasContainer";

export function Footer() {
	return (
		<Wrapper className="bg-black text-white py-10 sm:py-20">
			<div className="flex flex-col items-center md:items-stretch">
				<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7 sm:gap-0 text-center sm:text-left">
					<div className="flex flex-col items-center sm:items-start mb-7 sm:mb-0">
						<Logo />
						<div className="mt-3 text-zinc-400">
							<div>Plataforma financeira</div>
							<div className="flex gap-1.5">
								que{" "}
								<span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
									simplifica
								</span>{" "}
								sua vida
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
					<SocialMediaContainer />
					<p className="text-zinc-100 mt-7 md:mt-0 text-center">
						<span className="font-bold">
							BIT
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 font-thin">
								Cent
							</span>
						</span>{" "}
						® {new Date().getFullYear()} - Todos os direitos
						reservados
					</p>
				</div>
			</div>
		</Wrapper>
	);
}
