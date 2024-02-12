import { AppRouter } from "@/trpc";
import { inferRouterOutputs } from "@trpc/server";

type RouterOutput = inferRouterOutputs<AppRouter>;

type Messages = RouterOutput["getFileMessages"]["fileMessages"];

type OmitText = Omit<Messages[0], "text">;

type ExtendedText = {
  text: string | JSX.Element;
};

// Try to make this show all properties
export type ExtendedMessage = OmitText & ExtendedText;
