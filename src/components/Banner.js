import styled from 'styled-components';

export const FlyingBanner = styled.marquee`
img{
    float: left;
    height: 5em;
    width: 5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
}
h1{
    float:left;
    background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2), color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22));
    background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2), color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22));
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;  
}
`;