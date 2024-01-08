import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Box } from "@mantine/core";
import classes from "../styles/footerCentered.module.css";

const links = [
  {
    link: "/",
    label: "Página Inicial",
  },
  {
    link: "/myPosts",
    label: "Meus Posts",
  },
  {
    link: "/favoritePosts",
    label: "Posts Favoritos",
  },
  {
    link: "/profile",
    label: "Perfil",
  },
];

export default function FooterCentered() {
  const items = links.map(({ link, label }) => (
    <Anchor
      c="dimmed"
      key={label}
      href={link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <span className={classes.username}>Pascoal Kahamba</span>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <GithubIcon style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <LinkedinIcon style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <MailIcon style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
