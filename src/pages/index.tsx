import { Button } from "@mantine/core";
import { useState } from "react";
import HeaderMegaMenu from "../components/headerMegaMenu";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <HeaderMegaMenu />
      <p>Hello Pascoal Kahamba</p>
      <Button onClick={() => setCount((count) => count + 1)}>
        count: {count}
      </Button>
    </section>
  );
}
