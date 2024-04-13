import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const developers = [
  {
    name: "John Doe",
    location: "New York, USA",
    specialties: ["React", "Node.js", "JavaScript"],
  },
  {
    name: "Jane Smith",
    location: "London, UK",
    specialties: ["Angular", "TypeScript", "CSS"],
  },
  {
    name: "Mike Johnson",
    location: "Sydney, Australia",
    specialties: ["Vue.js", "Python", "Django"],
  },
  {
    name: "Sarah Lee",
    location: "Toronto, Canada",
    specialties: ["React Native", "iOS", "Android"],
  },
  {
    name: "David Chen",
    location: "Shanghai, China",
    specialties: ["Java", "Spring", "MySQL"],
  },
  {
    name: "Emily Wilson",
    location: "Berlin, Germany",
    specialties: ["PHP", "Laravel", "WordPress"],
  },
];

const Developers = () => {
  return (
    <Box py={10}>
      <Container maxW="container.lg">
        <Heading as="h1" size="xl" mb={8}>
          Developers
        </Heading>
        <VStack spacing={6} align="stretch">
          {developers.map((developer, index) => (
            <Box key={index} p={6} bg="white" rounded="md" shadow="md">
              <Heading as="h2" size="lg" mb={2}>
                {developer.name}
              </Heading>
              <Text fontSize="md" mb={2}>
                {developer.location}
              </Text>
              <Text fontSize="md" color="gray.600">
                Specialties: {developer.specialties.join(", ")}
              </Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Developers;
