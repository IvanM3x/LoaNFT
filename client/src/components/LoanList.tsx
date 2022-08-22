import * as React from "react";
import {
  Box,
  Divider,
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { NewLoanRequest } from "./modals/NewLoanRequest";
import { LoanStructOutput } from "../generated/contract-types/LoaNFT";
import { LoanItem } from "./LoanItem";

type LoanProps = {
  title: string;
  items: LoanStructOutput[];
};

export const LoanList: React.FC<LoanProps> = ({ title, items }) => {
  return (
    <Box as="section" py="12" bg={mode("gray.100", "gray.800")}>
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ md: "8" }}>
        <Box
          rounded={{ lg: "lg" }}
          bg={mode("white", "gray.700")}
          maxW="3xl"
          mx="auto"
          shadow="base"
          overflow="hidden"
        >
          <Flex align="center" justify="space-between" px="6" py="4">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              {title}
            </Text>
          </Flex>
          <Divider />
          <Stack spacing="6" py="5" px="8" divider={<StackDivider />}>
            {
              // cycle on loan requests
              items.length === 0 && (
                <Box>
                  <Box fontWeight="bold" maxW="xl" textAlign="center">
                    No active loans at the moment
                  </Box>
                </Box>
              )
            }
            {items.map((item) => (
              <LoanItem
                key={`${item.applicant}${item.erc721contract}${item.tokenId}`}
                loan={item}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
