import { useState } from "react";
import { Box, Button, Checkbox, Container, Heading, HStack, Input, Stack, Text, VStack } from "@chakra-ui/react";
import ContactModal from "../components/ContactModal";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const technologies = ["React", "Node.js", ".NET", "Go", "JavaScript"];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTechnologyChange = (technology) => {
    const index = selectedTechnologies.indexOf(technology);
    if (index > -1) {
      setSelectedTechnologies(selectedTechnologies.filter((t) => t !== technology));
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  const filteredDevelopers = developers.filter((developer) => {
    const nameMatch = developer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = developer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const technologyMatch = selectedTechnologies.length === 0 || selectedTechnologies.some((t) => developer.specialties.includes(t));

    return (nameMatch || locationMatch) && technologyMatch;
  });

  return (
    <Box py={10}>
      <Container maxW="container.lg">
        <Heading as="h1" size="xl" mb={8}>
          Developers
        </Heading>
        <Stack direction={["column", "row"]} spacing={4} mb={8}>
          <Input placeholder="Search by name or location" value={searchTerm} onChange={handleSearch} />
          <HStack>
            {technologies.map((technology) => (
              <Checkbox key={technology} isChecked={selectedTechnologies.includes(technology)} onChange={() => handleTechnologyChange(technology)}>
                {technology}
              </Checkbox>
            ))}
          </HStack>
        </Stack>
        <VStack spacing={6} align="stretch">
          {filteredDevelopers.map((developer, index) => (
            <Box key={index} p={6} bg="white" rounded="md" shadow="md">
              <Heading as="h2" size="lg" mb={2}>
                {developer.name}
              </Heading>
              <Text fontSize="md" mb={2}>
                {developer.location}
              </Text>
              <Text fontSize="md" color="gray.600" mb={4}>
                Specialties: {developer.specialties.join(", ")}
              </Text>
              <ContactModal developer={developer} />
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Developers;
