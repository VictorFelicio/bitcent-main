import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandYoutube,
} from "@tabler/icons-react";
import { SocialMedia } from "./SocialMedia";

export function SocialMediaContainer() {
	return (
		<div className="flex">
			<SocialMedia
				icon={<IconBrandYoutube />}
				url="https://www.youtube.com.br"
			/>
			<SocialMedia
				icon={<IconBrandInstagram />}
				url="https://www.instagram.com.br"
			/>
			<SocialMedia
				icon={<IconBrandFacebook />}
				url="https://www.facebook.com.br"
			/>
		</div>
	);
}
