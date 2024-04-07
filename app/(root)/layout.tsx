import StreamClientProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<StreamClientProvider>{children}</StreamClientProvider>
		</main>
	);
};

export default RootLayout;
