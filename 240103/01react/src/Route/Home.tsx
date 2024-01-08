import React from "react";
import { useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../api";
import { StringDecoder } from "string_decoder";
import { makeImagePath } from "../utills";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Wrapper = styled.div`
  // background: white;
  height: 200vh;
  width: 100%;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Banner = styled.div<{ $bgphoto: string | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 60px;
  background-image: url(${(props) => props.$bgphoto});
  background-size: cover;
`;
const Title = styled.h2`
  color: ${(props) => props.theme.white.lighter};
  font-size: 58px;
  margin-bottom: 20px;
`;
const Overview = styled.p`
  font-size: 20px;
  line-height: 1.5;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
  top: -100px;
`;
const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
  gap: 10px;
`;
const Box = styled(motion.div)<{ $bgphoto: string }>`
  position: relative;
  background: white;
  background-image: url(${(props) => props.$bgphoto});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200px;
  font-size: 25px;
  overflow: hidden;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const Info = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  opacity: 0;
  h4 {
    text-aligh: center;
    font-size: 18px;
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: ${(props) => props.theme.black.lighter};
  border-radius: 10px;
  overflow: hidden;
`;
const BigCover = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
`;
const BigTitle = styled.h3`
  text-align: center;
  font-size: 28px;
  margin-top: 10px;
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
`;
const BigOverView = styled.p`
  position: relative;
  padding: 20px;
  color: ${(props) => props.theme.white.lighter};
  margin: 0 auto;
  line-height: 1.5;
`;

const rowVariants = {
  hidden: { x: window.outerWidth + 10 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 10 },
};
const boxVariants = {
  normal: { scale: 1 },
  hover: {
    zIndex: 99,
    scale: 1.3,
    y: -50,
    transition: { delay: 0.5, type: "tween" },
  },
};
const infoVariants = {
  hover: {
    opacity: 1,
  },
};

export const Home = () => {
  const bigMovieMatch = useMatch("/movies/:movieId");
  const { scrollY } = useScroll();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  console.log(data, isLoading);
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === bigMovieMatch.params.movieId
    );
  console.log(clickedMovie);
  const history = useNavigate();
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const offset = 6;
  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };
  const onOverlayClick = () => history("/");
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            $bgphoto={makeImagePath(data?.results[0].backdrop_path)}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                transition={{ type: "tween", duration: 1 }}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {data?.results
                  .slice(2)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      onClick={() => onBoxClick(movie.id)}
                      $bgphoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <BigMovie
                  layoutId={bigMovieMatch.params.movieId}
                  style={{
                    top: scrollY.get() + 100,
                  }}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverView>{clickedMovie.overview}</BigOverView>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
};
