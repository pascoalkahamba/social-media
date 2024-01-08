import { Group, Button, Box, Burger, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import classes from "../styles/headerMegaMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import ColorShemes from "./colorShemes";

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

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const { pathname } = useRouter();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image
            src="/photo-logo.jpg"
            alt="photo-logo"
            width={35}
            height={35}
          />
          <Group h="100%" gap={0} visibleFrom="sm" style={{ gap: "2px" }}>
            {links.map(({ link, label }) => (
              <Link href={link} key={link}>
                <a
                  className={`${classes.link} ${
                    pathname === link && classes.active
                  }`}
                >
                  {label}
                </a>
              </Link>
            ))}
          </Group>
          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
            <ColorShemes />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>
    </Box>
  );
}
