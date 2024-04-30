"use client";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { Modal } from "@/app/ui-library/ui-components/modal/modal";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import { TextField } from "@mui/material";
import { Input, ScrollStyle } from "./Modals.css";
import { Button } from "@/app/ui-library/ui-components/button/button";
import { useState } from "react";
import { Box } from "@/app/ui-library/ui-components/box/box";
import { useMutation } from "@apollo/client";
import { DISCARD_PRODUCT, EDIT_PRODUCT } from "@/app/queries";
import { useRouter } from "next/navigation";

export const ModalDelete = ({
  css,
  id,
}: {
  css?: React.CSSProperties;
  id: number;
}) => {
  const [discardProduct, { loading, error }] = useMutation(DISCARD_PRODUCT);

  const [stage, setStage] = useState(1);
  const router = useRouter();

  const onDiscard = async () => {
    try {
      const response = await discardProduct({
        variables: {
          id: id,
        },
      });
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal css={css}>
      <Stack direction="vertical" css={{ padding: "1em" }}>
        <Text variant="h1" css={{ color: "white" }}>
          Eliminar Producto
        </Text>
        {stage === 1 ? (
          <>
            <Text variant="h3" css={{ color: "white" }}>
              ¿Estás seguro de que querés eliminar este producto?
            </Text>
            <Button
              onClick={() => setStage(2)}
              css={{ backgroundColor: "red", marginTop: "1em" }}
            >
              Sí, eliminar
            </Button>
          </>
        ) : (
          <>
            <Text variant="h3" css={{ color: "white" }}>
              ¿Muy seguro?
            </Text>
            <Text css={{ color: "white", marginTop: "1em" }}>
              Esta acción será irreversible
            </Text>
            <Button
              css={{ backgroundColor: "red", marginTop: "1em" }}
              onClick={onDiscard}
            >
              ¡Estoy seguro!
            </Button>
          </>
        )}
      </Stack>
    </Modal>
  );
};

export const ModalEditProduct = ({
  css,
  data,
}: {
  css?: React.CSSProperties;
  data: {
    product: {
      name: string;
      id: number;
      image: string;
      description: string;
      category: string;
      quantityPrices: {
        [x: string]: any;
        quantity: number;
        price: number;
      };
    };
  };
}) => {
  const [editProduct, { loading, error }] = useMutation(EDIT_PRODUCT);

  const [formData, setFormData] = useState({
    name: data?.product?.name,
    category: data?.product?.category,
    description: data?.product.description,
    image: data?.product?.image,
    quantityPrices: data?.product?.quantityPrices,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuantityPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      quantityPrices: prevFormData.quantityPrices.map((item: any, i: number) =>
        i === index ? { ...item, price: parseFloat(value) || 0 } : item
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await editProduct({
        variables: {
          id: data?.product.id,
          name: formData?.name,
          description: formData?.description,
          category: formData?.category,
          image: formData?.image,
          quantityPricesAttributes: {
            quantity: formData?.quantityPrices[0].quantity,
            price: formData?.quantityPrices[0].price,
          },
        },
      });
    } catch {
      console.log(error);
    } finally {
    }
  };

  console.log(formData);

  return (
    <Modal css={css}>
      <Stack
        direction="vertical"
        css={{
          padding: "1em",
          color: "white",
        }}
      >
        <Text variant="h1" css={{ color: "white" }}>
          Editar Producto
        </Text>
        <Box className={ScrollStyle}>
          <TextField
            className={Input}
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            value={formData?.name}
            onChange={handleChange}
            name="name"
            style={{ marginTop: "1em" }}
          />
          <TextField
            className={Input}
            id="outlined-basic"
            label="Descripción"
            variant="outlined"
            value={formData?.description}
            onChange={handleChange}
            name="description"
          />
          <TextField
            className={Input}
            id="outlined-basic"
            label="Categoría"
            variant="outlined"
            value={formData?.category}
            onChange={handleChange}
            name="category"
          />
          <TextField
            className={Input}
            id="outlined-basic"
            label="Imágen"
            variant="outlined"
            value={formData.image}
            onChange={handleChange}
            name="image"
          />
          {formData.quantityPrices.map(
            (item: { quantity: number; price: number }, index: number) => (
              <TextField
                key={index}
                className={Input}
                id="outlined-basic"
                label={`${item.quantity} unidades`}
                value={item.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleQuantityPriceChange(e, index)
                }
                name="price"
              />
            )
          )}
        </Box>
        <Button variant="primary" size="small" onClick={handleSubmit}>
          Guardar
        </Button>
      </Stack>
    </Modal>
  );
};
