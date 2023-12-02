import { Button } from "@mantine/core";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Hello Pascoal Kahamba</p>
      <Button onClick={() => setCount((count) => count + 1)}>
        count: {count}
      </Button>
    </section>
  );
}
