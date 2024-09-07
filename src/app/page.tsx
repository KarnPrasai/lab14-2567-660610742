"use client";
import { Pagination , Group, Divider , Button, Textarea , Rating , Space, Container, Text, Title } from "@mantine/core";


export default function Home() {
  return (
    <Container size="600px">

      <Title order={2}>Food Review 🍕</Title>
      <Space h="sm"/>
      <Title order={4}>Your rating</Title>
      <Rating my="1"
        defaultValue={0}
        size="lg"
      />
        <Space h="xs"/>
      <Textarea py="auto"
        w="565px"
        size="sm"
        radius="xs"
        label="Your review"
        placeholder="Do you enjoy eating?"
        autosize
        minRows={3.5}
        maxRows={3.5} 
      />
      <Space h="xs"/>
      <Button size="sm" color="orange">Submit Review</Button>
      
      <Divider my="sm" />
      
      
      <Group justify="center" my="5px">
        <Title order={4}>Elon Musk</Title>
        <Rating my="1"
          value={5}
          size="sm"
          readOnly
        />
      </Group>
      <Text ta="center" c="dimmed" size="15px">Best pizza in this world. I give you X score.</Text>

      <Divider my="sm" />

      <Group justify="center" my="5px">
        <Title order={4}>Mark Zuck</Title>
        <Rating my="1"
          value={4}
          size="sm"
          readOnly
        />
      </Group>
      <Text ta="center" c="dimmed" size="15px">Best pizza in this world. I give you X score.</Text>
      <Space h="md"/>

      <Group justify="center" my="sm">
        <Pagination total={20} color="orange" size="md" />
      </Group>
    </Container>
  );
}
