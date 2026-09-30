import { injected } from "wagmi/connectors";
import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";

export const targetChain = sepolia;

export const wagmiConfig = createConfig({
	chains: [targetChain],
	connectors: [injected()],
	transports: {
		[targetChain.id]: http(),
	},
});