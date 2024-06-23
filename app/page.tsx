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


</>
)


render(
    <Comp/>
) `}
      />
    </main>
  );
}
