import { type Signal, useSignal, useSignalEffect } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { cloneElement } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { JSX } from "preact/jsx-runtime";

interface CounterProps {
  count: Signal<number>;
}

export function H2() {
  return <h2 className="data-[navfocus]:text-8xl">doesn't work</h2>;
}

export function Clone1H2(p: CounterProps) {
  return (
    <Clone1 count={p.count}>
      <h2 className="data-[navfocus=true]:text-xl">
        works on client and server
      </h2>
    </Clone1>
  );
}

export function Clone2H2(p: CounterProps) {
  return (
    <Clone2 count={p.count}>
      <h2 className="data-[navfocus=true]:text-xl">
        works only on server
      </h2>
    </Clone2>
  );
}
export function Clone1(
  p: {
    children: JSX.Element;
    attributeName?: string;
  } & CounterProps,
) {
  return (
    <div data-comment=" wrapper" class="" style={{}} data-id="687387">
      <p.children.type
        {...p.children.props}
        data-navfocus={p.count.value % 2 === 1 ? "true" : "false"}
      />
    </div>
  );
}

export function Clone2(
  p: {
    children: JSX.Element;
    attributeName?: string;
  } & CounterProps,
) {
  return (
    <div data-comment=" wrapper" class="" style={{}} data-id="687387">
      {cloneElement(p.children, {
        ["data-navfocus"]: p.count.value % 2 === 1 ? "true" : "false",
      })}
    </div>
  );
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
