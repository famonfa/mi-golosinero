import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";
import React from "react";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import { LinkNext } from "@/app/ui-library/ui-components/link/link";
import { MdAdd } from "react-icons/md";
import { palette } from "@/app/ui-library/vanilla.css";
import { DiGoogleAnalytics } from "react-icons/di";
import { elementStyle, linkStyle } from "./menuNav.css";
import { FaStore } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

const MenuNav = () => {
  const menu = [
    {
      title: "Productos",
      options: [
        {
          icon: (
            <MdFoodBank
              style={{ fontSize: "20px", color: palette.primaryDark }}
            />
          ),
          name: "Productos",
          link: "/productos",
        },
        {
          icon: (
            <MdAdd style={{ fontSize: "20px", color: palette.primaryDark }} />
          ),
          name: "Agregar Producto",
          link: "/productos/agregar-productos",
        },
      ],
    },
    {
      title: "Proveedores",
      options: [
        {
          icon: (
            <FaStore style={{ fontSize: "20px", color: palette.primaryDark }} />
          ),
          name: "Proveedores",
          link: "/proveedores",
        },
        {
          icon: <MdAdd style={{ fontSize: "20px", color: palette.primary }} />,
          name: "Agregar Proveedor",
          link: "/proveedor/agregar",
        },
      ],
    },
  ];

  const menuData = [
    {
      name: "Resumen",
      link: "/",
      icon: (
        <DiGoogleAnalytics
          style={{ fontSize: "20px", color: palette.primaryDark }}
        />
      ),
    },
  ];

  return (
    <Box style={{ width: "220px" }}>
      <Text
        variant="subtitle4"
        css={{
          marginTop: "30px",
          color: palette.gray300,
          marginBottom: "10px",
        }}
      >
        Datos
      </Text>
      <Stack direction="horizontal" css={{ alignItems: "center", padding: 0 }}>
        {menuData.map((item, key) => (
          <LinkNext href={""} key={key} className={linkStyle} hover>
            <Box className={elementStyle}>
              <span>{item.icon}</span>
              <Text
                variant="subtitle3"
                css={{
                  color: palette.primaryText,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </Text>
            </Box>
          </LinkNext>
        ))}
      </Stack>
      <Box>
        <Text
          variant="subtitle4"
          css={{
            marginTop: "30px",
            color: palette.gray300,
            marginBottom: "10px",
          }}
        >
          Páginas
        </Text>
        {menu.map((item, key) => (
          <>
            {item.options.map((o, key) => (
              <Stack
                direction="horizontal"
                css={{
                  alignItems: "center",
                  width: "100%",
                }}
                key={key}
              >
                <LinkNext href={o.link} className={linkStyle} hover>
                  <Box className={elementStyle}>
                    <Box>{o.icon}</Box>
                    <Text
                      variant="subtitle4"
                      css={{
                        color: palette.primaryText,
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {o.name}
                    </Text>
                  </Box>
                </LinkNext>
              </Stack>
            ))}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default MenuNav;
