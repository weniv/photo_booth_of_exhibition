import { useRef, useState } from "react";
import styled from "styled-components";

export default function SnapPage() {
    const [time, setTime] = useState(10);

    const [pictures, setPictures] = useState([]);
    const videoRef = useRef(null);

    return (
        <>
            <Layout>
                <Timer>{time}</Timer>
                <Video autoPlay ref={videoRef} />
                <Count>(1/4)</Count>
            </Layout>
            <Guide>촬영 중 입니다</Guide>
        </>
    );
}

const Layout = styled.main`
    height: calc(100vh - 288px);
    padding: 219px 0 212px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 76px;
`;

const Video = styled.video`
    width: 1262px;
    height: 1584px;
    object-fit: cover;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg); /* Safari and Chrome */
    -moz-transform: rotateY(180deg);
    background-color: #d9d9d9;
`;

const Count = styled.p`
    color: #9d0c0c;
    text-align: center;
    font-size: 76.8px;
    font-weight: 700;
`;

const Timer = styled.div`
    width: 185px;
    height: 185px;
    border-radius: 19px;
    background: #fff;
    color: #9d0c0c;
    text-align: center;
    font-size: 96px;
    font-weight: 700;
    line-height: 185px;
`;

const Guide = styled.div`
    width: 100vw;
    height: 288px;
    background: #9d0c0c;
    color: #e9e4d8;
    text-align: center;
    font-size: 110px;
    font-weight: 700;
    line-height: 288px;
`;
