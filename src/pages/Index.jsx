import { Box, Button, Container, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaMapMarkerAlt, FaCode } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <VStack align={["center", "flex-start"]} spacing={6} flex={1}>
              <Heading as="h1" size="2xl">
                Find Top Software Talent
              </Heading>
              <Text fontSize="xl">Particles is a marketplace to find skilled software developers specializing in web technologies like React, Node, .NET, Go, and JavaScript.</Text>
              <Button colorScheme="blue" size="lg" rightIcon={<FaSearch />}>
                Browse Developers
              </Button>
            </VStack>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers" />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Key Features
          </Heading>
          <Stack direction={["column", "row"]} spacing={8}>
            <Box p={6} bg="white" rounded="md" shadow="md" flex={1}>
              <HStack spacing={4} mb={4}>
                <FaSearch size={24} />
                <Text fontSize="xl" fontWeight="bold">
                  Curated Developer List
                </Text>
              </HStack>
              <Text>Browse a curated list of skilled software developers.</Text>
            </Box>
            <Box p={6} bg="white" rounded="md" shadow="md" flex={1}>
              <HStack spacing={4} mb={4}>
                <FaMapMarkerAlt size={24} />
                <Text fontSize="xl" fontWeight="bold">
                  Filter by Location & Tech
                </Text>
              </HStack>
              <Text>Filter developers by their location and technologies.</Text>
            </Box>
            <Box p={6} bg="white" rounded="md" shadow="md" flex={1}>
              <HStack spacing={4} mb={4}>
                <FaCode size={24} />
                <Text fontSize="xl" fontWeight="bold">
                  Direct Contact
                </Text>
              </HStack>
              <Text>Directly contact developers for opportunities.</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.600" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" color="white" mb={6}>
            Find Your Next Developer
          </Heading>
          <Button colorScheme="white" size="lg" rightIcon={<FaSearch />}>
            View Developers
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
