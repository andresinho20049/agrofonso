import Image from "next/image";

export const LogoComponent = () => {
	return (
		<div className="flex items-center justify-center gap-1 w-36">
			<Image
				alt="Logo"
				src={"/logo/Logo.png"}
				width={2100}
				height={1500}
				className="w-28"
			/>
		</div>
	);
};
