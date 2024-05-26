import { useSignal } from "@preact/signals";
import Counter, {
  Clone1,
  Clone1H2,
  Clone2,
  Clone2H2,
  H2,
} from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>

        <Clone1H2 count={count} />
        <Clone2H2 count={count} />
        <Clone1 count={count}>
          <h2 className="data-[navfocus=true]:text-xl">
            doesn't work
          </h2>
        </Clone1>
        <Clone2 count={count}>
          <h2 className="data-[navfocus=true]:text-xl">
            doesn't work
          </h2>
        </Clone2>
        <Clone1 count={count}>
          <H2 />
        </Clone1>
        <Clone2 count={count}>
          <H2 />
        </Clone2>
        <Counter count={count} />
      </div>
    </div>
  );
}
