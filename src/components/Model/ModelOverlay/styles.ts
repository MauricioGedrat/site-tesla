import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  margin-top: -100vh;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
