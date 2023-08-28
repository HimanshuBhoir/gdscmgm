import { TransitionColorContext } from '../../../context/TransitionColorContext';
import getRandomArbitrary from '../../../utils/getRandomArbitraryNumber';
import { BannerFooterLine } from '../../../Constants';
import styled, { useTheme } from 'styled-components';
import { useContext } from 'react';
import { DelayedLink } from '../../DelayedLink';
import { TRANSITION_DURATION } from '../../../Constants';

const LETTERS = BannerFooterLine;

function MainFooter() {
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();

  const handleLinkClick = () => {
    transitionColorHandler(color.darkgrey);
  };

  return (
    <Container>
      <LeftEnd data-scroll-section>
        {[...LETTERS].map((letter) => {
          return (
            <LeftSpan
              data-scroll
              data-scroll-position="top"
              data-scroll-speed={`${getRandomArbitrary(2, 5)}`}
            >
              {letter}
            </LeftSpan>
          );
        })}
      </LeftEnd>
      <RightEnd data-scroll-section onClick={handleLinkClick}>
        <DelayedLink to={'/aboutUs'} delay={TRANSITION_DURATION}>
          {[..."About Us"].map((letter) => {
            return (
              <RightSpan
                data-scroll
                data-scroll-position="top"
                data-scroll-speed={`${getRandomArbitrary(2, 5)}`}
              >
                {letter}
              </RightSpan>
            );
          })}
        </DelayedLink>
      </RightEnd>
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

const RightEnd = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
`;

const RightSpan = styled.span`
  display: inline-block;

  font-size: 18px;
  color: ${(props) => props.theme.backgroundColor.black};

  white-space: pre;
  letter-spacing: 0.3px;

  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;