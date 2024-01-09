import { Button, ButtonProps } from "@mantine/core";
import { FacebookIcon } from "lucide-react";
export default function FacebookButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) {
  return (
    <Button
      leftSection={
        <FacebookIcon
          style={{ width: "1rem", height: "1rem" }}
          color="#00ACEE"
        />
      }
      variant="default"
      {...props}
    />
  );
}
