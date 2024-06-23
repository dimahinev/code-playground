import { Playground } from "./Playground";

export default function Home() {
  return (
    <main className="">
      <Playground
        code={`
// Hint:
// ✨write inside your code inside <> </>✨

const Comp = () => 
(<>

<h1>Hola World</h1>
</>
)


render(
    <Comp/>
) `}
      />
    </main>
  );
}
