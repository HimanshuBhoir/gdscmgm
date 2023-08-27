import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import getRandomArbitrary from '../../../utils/getRandomArbitraryNumber';
import styled from 'styled-components';
import { BannerFooterLine } from '../../../Constants';

const LETTERS = BannerFooterLine;

function MainFooter() {
  return (
    <Container>
      <LeftEnd data-scroll-section>
        {[...LETTERS].map((letter, idx) => {
          return (
            <LeftSpan
              data-scroll
              data-scroll-position="top"
              data-scroll-speed={`${getRandomArbitrary(2, 5)}`}
              key={idx}
            >
              {letter}
            </LeftSpan>
          );
        })}
      </LeftEnd>
    </Container>
  );
}

export default MainFooter;

const Container = styled.footer`
  width: 100%;
  min-height: 50px;

  padding: 0 15px;
  border-top: 1px solid #dadce0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f8f8f8;

  font-family: 'Google Sans', sans-serif;
`;

const LeftEnd = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
`;

const LeftSpan = styled.span`
  display: inline-block;

  font-size: 18px;
  color: ${(props) => props.theme.backgroundColor.black};

  white-space: pre;
  letter-spacing: 0.3px;

  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;