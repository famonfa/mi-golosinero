"use client";
import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { container } from "@/app/ui-library/vanilla.css";
import React, { useEffect, useState } from "react";
import {
  info,
  infoBox,
  input,
  wrapper,
  wrapperBottom,
} from "./AddProducts.css";
import { Card, Input, MenuItem, Select, TextField } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PRODUCT } from "@/app/mutations";
import { Button } from "@/app/ui-library/ui-components/button/button";
import Image from "next/image";
import { GET_PRODUCTS } from "@/app/queries";
import { useRouter } from "next/navigation";

const AgregarProductos = () => {
  const [img, setImg] = useState("");
  const [newCat, setNewCat] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: null,
    category: "",
    image: null,
    quantity: null,
    price: null,
  });

  const [createProduct, { loading, error }] = useMutation(ADD_PRODUCT);
  const router = useRouter();
  const { data } = useQuery(GET_PRODUCTS);

  let categories: string[] = [];
  data?.products.map((product: { category: string }) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    } else {
      return;
    }
  });

  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await createProduct({
        variables: {
          name: formData.name,
          description: formData.description,
          quantityPricesAttributes: [
            {
              quantity:
                formData.quantity !== null ? parseInt(formData.quantity) : null,
              price: formData.price !== null ? parseInt(formData.price) : null,
            },
          ],
          category: formData.category,
          image: formData.image,
        },
      });
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    formData.image !== null && setImg(formData.image);
  }, [formData]);

  return (
    <Box className={container}>
      <Text variant="h1">Agregar Productos</Text>
      <Box className={wrapper}>
        <Card className={infoBox}>
          <Text variant="body1" css={{ marginBottom: "20px", color: "white" }}>
            Información general
          </Text>
          <Box className={info}>
            <Input
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Nombre del producto"
              sx={{ input: { color: "white" } }}
            />

            <Input
              name="description"
              onChange={handleChange}
              value={formData.description}
              placeholder="Descripción"
              sx={{ input: { color: "white" } }}
            />
          </Box>
        </Card>
        <Card className={infoBox}>
          <Text variant="body1" css={{ marginBottom: "20px", color: "white" }}>
            Categoría
          </Text>
          <Box className={info}>
            <Select
              value={formData.category}
              onChange={handleChange}
              className={input}
              name="category"
            >
              {categories?.map((category: string) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <Button
              size="tiny"
              onClick={() => setNewCat((prevState) => !prevState)}
            >
              {newCat ? "-" : "+"}
            </Button>
            {newCat && (
              <Input
                onChange={handleChange}
                value={formData.category}
                name="category"
                placeholder="Nueva categoría"
              />
            )}
          </Box>
        </Card>
      </Box>
      <Box className={wrapperBottom}>
        <Card className={infoBox}>
          <Text variant="body1" css={{ marginBottom: "20px", color: "white" }}>
            Cantidad y precio
          </Text>
          <Box className={info}>
            <Input
              sx={{ input: { color: "white" } }}
              onChange={handleChange}
              value={formData.quantity}
              name="quantity"
              placeholder="Cantidad" //get all the categories from data
            />
            <Input
              sx={{ input: { color: "white" } }}
              onChange={handleChange}
              value={formData.price}
              name="price"
              placeholder="Precio"
            />
          </Box>
        </Card>
        <Card className={infoBox}>
          <Text variant="body1" css={{ marginBottom: "20px", color: "white" }}>
            Imágen
          </Text>
          <Box
            className={info}
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Input
              sx={{ input: { color: "white" } }}
              placeholder="Url de la imágen"
              name="image"
              onChange={handleChange}
              value={formData.image}
            />
            <Box>
              {img && (
                <Image
                  src={img}
                  alt="img"
                  width={200}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              )}
            </Box>
          </Box>
        </Card>
      </Box>
      <Box style={{ marginTop: "30px" }}>
        <Button
          loading={loading}
          type="submit"
          size="row"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
      {error && <p>Error: {error.message}</p>}
    </Box>
  );
};

export default AgregarProductos;
